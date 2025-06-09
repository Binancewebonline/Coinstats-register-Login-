const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. Entry Point: main JavaScript file of your project
  entry: './src/index.js',

  // 2. Output Configuration: bundled files output directory and name
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean /dist folder before each build to avoid stale files
  },

  // 3. Mode: development mode for easier debugging
  // Change to 'production' for optimized/minified bundles
  mode: 'development',

  // 4. Plugins: here using HtmlWebpackPlugin to generate index.html in /dist
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Your custom HTML template
      filename: 'index.html',
    }),
  ],

  // 5. Loaders: setup CSS handling so you can import CSS in JS
  module: {
    rules: [
      {
        test: /\.css$/i, // Matches all .css files
        use: ['style-loader', 'css-loader'], // Injects CSS into JS and bundles
      },
    ],
  },

  // 6. Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from /dist folder
    },
    compress: true,      // Enable gzip compression for faster loads
    port: 3000,          // Local server runs on http://localhost:3000
    open: true,          // Automatically open browser on start
    hot: true,           // Hot module replacement (updates in real time)
  },
};

/*
Repository details:
- GitHub username: Binancewebonline
- Repository name: coinstats-register-Login
- Contact email: coinstatssystem@outlook.com

CoinStats Account IDs and Redirection Links to be used in your app logic:

Account 01:
  USER ID = 6ZMCaw6MoUJe19M
  Link = https://coinstats.app/p/6ZMCaw6MoUJe19M

Account 02:
  USER ID = MnWIlxup31WTwie
  Link = https://coinstats.app/p/MnWIlxup31WTwie

Account 03:
  USER ID = AODn1d7anqTWlQG
  Link = https://coinstats.app/p/AODn1d7anqTWlQG

Account 04:
  USER ID = YlaLJkOhuai4nAx
  Link = https://coinstats.app/p/YlaLJkOhuai4nAx

Account 05:
  USER ID = UpnvcxwHNgeZRld
  Link = https://coinstats.app/p/UpnvcxwHNgeZRld
*/
