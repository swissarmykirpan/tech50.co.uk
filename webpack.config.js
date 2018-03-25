const path = require("path");
module.exports = {
  entry: {
    app: path.join(__dirname, "./src/index.tsx"),
    vendors: ["react", "react-dom"]
  },
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "",
    chunkFilename: "[name].js"
  },
  devtool: "inline-source-map",
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      name: false,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          //priority: -20,
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts"]
  }
};
