const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:
  process.env.NODE_ENV === "production" ? "" : "/",
  // devServer: { watchOptions: { poll: true } },
  lintOnSave: process.env.NODE_ENV !== 'test',
  transpileDependencies: true
})
