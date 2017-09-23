/* global __dirname, require, module*/

const webpack = require("webpack");
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require("path");
const env = require("yargs").argv.env; // use --env with webpack 2

let fileName = "align";

let libraryName = JSON.stringify(require("./package.json").name).replace(/\"/g, "");
let version = JSON.stringify(require("./package.json").version).replace(/\"/g, "");

let plugins = [], outputFile;

if (env === "build") {
  plugins.push(new UglifyJsPlugin({minimize: true}));
  outputFile = fileName + "-" + version + ".min.js";
} else {
  outputFile = fileName + "-" + version + ".js";
}

const config = {
  entry: {
    align: __dirname + "/src/Align.js"
  },
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".json", ".js"]
  },
  plugins: plugins
};

module.exports = config;
