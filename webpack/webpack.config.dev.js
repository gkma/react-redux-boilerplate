const PATH = require("path");
const HTMLWebpack = require("html-webpack-plugin");

const HTMLWebpackPlugin = new HTMLWebpack({
  template: PATH.join(__dirname, "../src/index.html"),
  filename: "index.html"
});

module.exports = {
  entry: PATH.join(__dirname, "../src/index.js"),
  output: {
    path: PATH.join(__dirname, "../dist"),
    filename: "bundle.js"
  },
  devServer: {
    // compress: true,
    contentBase: PATH.join(__dirname, "dist"),
    // historyApiFallback: true,
    hot: true,
    open: true,
    publicPath: "/"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [HTMLWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
