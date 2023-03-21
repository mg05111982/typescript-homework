const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  target: "node",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }
    ],
  },
};
