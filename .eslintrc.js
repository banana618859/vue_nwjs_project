/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-12-03 21:47:15
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2020-12-03 21:49:47
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
