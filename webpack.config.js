const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) =>  {
  const isProduction = env.production;
 return{
  entry: './app/app.module.js', // Your main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/angularjs1-app')  // Make sure this matches your upload path
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to JS files
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',  // Your template file
      inject: 'body',
      scriptLoading: 'defer',
      minify: isProduction ? { collapseWhitespace: true } : false,  // Only minify in production
     // Pass custom variables to the template
     templateParameters: {
      angularScript: isProduction
        ? 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js'
        : 'node_modules/angular/angular.min.js',
      angularRouteScript: isProduction
        ? 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular-route.min.js'
        : 'node_modules/angular-route/angular-route.min.js',
    },
      base: '/angularjs1-app/' // This is where you set the base-href
    })
  ],
  devServer: {
    contentBase: './dist',
    port: 8080
  }
};
};