import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import COLOR from "app/src/config/color.json";

import Icon from "app/src/components/lv1/Icon";

const { width, height } = Dimensions.get("window");

export default () => {
  return (
    <View style={styles.navBar}>
      <View style={styles.avatarBg}>
        <Image style={styles.avatar} />
      </View>
      <View>
        <Icon />
        <Icon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: height * 0.13,
    backgroundColor: COLOR.main,
    justifyContent: "center",
    paddingTop: height * 0.03
  },
  avatarBg: {
    height: height * 0.06,
    width: height * 0.06,
    borderRadius: 100,
    backgroundColor: COLOR.white,
    marginLeft: width * 0.05,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    height: height * 0.05,
    width: height * 0.05,
    borderRadius: 100,
    backgroundColor: COLOR.gray
  },
  Icon: {}
});
