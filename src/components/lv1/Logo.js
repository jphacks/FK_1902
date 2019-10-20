import React from "react";
import { View } from "react-native";
import { Image, StyleSheet } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("app/src/images/kamatte-logo-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: "80%",
    height: "50%",
    resizeMode: "contain"
  }
});
