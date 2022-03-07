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
  entry: path.resolve(__dirname, "../src/index.js"),
  target: ["web", "es5"],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      filename: "index.html",
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
          eager: true,
        },
        vueRouter: {
          singleton: true,
          eager: true,
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
