const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. Entry Point
  entry: './src/index.js',

  // 2. Output Configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans /dist folder before each build
  },

  // 3. Development Mode
  mode: 'development', // Change to "production" for optimized builds

  // 4. Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Uses this HTML as a base
      filename: 'index.html',
    }),
  ],

  // 5. Loaders for CSS
  module: {
    rules: [
      {
        test: /\.css$/i, // Process .css files
        use: ['style-loader', 'css-loader'], // Injects CSS into JS
      },
    ],
  },

  // 6. Dev Server Config
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve from /dist
    },
    compress: true,
    port: 3000, // Runs at localhost:3000
    open: true, // Auto-opens browser on run
    hot: true,  // Enables hot module replacement
  },
};
