const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  mode: 'development',
  // mode: 'production',
  devtool: 'source-map',

  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true,
  },

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'health',
          to: './'
        },
        {
          from: path.resolve(__dirname, './src/config.json'),
          to: './'
        },
        {
          from: path.resolve(__dirname, './src/lang.json'),
          to: './'
        },
        {
          from: 'package.json',
          to: './package.json',
          transform: function (content) {
            return transformPackageJson(content);
          }
        }
      ]
    }),
  ],

  devServer: {
    open: true,
    port: 8081,
  },
}

function transformPackageJson(content) {
  var buildPackageJson = {
    name: 'PAT-template',
    description: 'Npm package of PAT',
    main: 'index.js',
    scripts: {
      test: 'echo \"Error: no test specified\" && exit 1'
    },
    author: 'Kerem',
    license: 'ISC',
    dependencies: {}
  };
  var mainPackageJson = JSON.parse(content.toString());
  buildPackageJson.version = mainPackageJson.version;
  return JSON.stringify(buildPackageJson);
}