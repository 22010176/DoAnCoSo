const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "production",
  entry: ['./src/index.jsx',],
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    clean: true,
  },
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
  ],
  resolve: { extensions: ['', '.js', '.jsx'], }
}