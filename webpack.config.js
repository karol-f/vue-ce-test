const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    babelPolyfill: "@babel/polyfill",
    components: "./src/components/index.js"
  },
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
