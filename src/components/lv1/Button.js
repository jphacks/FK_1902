import React from "react";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

import COLOR from "app/src/config/color";

export default ({ title, onPress, color, backgroundColor, disabled }) => (
  <AwesomeButtonRick
    type="primary"
    textColor={color}
    textSize={14}
    backgroundColor={disabled ? COLOR.gray : backgroundColor}
    backgroundDarker={COLOR.gray}
    disabled={disabled}
    height={height * 0.06}
    width={width * 0.8}
    onPress={onPress}>
    {title}
  </AwesomeButtonRick>
);
