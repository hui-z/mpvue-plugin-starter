const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MpvueExtraPlugin = require('webpack-mpvue-extra-plugin/plugin')
const config = require('../config')

const pluginRoot = path.resolve('src', 'plugin')
const pluginOutput = path.join(config.build.assetsRoot, 'plugin')

module.exports = {
  context: pluginRoot,
  entry: path.join(pluginRoot, 'plugin.json'),
  output: {
    path: pluginOutput,
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
    new CleanWebpackPlugin([pluginOutput]),
    new MpvueExtraPlugin()
  ]
}
