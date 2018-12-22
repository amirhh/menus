const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name].[ext]',
              limit: 4096
            }
          },
          'img-loader'
        ]
      }
    ]
  },
  optimization: {
    minimize: true
  },
  mode: 'production',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify('production')
  //     }
  //   }),
  //   // new webpack.optimize.UglifyJsPlugin()
  ]
});