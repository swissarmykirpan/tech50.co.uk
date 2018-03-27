import { Configuration } from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";

const prodConfig: Configuration = {
  mode: "production"
};

export default merge(common, prodConfig);
