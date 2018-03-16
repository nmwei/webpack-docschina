/**
 * Created by nimengwei on 2018/3/13.
 */
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
      rules: [
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          }
      ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
   ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};