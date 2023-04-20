module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    jest: true,
  },
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'max-len': [
      'error',
      { ignoreTemplateLiterals: true, ignoreStrings: true, code: 150 },
    ],
  },
};
