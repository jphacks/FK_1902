import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import COLOR from "app/src/config/color.json";

import TAG from "app/src/config/tags.json";

export default ({ value, onPress }) => {
  return (
    <View style={styles.wrapper}>
      <Text onPress={onPress} style={styles.textDecoration}>
        ×
      </Text>
      <Text style={styles.text}>{TAG[value]}</Text>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: COLOR.accent,
    marginRight: 3,
    paddingRight: width * 0.05,
    paddingLeft: width * 0.03,
    borderRadius: 50,
    height: height * 0.034
  },
  text: {
    color: COLOR.white,
    fontSize: 14
  },
  textDecoration: {
    color: COLOR.white,
    fontSize: 14,
    marginRight: 6
  }
});
