const tailwindAtRules = [
  'apply',
  'config',
  'custom-variant',
  'layer',
  'plugin',
  'reference',
  'responsive',
  'screen',
  'source',
  'tailwind',
  'theme',
  'utility',
  'variant',
  'variants',
];

export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss'],
  ignoreFiles: [
    '**/node_modules/**',
    '**/dist/**',
    '**/dist-*/*',
    '**/coverage/**',
    '**/.vite/**',
    '**/.turbo/**',
    '**/.output/**',
  ],
  overrides: [
    {
      files: ['**/*.sass'],
      customSyntax: 'postcss-sass',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: tailwindAtRules,
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: tailwindAtRules,
      },
    ],
    'selector-class-pattern': null,
  },
};
