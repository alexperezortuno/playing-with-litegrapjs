const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: 'src/assets/css/litegraph.css', to: 'css/litegraph.css'},
                {from: 'src/assets/css/litegraph-editor.css', to: 'css/litegraph-editor.css'},
                {from: 'src/assets/css/content.css', to: 'css/style.css'}
            ],
        }),
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    }
};

module.exports = config;