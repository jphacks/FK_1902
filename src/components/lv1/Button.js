import React from "react";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

import COLOR from "app/src/config/color";

export default ({ title, onPress, color, backgroundColor, disabled }) => (
  <AwesomeButtonRick
    type="primary"
    textColor={color}
    backgroundColor={backgroundColor}
    backgroundDarker={COLOR.gray}
    textLineHeight={0}
    disabled={disabled}
    height={48}
    width={width * 0.8}
    onPress={onPress}>
    {title}
  </AwesomeButtonRick>
);
