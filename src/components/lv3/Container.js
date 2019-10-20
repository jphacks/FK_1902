import React from "react";
import { SafeAreaView, View, Dimensions, StyleSheet } from "react-native";

import COLOR from "app/src/config/color.json";

export default ({ children, bgColor }) => {
  const { width, height } = Dimensions.get("window");

  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: bgColor
    }
  });

  return <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>;
};
