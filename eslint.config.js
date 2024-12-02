const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const importPlugin = require("eslint-plugin-import");

module.exports = tseslint.config(
  {
    files: ["*.ts", "lib/**/*.ts", "lib/**/*.spec.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...tseslint.configs.recommendedTypeChecked,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        "node": {
          "extensions": [
            ".js",
            ".jsx",
            ".ts",
            ".tsx"
          ]
        },
        "typescript": {}
      }
    },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
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
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "comma-dangle": [
        "error",
        "always-multiline"
      ],
      "comma-spacing": [
        "error",
        {
          "before": false,
          "after": true
        }
      ],
      "import/order": [
        "error",
        {
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          },
          "newlines-between": "never",
          "pathGroups": [
            {
              "pattern": "@*/**",
              "group": "parent"
            },
            {
              "pattern": "ngx-codemirror",
              "group": "external"
            }
          ]
        }
      ],
      "import/no-duplicates": "error",
      "object-curly-spacing": [
        "error",
        "always"
      ],
      "object-shorthand": "off",
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ],
      "semi-spacing": "error",
      "sort-imports": [
        "error",
        {
          "ignoreCase": true,
          "ignoreDeclarationSort": true
        }
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
