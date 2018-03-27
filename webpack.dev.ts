import { Configuration } from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";

const devConfig: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build"
  }
};

export default merge(common, devConfig);
