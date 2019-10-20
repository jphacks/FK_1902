import React from "react";
import { View, StyleSheet } from "react-native";

import Input from "app/src/components/lv1/Input";
import Icon from "app/src/components/lv1/Icon";

import COLOR from "app/src/config/color.json";

export default ({ iconName, iconSize, iconColor, inputValue, ...props }) => {
  return (
    <View style={styles.wrapper}>
      {iconName && (
        <Icon
          name={iconName}
          size={20}
          color={COLOR.main}
          style={styles.icon}
        />
      )}
      <Input value={inputValue} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    width: "90%",
    marginRight: "auto",
    marginLeft: "auto",
    borderBottomWidth: 1,
    borderBottomColor: COLOR.main
  },
  icon: { marginRight: 8 }
});
