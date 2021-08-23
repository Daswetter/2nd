const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const pages = [];
fs
  .readdirSync(path.resolve(__dirname, 'src', 'pages'))
  .filter((file) => file.indexOf('base') !== 0)
  .forEach((file) => {
    pages.push(file.split('/', 2));
  });

const htmlPlugins = pages.map((fileName) => new HtmlWebpackPlugin({
  filename: `${fileName}.html`,
  template: `./src/pages/${fileName}/${fileName}.pug`,
  alwaysWriteToDisk: true,
  inject: 'body',
  hash: true,
}));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 1610,
    open: true,
    contentBase: 'dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackHarddiskPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/components/photo-slider/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
        {
          from: path.resolve(__dirname, './src/components/comment/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
        {
          from: path.resolve(__dirname, './src/components/socials/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
        {
          from: path.resolve(__dirname, './src/components/logo/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
        {
          from: path.resolve(__dirname, './src/components/toxin-logo/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
        {
          from: path.resolve(__dirname, './src/pages/room-details/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
      ],
    }),

  ].concat(htmlPlugins),

  module: {
    rules: [
      {
        test: /\.sass|scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            reloadAll: true,
          },
        },
        'css-loader',
        'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets',
          },
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
};
