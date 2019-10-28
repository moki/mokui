module.exports = {
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint"],
        extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "prettier",
                "prettier/@typescript-eslint"
        ],
        parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname
        }
};
