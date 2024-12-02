const tseslint = require("typescript-eslint");
const rootConfig = require("../eslint.config.js");

module.exports = tseslint.config(
  ...rootConfig,
  {
    files: ["*.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.app.json",
        createDefaultProgram: true,
      },
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/no-output-native": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-var-requires": "off",
      "comma-dangle": [
        "error",
        "always-multiline"
      ],
      "import/order": "error",
      "object-shorthand": "off"
    },
  },
  {
    files: ["**/*.html"],
    rules: {},
  }
);
