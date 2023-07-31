/**
 * .eslintrc.js - eslint 配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.7.28
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false
    }
  },
  plugins: ['vue'],
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ],
  settings: {
    'import/resolver': {
      jest: {
        jestConfigFile: './jest.config.js'
      }
    }
  }
}
