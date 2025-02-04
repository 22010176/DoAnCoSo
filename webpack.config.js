const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  watch: true,
  watchOptions: {},
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"], },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'], },
    ]
  },
  devtool: 'inline-source-map',
  plugins: [],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  }
}