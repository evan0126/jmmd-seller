module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // 使用standard规范校验代码（严格模式）
    // '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 开发模式允许使用console
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 开发环境允许使用调试 (生产模式禁用)
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //关闭组件命名规则
    "vue/multi-word-component-names":"off",
  }
}
