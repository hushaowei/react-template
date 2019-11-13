const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.config')

const data = {
  count: 10,
  name: 'hushaowei'
}

const copy = (data) => {
  return {...data}
}

const data1 = copy(data)

console.log(data1)


module.exports = {
  ...baseConfig,
  mode: 'development',
  devtool: 'eval-source-map', // 开发模式 用于浏览器调试 *打包生产环境时必须关闭
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8060,
    open: true, // 运行时打开
    inline: true, // 实时刷新
    hot: true, // 模块热更新，配置HotModuleReplacementPlugin
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
      ignored: /node_modules/
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '这是一个标题',
      favicon: 'public/favicon.ico',
      template: 'public/index.html',
      inject: true // 将js文件放到body标签的结尾 true或者body
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};