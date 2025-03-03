const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  entry: [
    './src/index.jsx',
    "webpack-hot-middleware/client?path=/__webpack_hmr&reload=true",
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/dist',
    hotUpdateChunkFilename: '.hot/hot-update.js',
    hotUpdateMainFilename: '.hot/hot-update.json',
  },
  watch: true,
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader', 'postcss-loader'], },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource', },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource', },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "dev",
      filename: "index.ejs",
      template: path.resolve(__dirname, 'public/template/index.ejs')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};