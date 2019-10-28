/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { NAMESPACE } = require("./constants");

const TsTemplate = ({ name }) => `import "./${NAMESPACE}-${name}.css";\n`;

module.exports = TsTemplate;
