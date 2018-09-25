let path = require("path");
module.exports = {
    baseUrl: '/',
    // 输出文件目录
    outputDir: 'dist',
    assetsDir:"static",
    lintOnSave: true,
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
        }
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    devServer: {
        open:true,
        host: '127.0.0.1',
        port: 8080,
        https: false,
        hotOnly: false,
        //proxy: 'http://localhost:8180' ,// 配置跨域处理,只有一个代理
       // proxy: {
       //      '/login': {
       //          target: 'http://localhost:8180',
       //          ws: true,
       //          changeOrigin: true
       //      },
       //      '/foo': {
       //          target: '<other_url>'
       //      }
       //  },  // 配置多个代理
        before: app => {
        }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}