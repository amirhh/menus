const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

        use: [//option1
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]

        // use: ExtractTextPlugin.extract({//option2
        //   use: ['css-loader', 'sass-loader'],
        //   fallback: 'style-loader'
        // })
        
        // use: ['style-loader', 'css-loader', 'sass-loader'],//option3
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
    //either one of these plugins or none of them..
    // new ExtractTextPlugin('[name].css')
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
