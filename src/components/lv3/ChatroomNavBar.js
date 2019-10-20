import React from "react";
import { Actions } from "react-native-router-flux";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  Image
} from "react-native";
import COLOR from "app/src/config/color.json";

import Icon from "app/src/components/lv1/Icon";

export default props => {
  const { title, onPress } = props;

  return (
    <View style={styles.chatroomNavBar}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          style={styles.icon}
          size={height * 0.04}
          name="chevron-left"
          color={COLOR.white}
        />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  chatroomNavBar: {
    height: height * 0.13,
    backgroundColor: COLOR.main,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: height * 0.05,
    paddingRight: width * 0.05,
    paddingLeft: width * 0.05
  },
  title: {
    color: COLOR.white,
    fontSize: 20,
    marginLeft: width * 0.01,
    fontWeight: "bold"
  }
});
