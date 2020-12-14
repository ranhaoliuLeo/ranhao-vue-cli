const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename:'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './assets/index.html')
        })
    ],
    devServer: {
        // https: true,
        open: true,
        host: '0,0,0,0',
        port: 8000,
        dis
    }
}