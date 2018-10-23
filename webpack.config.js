const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoPrefixer = require("autoprefixer");

const input = path.resolve(__dirname);
const output = path.resolve(__dirname, "dist");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            query: {
              cacheDirectory: true
            }
          }
        ]
      },
    ]
  },
  mode: "development",
  context: input,
  entry: "./a.js",
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].bundle.js",
    path: output
  },
  devtool: "source-map",
  resolve: {
    alias: {
      "@": input
    },
    extensions: [".js", ".jsx"],
    modules: ["node_modules"],
    mainFields: ["main", "module"]
  },
  plugins: [
    new CleanWebpackPlugin([output]),
    new HtmlWebpackPlugin({
      template: "./template.html"
    }),
  ]
};
