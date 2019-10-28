/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { F_OK } = require("fs").constants;
const { access, appendFile, mkdir } = require("fs").promises;
const { spawn } = require("child_process");

const PackageJSONTemplate = require("./package-json-template");
const NpmignoreTemplate = require("./npmignore-template");
const ReadmeTemplate = require("./readme-template");
const CssTemplate = require("./css-template");
const TsTemplate = require("./ts-template");

const { NAMESPACE, PACKAGES } = require("./constants");

const USAGE = "usage: yarn new:packages <package_name>";

/* Error handling */
const handleAccessError = e => {
        if (e.code !== "ENOENT") {
                console.error(e);
                process.exit(1);
        }
};

const handleFSCreateError = e => {
        console.error(e);
        process.exit(1);
};

const handleDuplicateError = ({ packages, pkgname, name }) => {
        console.error(
                "duplicate package names aren't allowed,\n" +
                        `${name} already exists at ${packages}/${pkgname}`
        );
        process.exit(1);
};

(async () => {
        if (process.argv.length !== 3) {
                console.error("wrong number of arguments");
                console.error(USAGE);
                process.exit(1);
        }

        const [name] = process.argv.slice(2);
        const pkgname = `${NAMESPACE}-${name}`;

        let pkgexists = false;

        try {
                await access(`${PACKAGES}/${pkgname}/package.json`, F_OK);
                pkgexists = !pkgexists;
        } catch (e) {
                handleAccessError(e);
        }

        if (pkgexists) {
                handleDuplicateError({ PACKAGES, pkgname, name });
        }

        /* scaffold package folder */
        try {
                await mkdir(`${PACKAGES}/${pkgname}`);
        } catch (e) {
                handleFSCreateError(e);
        }

        /* scaffold package.json */
        try {
                await appendFile(
                        `${PACKAGES}/${pkgname}/package.json`,
                        PackageJSONTemplate({ name, pkgname }),
                        {
                                mode: 0o666
                        }
                );
        } catch (e) {
                handleFSCreateError(e);
        }

        /* scaffold .npmignore */
        try {
                await appendFile(
                        `${PACKAGES}/${pkgname}/.npmignore`,
                        NpmignoreTemplate(),
                        {
                                mode: 0o666
                        }
                );
        } catch (e) {
                handleFSCreateError(e);
        }

        /* scaffold css file */
        try {
                await appendFile(
                        `${PACKAGES}/${pkgname}/${pkgname}.css`,
                        CssTemplate(),
                        { mode: 0o666 }
                );
        } catch (e) {
                handleFSCreateError(e);
        }

        /* scaffold ts file, import css*/
        try {
                await appendFile(
                        `${PACKAGES}/${pkgname}/index.ts`,
                        TsTemplate({ name }),
                        { mode: 0o666 }
                );
        } catch (e) {
                handleFSCreateError(e);
        }

        /* scaffold README.MD */
        try {
                await appendFile(
                        `${PACKAGES}/${pkgname}/README.MD`,
                        ReadmeTemplate({ name, pkgname }),
                        { mode: 0o666 }
                );
        } catch (e) {
                handleFSCreateError(e);
        }

        const yarn = spawn("yarn", null, {
                cwd: `${process.cwd()}/${PACKAGES}/${pkgname}`
        });
        yarn.on("error", e => {
                if (e.code === "ENOENT") console.error("no yarn found");
                process.exit(1);
        });
        yarn.on("close", code => {
                process.exit(code);
        });
        yarn.stdout.on("data", data => {
                process.stdout.write(data);
        });
        yarn.stderr.on("data", data => {
                process.stderr.write(data);
        });
})();
