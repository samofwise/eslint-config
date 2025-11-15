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
⭐ **Airbnb Preset** - Popular code style opinions for React/JS

## Installation

```bash
npm install --save-dev @samhenrytech/eslint-config
```

Or with yarn:

```bash
yarn add -D @samhenrytech/eslint-config
```

## Usage

In your `.eslintrc.js` or `.eslintrc.json`:

```json
{
  "extends": ["@samhenrytech/eslint-config"]
}
```

Or in your `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["@samhenrytech/eslint-config"]
  }
}
```

## Requirements

- ESLint >= 8.0.0
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

### 7. Airbnb Preset

- `airbnb` - Popular React/JS code style
- `airbnb/hooks` - React Hooks style guide

## TypeScript Configuration

This config uses type-aware linting, which requires a `tsconfig.json` file in your project. Make sure your `tsconfig.json` includes the files you want to lint:

```json
{
  "compilerOptions": {
    // your options
  },
  "include": ["src/**/*"]
}
```

## License

MIT
