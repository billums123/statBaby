const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV, //development or production
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          //   MiniCssExtractPlugin.loader, //when using production config, use MiniCssExtractPlugin instead of style-loader
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  //   plugins: [new MiniCssExtractPlugin({filename: 'trine.css'}), new HtmlWebpackPlugin({
    plugins: [
      new HtmlWebpackPlugin({
        // hash: true,
        title: 'Development',
        template: "./index.html", //THIS IS IMPORTANT TO GET INDEX.HTML TO LOAD AFTER YOU ADD DEV SERVER!!!!!
      }),
    ],
    devServer: {
      static: {
        publicPath: '/build',
        directory: path.resolve(__dirname, "build"),
      },
      // port: 8080,
    },
  };
  