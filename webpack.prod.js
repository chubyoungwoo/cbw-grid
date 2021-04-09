const path = require('path');
// webpack-merge 플러그인 추가
//const merge = require('webpack-merge')
const { merge } = require('webpack-merge');
// webpack 공통 설정 추가 
const common = require('./webpack.common.js');
// clean-webpack-plugin 추가 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [
    merge(common, {
        entry: {
            'dopyo': path.resolve(__dirname, 'src/main.js'),
        },
        // 웹팩 빌드를 시작할 때 dist폴더를 비우도록 설정
        plugins: [
            new CleanWebpackPlugin(),
        ],
        optimization: {
            minimize: false
        }
    }),
    merge(common, {
        entry: {
            'dopyo.min': path.resolve(__dirname, 'src/main.js'),
        },
        optimization: {
            minimizer: [
                new TerserJSPlugin({}),
                new OptimizeCSSAssetsPlugin({}),
            ]
        },
    })
];