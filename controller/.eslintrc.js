module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
        allowImportExportEverywhere: true
    },
    parser: "vue-eslint-parser",

    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {
        "no-console": "off",
        semi: ["error", "always"],
        "quote-props": ["error", "always"]
    }
};