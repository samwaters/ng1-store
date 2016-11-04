var failPlugin = require('webpack-fail-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  devtool: 'source-map',
  entry: {
    app: ['./app.ts'],
    vendor: ['angular', 'angular-ui-bootstrap']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'js')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
    failPlugin
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.sass']
  }
};
