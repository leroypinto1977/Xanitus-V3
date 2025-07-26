import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable strict TypeScript rules for development
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",

      // Allow unescaped entities in JSX (common in content)
      "react/no-unescaped-entities": "off",

      // Allow img elements (we're using Sanity's optimized images)
      "@next/next/no-img-element": "warn",

      // Allow async client components (used for data fetching)
      "@next/next/no-async-client-component": "warn",
    },
  },
];

export default eslintConfig;
