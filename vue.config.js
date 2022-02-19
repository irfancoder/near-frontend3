/** @format */

const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')

module.exports = defineConfig({
    transpileDependencies: true,
    runtimeCompiler: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
                vue: 'vue/dist/vue.esm-bundler.js'
            },
            extensions: ['.js', '.vue', '.json']
        }
    }
})
