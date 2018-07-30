var path = require("path");
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
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
  }
};