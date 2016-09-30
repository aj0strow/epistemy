const webpack = require("webpack")
const path = require("path")
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  target: "web",
  devtool: "source-map",
  entry: {
    website: [
      "core-js/es5",
      "core-js/es6",
      "whatwg-fetch",
      "website/main",
    ]
  },
  output: {
    path: "dist",
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
    publicPath: "/",
  },
  resolve: {
    modulesDirectories: [
      "node_modules",
    ],
    root: [
      path.resolve(__dirname, "src"),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        loader: "babel-loader",
      }
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new CleanWebpackPlugin("dist"),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env["NODE_ENV"]),
      },
    }),
    new HtmlWebpackPlugin({
      title: "Epistemy - in pursuit of knowledge.",
      inject: "head",
    }),
  ],
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
}
