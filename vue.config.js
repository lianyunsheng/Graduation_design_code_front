const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_a',resolve('src/assets'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    open: true,//浏览器自动打开页面
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false, //热更新（webpack已实现了，这里false即可）
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
      '/api': {
          target: 'http://localhost:8090/api',//这里后台的地址模拟的;应该填写你们真实的后台接口
          ws: true,
          changOrigin: true,//允许跨域
          pathRewrite: {
              '^/api': '/'//请求的时候使用这个api就可以
          }
      }
      
  }

  }
}
