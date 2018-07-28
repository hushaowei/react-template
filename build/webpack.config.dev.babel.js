import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.config.base.babel'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default merge(baseConfig, {
  devtool: 'eval-source-map', // 开发模式 用于浏览器调试 *打包生产环境时必须关闭
  watch: true, //开启监听文件变化
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    port: 8090, // 打开端口号
    open: true, // 运行时打开
    compress: true, // 启用Gzip压缩
    inline: true, // 实时刷新
    hot: true, // 模块热更新，配置HotModuleReplacementPlugin
    contentBase: './' // 本地服务器所加载页面所在目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '这是一个标题',
      template: './public/index.html',
      inject: true // 将js文件放到body标签的结尾 true或者body
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development'
})
