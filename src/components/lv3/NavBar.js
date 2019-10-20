import React from "react";
import { Actions } from "react-native-router-flux";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions
} from "react-native";
import COLOR from "app/src/config/color.json";

import Icon from "app/src/components/lv1/Icon";
import Avatar from "app/src/components/lv1/Avatar";

export default props => {
  const { user } = props;

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.avatarBg}
        onPress={() => Actions.settingProfile()}>
        <Avatar size={height * 0.05} source={user.avatar} />
      </TouchableOpacity>
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
          <Text style={styles.iconLabel}>{user.silver}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Icon
            style={styles.icon}
            size={height * 0.04}
            name="flower-tulip"
            color={COLOR.white}
          />
          <Text style={{ color: COLOR.white }}>×</Text>
          <Text style={styles.iconLabel}>{user.gold}</Text>
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
    marginLeft: width * 0.01,
    fontWeight: "bold"
  }
});
