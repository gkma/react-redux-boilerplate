const PATH = require("path");

module.exports = {
  entry: PATH.join(__dirname, "../src/index.jsx"),
  output: {
    path: PATH.join(__dirname, "../dist"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
