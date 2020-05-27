const debug = process.env.NODE_ENV !== 'production';
const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'src/assets'),
        compress: true,
        port: 9000,
        proxy: {
            '/api': {
                target: 'https://localhost:8080',
                changeOrigin: true,
                pathRewrite: {'^/api' : ''},
                secure: false
            }
        },
        historyApiFallback: true
    },
    devtool: 'source-map',
    watch: true,
    entry: [
        path.join(__dirname, './src/js/main.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['dist']}),
        new HtmlWebpackPlugin({
            title: 'Exemple PEW',
            favicon: "./src/assets/images/favicon.ico",
            template: path.join(__dirname, 'src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/mystyles.css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=images/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug'
                ]
            }
        ]
    }
};
