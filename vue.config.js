const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    baseUrl: '/',
    // 打包项目输出目录
    outputDir: "dist",
    // 静态资源存放目录
    assetsDir: "static",
    lintOnSave: true,
    // devServer Options don't belong into `configureWebpack`
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
    },
};