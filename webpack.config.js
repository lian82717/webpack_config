const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
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
        filename: 'bundle.js',
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
                        presets: ['@babel/preset-env']
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