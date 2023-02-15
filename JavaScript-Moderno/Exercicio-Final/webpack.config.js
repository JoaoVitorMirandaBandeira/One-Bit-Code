const path = require('path')
const MiniCssExtractPlugins = require('mini-css-extract-plugin')
module.exports = {
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist')
        },
        port: 8000
    },
    entry:{
        index: './src/index.js',
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: [ MiniCssExtractPlugins.loader, 'css-loader']
        },{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    output: {
        filename: '[name].min.js'
    },
    plugins: [
        new MiniCssExtractPlugins()
    ]
}