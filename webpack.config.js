const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        main: './src/main.js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.runtime.esm.js'
        }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename:'bundle.js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/assets/index.html')
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        // https: true,
        open: true,
        port: 8000,
        disableHostCheck: true,
        hot: true,
        // proxy: {}
    }
}