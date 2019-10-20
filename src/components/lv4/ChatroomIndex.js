import React from "react";

import { View, StyleSheet } from "react-native";
import TagSelectButton from "app/src/components/lv2/TagSelectButton";
import ChatroomList from "app/src/components/lv3/ChatroomList";

import COLOR from "app/src/config/color.json";

export default props => {
  return (
    <View>
      <View style={styles.filterBg}>
        <TagSelectButton {...props} />
      </View>
      <ChatroomList {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  filterBg: {
    height: "15%",
    backgroundColor: COLOR.whiteMain,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
