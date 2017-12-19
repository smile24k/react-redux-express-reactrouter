var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
    entry: path.resolve(__dirname, './src/store.js'),
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['@babel/preset-env'],
                        // plugins: ['@babel/transform-runtime']
                    }
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('../css/[name].css')
    ]
};

module.exports = config;