module.exports = {
  extends: [
    '@npm-update-package/eslint-config-typescript',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}
