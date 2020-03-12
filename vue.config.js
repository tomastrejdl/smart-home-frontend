module.exports = {
  devServer: {
    host: '0.0.0.0',
    allowedHosts: ['192.168.1.105'],
    hot: true,
    disableHostCheck: true
  },
  pwa: {
    name: 'Smart Home',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white'
  }
}
