# @samhenrytech/eslint-config

Industry-standard ESLint configuration with TypeScript, React, and Prettier support.

## Features

This configuration includes:

✅ **ESLint Core** - `eslint:recommended` for JavaScript best practices  
✅ **TypeScript ESLint** - Official TypeScript ruleset with type-aware linting  
✅ **React Rules** - `eslint-plugin-react` and `eslint-plugin-react-hooks`  
✅ **JSX Runtime** - React 17+ support with automatic version detection  
✅ **Import Rules** - `eslint-plugin-import` for import correctness & style  
✅ **Prettier Integration** - `eslint-config-prettier` to disable conflicting formatting rules  
✅ **Prettier Config** - Base Prettier configuration with industry-standard plugins

## Installation

```bash
npm i -D @samhenrytech/eslint-config
```

## Usage

### ESLint Configuration

ESLint 9 uses the new flat config format. Create an `eslint.config.js` (or `eslint.config.mjs`) file in your project root:

```javascript
import { eslintConfig } from "@samhenrytech/eslint-config";

export default eslintConfig;
```

You can also extend the config with your own rules:

```javascript
import { eslintConfig } from "@samhenrytech/eslint-config";

export default [
  ...eslintConfig,
  {
    rules: {
      // Your custom rules here
    },
  },
];
```

## Requirements

- ESLint >= 9.0.0
- TypeScript >= 4.0.0

## What's Included

### 1. ESLint Core

- `eslint:recommended` - Industry standard JavaScript linting

### 2. TypeScript ESLint

- `plugin:@typescript-eslint/recommended` - TypeScript best practices
- `plugin:@typescript-eslint/recommended-type-checked` - Type-aware linting
- `plugin:@typescript-eslint/stylistic-type-checked` - Stylistic rules with type checking

### 3. React Rules

- `plugin:react/recommended` - React best practices
- `plugin:react-hooks/recommended` - React Hooks linting

### 4. JSX Runtime

- Automatic React version detection (React 17+)

### 5. Import Rules

- `plugin:import/recommended` - Import/export validation
- `plugin:import/typescript` - TypeScript import support

### 6. Prettier Integration

- `prettier` - Disables ESLint formatting rules (use Prettier for formatting)

## TypeScript Configuration

This config uses type-aware linting, which requires a `tsconfig.json` file in your project. You can extend the base TypeScript config included in this package:

```json
{
  "extends": "@samhenrytech/eslint-config/tsconfig.base.json",
  "compilerOptions": {
    // Your project-specific options
  }, 
  "include": ["src/**/*"]
}
```

Or create your own `tsconfig.json` with the necessary settings for type-aware linting.

## Prettier Configuration

This package includes a base Prettier configuration with industry-standard plugins. You can use it in your project:

### Import in `.prettierrc.ts`

Create a `.prettierrc.ts` file in your project root using ES modules:

```typescript
import { prettierConfig } from "@samhenrytech/eslint-config";

export default {
  ...prettierConfig,
  // Your project-specific overrides
};
```

**Note:** All Prettier plugins are included as dependencies in this package, so you don't need to install them separately in your project.

## License

MIT
