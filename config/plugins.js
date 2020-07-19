const { plugins } = require('./webpack.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePlugins = [
  new HtmlWebpackPlugin({
    template: 'public/index.html',
  }),
];

module.exports = basePlugins;
