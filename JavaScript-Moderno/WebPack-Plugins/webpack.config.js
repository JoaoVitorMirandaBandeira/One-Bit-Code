const MiniCssExtractPlugins = require('mini-css-extract-plugin')

module.exports = {
    entry:{
        index: './src/index.js',
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugins.loader, 'css-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugins()
    ]
}