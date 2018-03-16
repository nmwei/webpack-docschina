/**
 * Created by nimengwei on 2018/3/16.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
    contentBase: './dist'
   }
});