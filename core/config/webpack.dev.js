const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const port = 8081;
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    compress: true,
    hot: true,
    port: port,
    historyApiFallback: true,
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:8081/",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
});
