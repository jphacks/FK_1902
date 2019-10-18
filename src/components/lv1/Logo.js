import React from "react";
import { Image } from "react-native";

export default props => {
  const { style, source } = props;
  return <Image style={style} source={source} />;
};
