var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var cleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    // path是webpack打包后文件的储存路径 （必须是绝对路径）
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[id].[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js)/,
        exclude: /node_modules/, // 除了这个文件夹外
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(['dist/*'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      title: '这是一个标题',
      favicon:'public/favicon.ico',
      template: 'public/index.html', // 模板
      inject: true // 将js文件放到body标签的结尾 true或者body
    })
  ]
};