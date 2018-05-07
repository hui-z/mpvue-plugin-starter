const path = require('path')
const config = require('../config')
const MpvueExtraPlugin = require('webpack-mpvue-extra-plugin/plugin')

const pluginRoot = path.resolve('src', 'plugin')
module.exports = {
  context: pluginRoot,
  entry: path.join(pluginRoot, 'plugin.json'),
  output: {
    path: path.join(config.build.assetsRoot, 'plugin'),
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'mpvue',
      '@': pluginRoot
    },
    symlinks: false
  },
  plugins: [
    new MpvueExtraPlugin()
  ]
}
