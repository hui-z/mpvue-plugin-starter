const path = require('path')
const config = require('../config')
const MpvueExtraPlugin = require('webpack-mpvue-extra-plugin/miniprogram')
const glob = require('glob')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function getEntry (rootSrc, pattern) {
  var files = glob.sync(path.join(rootSrc, pattern))
  return files.reduce((res, file) => {
    var info = path.parse(file)
    var key = info.dir.slice(rootSrc.length + 1) + '/' + info.name
    res[key] = path.resolve(file)
    return res
  }, {})
}

const miniprogramRoot = path.resolve('src', 'miniprogram')

const appEntry = { app: path.join(miniprogramRoot, 'main.js') }
const pagesEntry = getEntry(miniprogramRoot, 'pages/**/main.js')
const entry = Object.assign({}, appEntry, pagesEntry)

module.exports = {
  context: miniprogramRoot,
  entry,
  output: {
    path: path.join(config.build.assetsRoot, 'miniprogram'),
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'mpvue',
      '@': miniprogramRoot
    },
    symlinks: false
  },
  plugins: [
    new MpvueExtraPlugin()
  ]
}
