const path = require('path');
const pkg = require('./package.json');

module.exports = {
  entry: path.join(__dirname, pkg.main),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: { extensions: ['.js', '.jsx', './ts', '.tsx'] },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
};
