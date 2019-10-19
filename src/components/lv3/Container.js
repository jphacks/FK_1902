import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
  StyleSheet
} from "react-native";

import COLOR from "app/src/config/color.json";

export default ({ children, bgColor }) => {
  const { width, height } = Dimensions.get("window");

  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: bgColor
    },
    scrollView: {
      backgroundColor: bgColor,
      paddingTop: height * 0.05,
      paddingBottom: height * 0.05,
      paddingRight: width * 0.04,
      paddingLeft: width * 0.04
    }
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>{children}</ScrollView>
    </SafeAreaView>
  );
};
