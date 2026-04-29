import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "public/assets/plugins/**",
      "src/utils/scrollSmother.js",
      "src/utils/throwableAnimation.js",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
