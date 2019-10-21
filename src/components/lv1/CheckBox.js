import React from "react";
import { View, Image, StyleSheet } from "react-native";
import CheckBox from "react-native-check-box";

import COLOR from "app/src/config/color";

export default ({ onPress, isSelected, options, width, style }) => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      width: width,
      paddingRight: 10
    },
    checkBox: { flex: 1, padding: 10 },
    label: {
      color: COLOR.black,
      textAlign: "center"
    }
  });

  return (
    <View style={{ ...styles.wrapper, ...style }}>
      {options.map(option => (
        <CheckBox
          onClick={() => onPress(option.value)}
          style={styles.checkBox}
          isChecked={isSelected === option.value}
          leftText={option.label}
          leftTextStyle={styles.label}
          checkBoxColor={COLOR.main}
        />
      ))}
    </View>
  );
};
