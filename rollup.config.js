/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { existsSync } from "fs";

import typescript from "rollup-plugin-typescript2";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";
import json from "rollup-plugin-json";

import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

/* Build Constants */

/* Production build bundles each package with lerna
 * to the <BUILD_DIR> subfolder inside each corresponding <packages/**> package folder.
 *
 * Development build bundles story assets as monolith application
 * in the watch mode.
 * Serves it @DEV_SERVER_HOST:DEV_SERVER_PORT with live reload.
 */

const PRODUCTION = process.env.NODE_ENV === "production";

/* Do not attempt to bundle package if it doesn't export assets */
if (PRODUCTION && !existsSync(process.cwd() + "/index.ts")) {
        process.exit();
}

const DEV_SERVER_HOST = "localhost";
const DEV_SERVER_PORT = 3000;
const STORY_DIR = "stories/";

const BUILD_DIR =
        PRODUCTION && process.env.LERNA_PACKAGE_NAME
                ? "dist/"
                : `${STORY_DIR}dist`;

const pkg =
        PRODUCTION &&
        process.env.LERNA_PACKAGE_NAME &&
        require(`${process.env.LERNA_PACKAGE_NAME}/package.json`);

const dependencies = ({ dependencies }) => Object.keys(dependencies || {});

const pkgname = ({ name }) => name;

const stripscope = name => name.slice(name.lastIndexOf("/") + 1);

const pkgdependencies = dependencies(pkg);

const noscopepkgname = stripscope(pkgname(pkg));

const _input = () =>
        PRODUCTION
                ? {
                          [noscopepkgname]: "index.ts"
                  }
                : [`${STORY_DIR}index.ts`];

const _output = () =>
        PRODUCTION
                ? [
                          {
                                  dir: `${BUILD_DIR}cjs`,
                                  format: "cjs",
                                  sourcemap: false
                          },
                          {
                                  dir: `${BUILD_DIR}esm`,
                                  format: "esm",
                                  sourcemap: false
                          }
                  ]
                : { dir: BUILD_DIR, format: "esm", sourcemap: false };

const _external = () => (PRODUCTION ? id => pkgdependencies.includes(id) : "");

const _serve = () =>
        !PRODUCTION
                ? serve({
                          headers: {
                                  "Access-Control-Allow-Origin": "*"
                          },
                          contentBase: [STORY_DIR, BUILD_DIR],
                          host: DEV_SERVER_HOST,
                          port: DEV_SERVER_PORT
                  })
                : "";

const _livereload = () =>
        !PRODUCTION
                ? livereload({
                          watch: [STORY_DIR, BUILD_DIR]
                  })
                : "";

const _postcss = () =>
        postcss({
                plugins: [autoprefixer(), cssnano()],
                extensions: [".css"],
                ...(PRODUCTION
                        ? {
                                  extract: `${BUILD_DIR + noscopepkgname}.css`,
                                  inject: false
                          }
                        : {
                                  extract: false,
                                  inject: true
                          })
        });

const _typescript = () =>
        typescript({
                tsconfig: "../../tsconfig.json"
        });

const config = {
        input: _input(),
        output: _output(),
        external: _external(),
        plugins: [
                json(),
                _typescript(),
                _livereload(),
                _postcss(),
                _serve(),
                terser(),
                json()
        ]
};

export default config;
