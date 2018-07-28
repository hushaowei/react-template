import path from 'path'
export default {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8090, // 端口
    open: true // 运行时打开
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
  mode: 'development'
}