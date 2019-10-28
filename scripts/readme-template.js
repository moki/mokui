/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { ORGANIZATION, LIB } = require("./constants");

let _s;

const Separator = () => {
        if (_s) return _s;
        return (_s = "-".repeat(80));
};

const Section = ({ title, content }) =>
        `${title}\n${Separator()}\n${content ? content + "\n" : "\n"}\n`;

const List = ({ items }) => {
        let s = "";
        const l = items.length;

        for (let i = 0; i < l; ++i) {
                const symbol = items[i].symbol;
                const indentation = items[i].indentation;
                s += `${indentation ? indentation : ""}${
                        symbol ? symbol : "*"
                } ${items[i].content}\n`;
        }

        return s;
};

const Code = ({ content }) => `\`\`\`\n${content}\n\`\`\``;

/*
 * if you are reading this its too late
 */
const Table = ({ columns, width = 80 }) => {
        let s = "";
        if (!columns) return s;
        const cwidth = new Array(columns.length - 1);
        const clen = columns.length;
        const rows = 2;
        const sepidx = [];
        for (let i = 0; i < rows; ++i) {
                let spacing = false;
                let separating = true;
                for (let j = 0, k = 0; j < width; ++j) {
                        if (i === rows - 1) {
                                s +=
                                        sepidx.includes(j - 1) ||
                                        sepidx.includes(j + 1) ||
                                        j === width - 2
                                                ? " "
                                                : sepidx.includes(j) ||
                                                  j === width - 1
                                                ? "|"
                                                : "-";
                                continue;
                        }
                        if (spacing) {
                                if (k === clen) {
                                        s += j !== width - 1 ? " " : "|";
                                        continue;
                                }
                                if (!cwidth[k - 1]) {
                                        cwidth[k - 1] =
                                                j +
                                                parseInt(
                                                        columns[k - 1].ratio *
                                                                width,
                                                        10
                                                ) -
                                                (columns[k - 1].s.length +
                                                        1 +
                                                        1 +
                                                        1);
                                }
                                if (j < cwidth[k - 1]) s += " ";
                                else {
                                        spacing = false;
                                        separating = true;
                                }
                        }
                        if (!spacing && separating) {
                                if (j != 0) {
                                        s += " | ";
                                        sepidx.push(j + 1);
                                        j += 2;
                                } else {
                                        s += "| ";
                                        sepidx.push(j);
                                        j++;
                                }
                                separating = false;
                                continue;
                        }
                        if (!spacing && !separating) {
                                if (k < clen) {
                                        s += columns[k].s;
                                        j += columns[k].s.length - 1;
                                        k++;
                                }
                                spacing = true;
                        }
                }
                s += "\n";
        }
        return s;
};

const ReadmeTemplate = ({ name, pkgname }) =>
        Section({ title: name }) +
        Section({
                title: "Description",
                content: "\\<package description\\>"
        }) +
        Section({
                title: "Installation",
                content: Code({
                        content: `yarn add @${ORGANIZATION}/${pkgname}`
                })
        }) +
        Section({
                title: "Styles",
                content: Code({
                        content: `@import "@${ORGANIZATION}/${pkgname}/${LIB}/${pkgname}.css"`
                })
        }) +
        Section({
                title: "Basic Usage",
                content: Code({
                        content:
                                '<div class="block-name">\n\tbasic usage\n</div>'
                })
        }) +
        Section({
                title: "Modificators",
                content: Table({
                        columns: [
                                { s: "name", ratio: 1 / 4 },
                                { s: "value", ratio: 1 / 4 },
                                { s: "description", ratio: 2 / 4 }
                        ]
                })
        }) +
        Section({
                title: "Variables",
                content: List({
                        items: [
                                { content: "\\<variable 1 name\\>" },
                                {
                                        content: "\\<variable 1 description\\>",
                                        indentation: "  ",
                                        symbol: "-"
                                },
                                { content: "..." },
                                {
                                        content: "...",
                                        indentation: "  ",
                                        symbol: "-"
                                },
                                { content: "\\<variable n name\\>" },
                                {
                                        content: "\\<variable n description\\>",
                                        indentation: "  ",
                                        symbol: "-"
                                }
                        ]
                })
        }) +
        Section({
                title: "Elements",
                content: List({
                        items: [
                                { content: "\\<element 1 name\\>" },
                                {
                                        content: "\\<element 1 description\\>",
                                        indentation: "  ",
                                        symbol: "-"
                                },
                                { content: "..." },
                                {
                                        content: "...",
                                        indentation: "  ",
                                        symbol: "-"
                                },
                                { content: "\\<element n name\\>" },
                                {
                                        content: "\\<element n description\\>",
                                        indentation: "  ",
                                        symbol: "-"
                                }
                        ]
                })
        }) +
        Section({
                title: "\\<element 1 name\\>",
                content: "\\<element 1 description\\>"
        }) +
        Section({
                title: "Modificators",
                content: Table({
                        columns: [
                                { s: "name", ratio: 1 / 4 },
                                { s: "value", ratio: 1 / 4 },
                                { s: "description", ratio: 2 / 4 }
                        ]
                })
        }) +
        Section({
                title: "...",
                content: "..."
        }) +
        Section({
                title: "\\<element n name\\>",
                content: "\\<element n description\\>"
        }) +
        Section({
                title: "Modificators",
                content: Table({
                        columns: [
                                { s: "name", ratio: 1 / 4 },
                                { s: "value", ratio: 1 / 4 },
                                { s: "description", ratio: 2 / 4 }
                        ]
                })
        }) +
        Section({
                title: "Javascript",
                content: ""
        });

module.exports = ReadmeTemplate;
