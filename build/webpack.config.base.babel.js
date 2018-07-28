export default {
  entry: './src/index.js',
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
  }
}