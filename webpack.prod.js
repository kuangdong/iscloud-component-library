/**
 * Created by dell on 2018/3/19.
 */
var path = require("path");
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    //entry:'./src/main.js',
    entry:'./src/lib/index.js',
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "iscloudUi.js",
        library:"IscloudUi",
        libraryTarget:"umd",
        umdNamedDefine:true
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
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: 'assets/[name].[hash].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[hash].[ext]',
                }
            },
        ]
    },
    resolve: {
        alias: { 'vue': 'vue/dist/vue.js', '@': path.resolve(__dirname, './src')},
        extensions: ['.js', '.vue', '.json']
    },
    plugins:[
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
        new CleanWebpackPlugin(['./dist/*.*']),
        new ExtractTextPlugin('index.css'),
        new UglifyJsPlugin()
    ]
}
