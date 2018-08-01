var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map', // 开发模式 用于浏览器调试 *打包生产环境时必须关闭
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8888,
    open: true, // 运行时打开
    inline: true, // 实时刷新
    hot: true, // 模块热更新，配置HotModuleReplacementPlugin
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
      ignored: /node_modules/
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)/,
        exclude: /node_modules/,// 除了这个文件夹外
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '这是一个标题',
      favicon:'public/favicon.ico',
      template: 'public/index.html',
      inject: true // 将js文件放到body标签的结尾 true或者body
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};