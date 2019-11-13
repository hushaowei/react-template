const webpack = require('webpack')
const webpackConfig = require('../build/webpack.prod.config')

debugger

/**
 * Creates application bundles from the source files.
 */
function bundle() {
  return new Promise((resolve, reject) => {
    const config = [{ progress: true }, webpackConfig]
    webpack(config).run((err, stats) => {
      if (err) {
        return reject(err)
      }
      // console.info(stats.toString(webpackConfig[0].stats))
      if (stats.hasErrors()) {
        return reject(new Error('Webpack compilation errors'))
      }

      return resolve()
    })
  })
}

module.exports = bundle()
