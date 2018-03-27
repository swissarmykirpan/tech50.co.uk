import CleanWebpackPlugin from "clean-webpack-plugin";
import { Configuration } from "webpack";
import path from "path";

const config: Configuration = {
  entry: {
    app: path.join(__dirname, "./src/index.tsx"),
    vendors: ["react", "react-dom"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "/",
    chunkFilename: "[name].js"
  },
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
          priority: -20,
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
  },
  plugins: [new CleanWebpackPlugin(["build"])]
};

export default config;
