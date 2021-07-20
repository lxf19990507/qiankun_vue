/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-07-09 10:59:21
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2021-07-20 15:17:20
 */
const { name } = require('./package');
module.exports = {
  devServer: {
    port:9095,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};