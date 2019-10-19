import React from "react";
import { Image, StyleSheet } from "react-native";

export default () => {
  return (
    <Image
      // style={styles.logo}
      source={require("app/src/images/kamatte-logo.png")}
    />
  );
};

// const styles = StyleSheet.create({
//   logo: {
//     width: 0.8
//   }
// });
