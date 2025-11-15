module.exports = {
  extends: [
    // 1. ESLint core recommended rules
    "eslint:recommended",

    // 2. TypeScript ESLint rulesets (industry standard)
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",

    // 3. React rules (industry standard)
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",

    // 5. Import rules (industry standard)
    "plugin:import/recommended",
    "plugin:import/typescript",

    // 7. Airbnb preset (optional but popular)
    "airbnb",
    "airbnb/hooks",

    // 6. Prettier config (must be last to override formatting rules)
    "prettier",
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ["@typescript-eslint", "react", "react-hooks", "import"],

  settings: {
    // 4. JSX Runtime rules (React 17+)
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      node: true,
    },
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  rules: {
    // Additional custom rules can be added here
  },
};
