var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/, // include .js files
      //enforce: "pre", // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }]
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};