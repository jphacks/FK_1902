import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

import COLOR from "app/src/config/color.json";

import TAG from "app/src/config/tags.json";

export default ({ value, deleteTag, addTag, isModal }) => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      alignItems: "center",

      backgroundColor: COLOR.accent,
      marginRight: 3,
      marginBottom: 1,
      paddingRight: isModal ? width * 0.03 : width * 0.05,
      paddingLeft: width * 0.03,
      borderRadius: 50,
      height: height * 0.034
    },
    text: {
      color: COLOR.white,
      fontSize: 14
    },
    textDecoration: {
      color: COLOR.white,
      fontSize: 14,
      marginRight: 6
    }
  });

  return (
    <TouchableOpacity activeOpacity={1} onPress={addTag} style={styles.wrapper}>
      {!isModal && (
        <Text onPress={deleteTag} style={styles.textDecoration}>
          ×
        </Text>
      )}
      <Text style={styles.text}>{TAG[value]}</Text>
    </TouchableOpacity>
  );
};

const { width, height } = Dimensions.get("window");
