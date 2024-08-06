import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/dist", "**/.eslintrc.cjs", "**/vite.config.ts"],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:unicorn/recommended",
)), {
    plugins: {
        "react-refresh": reactRefresh,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },

            tsconfigRootDir: "/home/cdiesh/src/awesome-genome-visualization",
            project: "./tsconfig.app.json",
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "no-console": ["warn", {
            allow: ["error", "warn"],
        }],

        "@typescript-eslint/restrict-template-expressions": "off",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/no-null": "off",
        "unicorn/no-nested-ternary": "off",
        "unicorn/filename-case": "off",
        "react/react-in-jsx-scope": "off",

        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],
    },
}];