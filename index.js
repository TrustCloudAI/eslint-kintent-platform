module.exports = {
  extends: [
    './kintent-rules'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  }
};
