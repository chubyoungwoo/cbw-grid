const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
//const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        publicPath: '/dist/',
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.less$/, use: 'less-loader' },
            {
                test: /\.css$/,
                use: [
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // [sass-loader](/loaders/sass-loader)
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};