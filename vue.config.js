const path = require('path');

module.exports = {
  devServer: {
    port: 32770,
  },
  publicPath: './',
  assetsDir: 'static',
  indexPath: './index.html',
  transpileDependencies: ['vant'],
  configureWebpack: {
    resolve: {
      alias: {
        assets: path.resolve(__dirname, './src/assets'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [],
  },
};
