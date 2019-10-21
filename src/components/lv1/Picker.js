import React from "react";
import { View, Picker, StyleSheet } from "react-native";

import COLOR from "app/src/config/color";

export default ({ value, options, onValueChange, height, width }) => {
  const styles = StyleSheet.create({
    wrapper: {
      marginRight: "auto",
      marginLeft: "auto",
      width: width || "100%"
    },
    picker: {
      color: COLOR.black,
      fontSize: 14,
      height: height || 100
    }
  });

  return (
    <View style={styles.wrapper}>
      <Picker
        selectedValue={value}
        itemStyle={styles.picker}
        onValueChange={value => onValueChange(value)}>
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

// options
// [
//   {label: "", value: ""}
// ]
