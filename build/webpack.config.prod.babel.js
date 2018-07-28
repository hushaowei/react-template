import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import cleanWebpackPlugin from 'clean-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import baseConfig from './webpack.config.base.babel'

export default merge(baseConfig, {
  /**
   * -devtool
   * @source-map:original source
   */
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'), // path是webpack打包后文件的储存路径 （必须是绝对路径）
    /**
     * publicPath 不会对生成文件的路径造成影响
     * 主要是对页面里面引入的资源的路径做对应的补全
     * 常见的就是css文件里面引入的图片
     * 如: 原路径为 'image/save.png', 增加 publicPath: "/assets/" 后
     *     路径修正为'/assets/image/save.png'
     */
    publicPath: "./",
    filename: 'js/[id].[name].[chunkhash].js',
    chunkFilename: 'js/[id].[name].[chunkhash].js' //注意这里，用[name]可以自动生成路由名称对应的js文件
  },
  plugins: [
    new cleanWebpackPlugin(['dist/*'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      title: '这是一个标题',
      template: './public/index.html',
      inject: true // 将js文件放到body标签的结尾(true或者body)
    })
  ],
  /**
   * webpack 4 新增配置
   * 
   */
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      name: true,
      // cacheGroups: {
      //   index: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: 'index'
      //   }
      // }
    },
    /**
     * optimization.runtimeChunk
     * runtimeChunk:true 向仅包含运行时的每个入口点添加附加块
     * 通过提供字符串值可以使用插件的预设模式：
     *  -> single：为所有生成的块创建一个共享的运行时文件
     *  -> multiple：为常用块创建多个运行时文件
     */
    runtimeChunk: true,
    // 使用UglifyjsWebpackPlugin将包最小化
    minimize: true,
    // 通过提供不同的一个或多个定制的UglifyjsWebpackPlugin实例来覆盖默认的最小化器
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true, // 启用并行化,加快构建 true/number
        uglifyOptions: {
          output: {
            comments: false,
            beautify: false,
          },
          warnings: false,
          ie8: false,
          safari10: false
        }
      })
    ]
  },
  stats: 'minimal',
  mode: 'production'
})
