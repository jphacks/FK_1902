import React from "react";
import { ScrollView } from "react-native";

import COLOR from "app/src/config/color.json";

export default ({ child, ...props }) => {
  return <ScrollView style={{ style }}>{child}</ScrollView>;
};

const style = {
  backgroundColor: COLOR.whiteMain
};
