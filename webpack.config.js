var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname+'/client', "src"),
    entry: "./js/client.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'/*,
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }*/
            },
            {
                test: /\.css$/,
                loaders: ['style-loader','css-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname+'/client'),
        filename: "./src/client.min.js",
        publicPath:'/'
    }
};