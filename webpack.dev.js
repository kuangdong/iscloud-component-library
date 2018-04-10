var path = require("path");
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry:'./src/main.js',
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js",
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        host: 'localhost',
        contentBase: './dist',
        historyApiFallback: true,
        /*hot: true,
        inline: true*/
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
        ]
    },
    resolve: {
        alias: { 'vue': 'vue/dist/vue.js', '@': path.resolve(__dirname, './src')},
        extensions: ['.js', '.vue', '.json']
    },
    plugins:[
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css'),
        new htmlWebpackPlugin({template: 'src/index.html'}),
    ]
}
