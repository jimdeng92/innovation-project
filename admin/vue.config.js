module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'store': '@store'
      }
    }
  },
  devServer: {
    port: 8888,
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/wzry/back/' : '/',
  outputDir: __dirname + '/../server/admin'
}
