import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    singleQuote: true,
    semi: true,
  },
  lint: {
    plugins: ['typescript'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    overrides: [
      {
        files: ['apps/builder/**'],
        plugins: ['typescript', 'vue'],
      },
      {
        files: ['**/*.test.ts'],
        plugins: ['typescript', 'vitest'],
      },
    ],
  },
});
