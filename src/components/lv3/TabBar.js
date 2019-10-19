import React, { useState } from "react";
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

export default () => {
  const [active, setActive] = useState("chatroomIndex");

  const chatroomIndexColor =
    active === "chatroomIndex" ? COLOR.main : COLOR.gray;
  const chatroomNewColor = active === "chatroomNew" ? COLOR.main : COLOR.gray;

  return (
    <View style={styles.tabBarBg}>
      <TouchableOpacity
        style={styles.tabWrapper}
        onPress={() => {
          setActive("chatroomIndex");
          Actions.chatroomIndex();
        }}>
        <Icon
          name="headphones"
          size={height * 0.05}
          color={chatroomIndexColor}
        />
        <Text style={{ color: chatroomIndexColor, ...styles.label }}>
          聞いてあげる
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabWrapper}
        onPress={() => {
          setActive("chatroomNew");
          Actions.chatroomNew();
        }}>
        <Icon
          name="heart-pulse"
          size={height * 0.05}
          color={chatroomNewColor}
        />
        <Text style={{ color: chatroomNewColor, ...styles.label }}>
          かまってもらう
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  tabBarBg: {
    height: height * 0.12,
    backgroundColor: COLOR.whiteMain,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLOR.gray
  },
  tabWrapper: {
    flex: 1,
    alignItems: "center"
  },
  label: {}
});
