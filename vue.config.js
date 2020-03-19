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
  }
}
