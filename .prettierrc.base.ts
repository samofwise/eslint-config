import type { Config } from "prettier";

const prettierConfig: Config = {
  // Basic formatting
  semi: true,
  trailingComma: "es5",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,

  // Industry standard settings
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: false,
  quoteProps: "as-needed",

  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-packagejson",
    "prettier-plugin-organize-attributes",
    "prettier-plugin-jsdoc",
    "prettier-plugin-sql",
  ],
};

export default prettierConfig;
