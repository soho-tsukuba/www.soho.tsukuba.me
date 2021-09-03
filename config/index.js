const path = require('path')

module.exports = {
    pages: {
        'index': {
            entry: './src/main.js',
            template: 'public/index.html',
            title: 'マイクラ雙峰祭プロジェクト2021',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    css: {
        sourceMap: false
    },
    build: {
        index: path.resolve(__dirname, '../docs/index.html'),
        assetsRoot: path.resolve(__dirname, '../docs'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './'
    }
}