const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const path = require('path')
const fs = require('fs')

const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0
process.env.VUE_APP_VERSION = version
process.env.VUE_APP_BUILD_DATE = Math.floor(Date.now() / 1000)

module.exports = {
  devServer: {
    host: '0.0.0.0',
    allowedHosts: ['192.168.1.105'],
    hot: true,
    disableHostCheck: true
  },
  pwa: {
    name: 'Smart Home by Tomáš Trejdl',
    themeColor: '#4299e1',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    manifestOptions: {
      short_name: 'Smart Home'
    }
  },
  configureWebpack: {
    plugins: [new FaviconsWebpackPlugin('./public/img/smarthome-logo.png')]
  }
}
