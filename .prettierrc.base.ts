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
    "prettier-plugin-packagejson",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-organize-attributes",
    "prettier-plugin-jsdoc",
    "prettier-plugin-sql",
    "prettier-plugin-tailwindcss", // must be last
  ],
};

export default prettierConfig;
