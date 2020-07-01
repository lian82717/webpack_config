const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        page2: './src/js/page2.js',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['index'],
            filename: 'index.html',
            cache: false
        }),
        new HtmlWebpackPlugin({
            template: './src/page2.html',
            chunks: ['page2'],
            filename: 'page2.html',
            cache: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/favicon.ico',
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new CleanWebpackPlugin()
    ],
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                                ['@babel/preset-env',{
                                useBuiltIns: 'usage',
                                corejs: 3
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                        attributes: {
                            list: [
                                {
                                    tag: 'img',
                                    attribute: 'src',
                                    type: 'src'
                                }
                            ]
                        }
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|jpe?g|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                            name: '[name].[ext]',
                            publicPath: 'images/',
                            outputPath: 'images/'
                    }  
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}