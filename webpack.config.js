const path = require('path');

module.exports = {
  entry: './app/app.module.js', // Your main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // Use preset-env for modern JS syntax
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 8080
  }
};
