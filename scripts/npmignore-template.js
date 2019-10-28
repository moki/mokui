/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { LIB } = require("./constants");

const NpmignoreTemplate = () => `*\n!${LIB}/**\n`;

module.exports = NpmignoreTemplate;
