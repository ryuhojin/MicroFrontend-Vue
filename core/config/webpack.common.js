const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.vue$/, use: "vue-loader" },
    ],
  },
  target: ["web", "es5"],
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "Core",
      filename: "remoteEntry.js",
      remotes: {
        App: "App@http://localhost:8082/remoteEntry.js",
      },
      exposes: {},
      shared: {
        vue: {
          singleton: true,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
    extensions: [".js", ".vue", ".json", ".css"],
  },
};
