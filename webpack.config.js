var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./app/client",

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join('public', 'js'),
    publicPath: '/js/'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader") },
      { test: /\.js$/, loader: 'jsx-loader' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  },

  plugins: [
    new ExtractTextPlugin("style.css", { allChunks: true })
  ]
};

