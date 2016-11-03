var failPlugin = require('webpack-fail-plugin');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  devtool: 'source-map',
  entry: {
    app: './app.ts',
    vendor: ['angular', 'angular-ui-bootstrap']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  output: {
    filename: 'app.bundle.js',
    path: __dirname + '/js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
    failPlugin
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  }
};
