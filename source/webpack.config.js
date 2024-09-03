const HtmlWebpackPlugin = require("html-webpack-plugin"),
      NunjucksWebpackPlugin = require("nunjucks-webpack-plugin"),
      BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
      ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin');
      glob = require('glob');

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
      },
      {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    url: false
                }
            },
            'postcss-loader',
            'sass-loader'
        ]
      },
      {
          test: /\.(png|jpg|gif)$/i,
          use: [
              {
                  loader: 'url-loader',
                  options: {
                      limit: 8192
                  }
              }
          ]
      }
    ]
  },
  plugins: [
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: "./templates/index.html",
          to: "./index.html"
        }
      ]
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    }),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 8080,
        server: { baseDir: ['dist'] }
    }),
    new ExtraWatchWebpackPlugin({
        dirs: './templates'
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: "./src/img", to: "./img" },
        ],
        options: {
            concurrency: 100,
        },
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: "./src/pdf", to: "./pdf" },
        ],
        options: {
            concurrency: 100,
        },
    })
  ]
}