const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        // 共享全局变量
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.baidu.com',
        changeOrigin: true // 把请求头中的 host 配置为 target
      }
    }
  }
})
