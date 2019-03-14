
module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        parser: 'babel-eslint'
    },
    // https://github.com/prettier/eslint-config-prettier
    extends: [// https://github.com/vuejs/eslint-plugin-vue#bulb-rules
      'plugin:vue/recommended',
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard',
      // https://github.com/prettier/eslint-config-prettier
      'prettier',
      'prettier/standard',
      'prettier/vue',
    ],
    // https://github.com/prettier/eslint-plugin-prettier
    plugins: ['vue', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'vue/html-indent': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'linebreak-style': 'off',
      'vue/max-attributes-per-line': [2, {
        'singleline': 20,
        'multiline': {
           'max': 1,
           'allowFirstLine': false
         }
      }]
    }
  };