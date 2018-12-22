const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          name: 'img/[name].[ext]',
          limit: 4096
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  },
  optimization: {
    minimize: false
  },
  mode: 'development',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false
    })
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify('development')
  //     }
  //   }),
  //   // new HardSourceWebpackPlugin()
  ]
});