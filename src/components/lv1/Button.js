import React from "react";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import { View, Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

import COLOR from "app/src/config/color";

export default ({
  title,
  onPress,
  bgColor,
  color = COLOR.white,
  disabled,
  small,
  style
}) => {
  const backgroundColor = disabled
    ? COLOR.gray
    : bgColor
    ? bgColor
    : COLOR.main;

  return (
    <View style={{ ...styles.buttonWrapper, ...style }}>
      <AwesomeButtonRick
        type="primary"
        textColor={color}
        textSize={small ? 10 : 14}
        backgroundColor={backgroundColor}
        backgroundDarker={COLOR.gray}
        disabled={disabled}
        height={small ? height * 0.04 : height * 0.06}
        width={small ? width * 0.5 : width * 0.8}
        onPress={onPress}>
        {title}
      </AwesomeButtonRick>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "center"
  }
});
