import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["React-gram/**/*.{js,jsx,ts,tsx}"],

    plugins: {
      js,
      react: pluginReact,
    },

    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended,
      ...tseslint.configs.recommended,
    ],

    languageOptions: {
      globals: globals.browser,
    },
  },
]);