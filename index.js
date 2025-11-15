const tseslint = require("@typescript-eslint/eslint-plugin");
const tsparser = require("@typescript-eslint/parser");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const importPlugin = require("eslint-plugin-import");
const prettier = require("eslint-config-prettier");
const globals = require("globals");

module.exports = [
  // Ignore patterns
  {
    ignores: [
      "**/dist/**",
      "**/build/**",
      "**/node_modules/**",
      "**/*.config.js",
    ],
  },
  // TypeScript ESLint flat configs (these are arrays)
  ...tseslint.configs["flat/recommended-type-checked"],
  ...tseslint.configs["flat/stylistic-type-checked"],
  // React flat config (this is an object with configs, use recommended)
  react.configs.flat.recommended,
  // Base configuration with additional settings
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      import: importPlugin,
    },
    settings: {
      // 4. JSX Runtime rules (React 17+)
      react: {
        version: "detect",
      },
      // 5. Import resolver
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
    rules: {
      // 3. React Hooks recommended
      ...reactHooks.configs.recommended.rules,

      // 5. Import recommended
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,

      // 6. Prettier config (must be last to override formatting rules)
      ...prettier.rules,
    },
  },
];
