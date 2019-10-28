/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const fs = require("fs").promises;
const { F_OK } = require("fs").constants;
const { spawn } = require("child_process");
const { ORGANIZATION, NAMESPACE } = require("./constants.js");

const USAGE = "usage: yarn add-sibling:packages <dependency> <dependee>";

const handleAccessError = (e, msg, filename, usage) => {
        if (e.code === "ENOENT") {
                console.error(msg, filename);
                console.error(usage);
        }

        process.exit(1);
};

(async () => {
        if (process.argv.length !== 4) {
                console.error("wrong number of arguments");
                console.error(USAGE);
                process.exit(1);
        }
        const [dependency, dependee] = process.argv.slice(2);

        try {
                await fs.access(
                        `packages/${NAMESPACE}-${dependency}/package.json`,
                        F_OK
                );
        } catch (e) {
                handleAccessError(e, "no such dependency", dependency, USAGE);
        }

        try {
                await fs.access(
                        `packages/${NAMESPACE}-${dependee}/package.json`,
                        F_OK
                );
        } catch (e) {
                handleAccessError(e, "no such dependee", dependee, USAGE);
        }

        const lerna = spawn("lerna", [
                "add",
                `@${ORGANIZATION}/${NAMESPACE}-${dependency}`,
                "--scope",
                `@${ORGANIZATION}/${NAMESPACE}-${dependee}`
        ]);
        lerna.on("error", e => {
                if (e.code === "ENOENT") console.error("no lerna found");
                process.exit(1);
        });
        lerna.on("close", code => {
                process.exit(code);
        });
        lerna.stdout.on("data", data => {
                process.stdout.write(data);
        });
        lerna.stderr.on("data", data => {
                process.stderr.write(data);
        });
})();
