module.exports = {
  root: true,
  env: {
    node: true
  },
  // recommended为eslint核心规则,最严格的
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  // extends: ['plugin:vue/essential', '@vue/standard'],
  // extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
