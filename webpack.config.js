const path = require('path');
// let webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        // enforce: "pre", // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-flow'],
            },
          },
        ],
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  mode: 'development',
};
