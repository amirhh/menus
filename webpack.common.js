const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app : __dirname + '/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015', 'stage-3']
        }
      },
      {
        test: /\.scss$/,
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   'css-loader',
        //   'sass-loader'
        // ]
        // use: ExtractTextPlugin.extract({
        //   use: ['css-loader', 'sass-loader'],
        //   fallback: 'style-loader'
        // })
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // image loader different in dev & prod
      {
        test: /\.(mp4)$/,
        loader: 'file-loader',
        options: {
          name: 'videos/[hash].[ext]'
        }
      },
      {
        test: /\.(mp3)$/,
        loader: 'file-loader',
        options: {
          name: 'audios/[hash].[ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    // new ExtractTextPlugin('[name].css')
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // })
  ]
};
