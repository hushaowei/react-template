import path from 'path'
export default {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  mode: 'development'
}