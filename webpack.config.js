const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  entry: [
    './client/index.jsx',
    "webpack-hot-middleware/client?path=/__webpack_hmr&reload=true",
  ],
  output: {
    filename: '[name]-[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/dist',
    clean: true,
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
    new HtmlWebpackPlugin({ filename: "index.html", template: path.resolve(__dirname, 'public/template/index.html') }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, 'client/feature/AdminRoute'),
      path.resolve(__dirname, 'client'),
      'node_modules'
    ],
    alias: {
      '@': path.resolve('client'),
      '@admin': path.resolve('client/feature/AdminRoute'),
    },
    extensions: ['', '.js', '.jsx']
  }
};