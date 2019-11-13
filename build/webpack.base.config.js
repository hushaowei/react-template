module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)/,
        exclude: /node_modules/,// 除了这个文件夹外
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}