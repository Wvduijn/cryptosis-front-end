
module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        parser: "babel-eslint"
    },
    // https://github.com/prettier/eslint-config-prettier
    extends: ["prettier",  "prettier/standard", "plugin:vue/recommended"],
    // https://github.com/prettier/eslint-plugin-prettier
    plugins: ["vue", "prettier", "html"],
    rules: {
      "prettier/prettier": "error"
    }
  };