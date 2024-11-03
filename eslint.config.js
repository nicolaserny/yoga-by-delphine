import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import a11yLint from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

const ERROR = "error";
const WARN = "warn";

export default tseslint.config(
  {
    ignores: [
      "**/.cache/**",
      "**/node_modules/**",
      "**/build/**",
      "**/public/build/**",
      "**/server-build/**",
      "**/dist/**",
      "**/coverage/**",
      "**/.netlify/**",
      "**/app/generated/**",
    ],
  },
  {
    plugins: {
      import: (await import("eslint-plugin-import-x")).default,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unexpected-multiline": ERROR,
      "no-warning-comments": [
        ERROR,
        { terms: ["FIXME"], location: "anywhere" },
      ],
      "import/no-duplicates": [WARN, { "prefer-inline": true }],
      "import/order": [
        WARN,
        {
          alphabetize: { order: "asc", caseInsensitive: true },
          pathGroups: [{ pattern: "#*/**", group: "internal" }],
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.tsx", "**/*.jsx"],
    plugins: {
      react: (await import("eslint-plugin-react")).default,
    },
    languageOptions: {
      parser: (await import("typescript-eslint")).parser,
      parserOptions: {
        jsx: true,
      },
    },
    rules: {
      "react/jsx-key": WARN,
    },
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "jsx-a11y": a11yLint,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...a11yLint.configs.recommended.rules,
      "jsx-a11y/alt-text": "off", // it's not smart enough...
    },
  },
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...prettier.rules,
      "prettier/prettier": "error",
    },
  },
);
