import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import COLOR from "app/src/config/color.json";

export default ({ size, style, source, onPress, bgColor }) => {
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: bgColor,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100
    },
    image: {
      height: size * 0.94,
      width: size * 0.94,
      borderRadius: 100,
      backgroundColor: COLOR.gray,
      margin: size * 0.03
    }
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={style}
      onPress={onPress}
      style={styles.wrapper}>
      <Image style={styles.image} source={{ uri: source }} />
    </TouchableOpacity>
  );
};
