const tseslint = require("typescript-eslint");
const rootConfig = require("../eslint.config.js");

module.exports = tseslint.config(
  ...rootConfig,
  {
    files: ["*.ts", "lib/**/*.ts"], // Include library files
    languageOptions: {
      parserOptions: {
        project: "./lib/tsconfig.lib.json",
        createDefaultProgram: true,
      },
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "markdown",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "markdown",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/no-output-native": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "comma-dangle": [
        "error",
        "always-multiline"
      ],
      "import/order": "error",
      "object-shorthand": "off"
    },
  },
  {
    files: ["*.spec.ts", "lib/**/*.spec.ts"], // Include spec files
    languageOptions: {
      parserOptions: {
        project: "./lib/tsconfig.spec.json",
        createDefaultProgram: true,
      },
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "markdown",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "markdown",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/no-output-native": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "args": "none"
        }
      ],
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/unbound-method": "off",
      "comma-dangle": [
        "error",
        "always-multiline"
      ],
      "import/order": "error",
      "object-shorthand": "off"
    },
  },
  {
    files: ["*.html"],
    rules: {},
  }
);
