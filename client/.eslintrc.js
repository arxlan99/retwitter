module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 100,
        proseWrap: 'always',
        quoteProps: 'as-needed',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
        endOfLine: 'auto',
        bracketSameLine: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-nested-ternary': 'off',
  },
  ignorePatterns: ['.eslintrc.js', 'tailwind.config.js'],
};
