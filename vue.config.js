const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/account',
  devServer: {
    proxy: {
      '/api/user': {
        target: 'http://arch.homework',
        changeOrigin: true,
      },
    },
  },
})
