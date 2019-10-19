import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import COLOR from "app/src/config/color.json";

import Icon from "app/src/components/lv1/Icon";

// TODO: user情報を受け取ってavatarとcurrency表示

export default () => {
  return (
    <View style={styles.navBar}>
      <View style={styles.avatarBg}>
        <Image style={styles.avatar} />
      </View>
      <View style={styles.propertiesWrapper}>
        <View style={styles.iconWrapper}>
          <Icon
            style={styles.icon}
            size={height * 0.04}
            name="account-card-details-outline"
            color={COLOR.white}
          />
          <Text style={{ color: COLOR.white, marginLeft: width * 0.01 }}>
            ×
          </Text>
          <Text style={styles.iconLabel}>5</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Icon
            style={styles.icon}
            size={height * 0.04}
            name="flower-tulip"
            color={COLOR.white}
          />
          <Text style={{ color: COLOR.white }}>×</Text>
          <Text style={styles.iconLabel}>1000</Text>
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  navBar: {
    height: height * 0.13,
    backgroundColor: COLOR.main,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: height * 0.05,
    paddingRight: width * 0.05,
    paddingLeft: width * 0.05
  },
  avatarBg: {
    height: height * 0.06,
    width: height * 0.06,
    borderRadius: 100,
    backgroundColor: COLOR.white,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    height: height * 0.05,
    width: height * 0.05,
    borderRadius: 100,
    backgroundColor: COLOR.gray
  },
  propertiesWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: width * 0.02
  },
  icon: {
    marginRight: width * 0.01
  },
  iconLabel: {
    color: COLOR.white,
    fontSize: height * 0.02,
    marginLeft: width * 0.01
  }
});
