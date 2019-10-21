import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import COLOR from "app/src/config/color.json";

export default ({ size, style, source, onPress }) => {
  const styles = StyleSheet.create({
    image: {
      height: size,
      width: size,
      borderRadius: 100,
      backgroundColor: COLOR.gray
    }
  });

  return (
    <TouchableOpacity activeOpacity={1} style={style} onPress={onPress}>
      <Image style={styles.image} source={{ uri: source }} />
    </TouchableOpacity>
  );
};
