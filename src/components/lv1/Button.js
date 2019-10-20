import React from "react";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import { View, Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

import COLOR from "app/src/config/color";

export default ({
  title,
  onPress,
  backgroundColor,
  color = COLOR.white,
  disabled = false
}) => (
  <View style={styles.buttonWrapper}>
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
  </View>
);

const styles = StyleSheet.create({
  buttonWrapper: {
    marginBottom: height * 0.02,
    alignItems: "center"
  }
});
