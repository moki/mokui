/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const {
        ORGANIZATION,
        REPOSITORY,
        PACKAGES,
        KEYWORDS,
        VERSION,
        LICENSE,
        ACCESS,
        AUTHOR,
        LIB,
        CJS,
        ESM
} = require("./constants");

const PackageJSONTemplate = ({ name, pkgname }) =>
        JSON.stringify(
                {
                        name: `@${ORGANIZATION}/${pkgname}`,
                        description: `${name} web ui`,
                        version: VERSION,
                        keywords: KEYWORDS,
                        license: LICENSE,
                        author: AUTHOR,
                        main: `${LIB}/${CJS}/${pkgname}.js`,
                        ...(ESM
                                ? { module: `${LIB}/${ESM}/${pkgname}.js` }
                                : {}),
                        files: [`/${LIB}`],
                        repository: {
                                type: "git",
                                url: REPOSITORY,
                                directory: `${PACKAGES}/${pkgname}`
                        },
                        publishConfig: {
                                access: ACCESS
                        }
                },
                null,
                2
        ) + "\n";

module.exports = PackageJSONTemplate;
