import React from "react";
import { View, Picker, StyleSheet } from "react-native";

export default ({ value, options, onValueChange }) => {
  return (
    <View style={styles.wrapper}>
      <Picker
        selectedValue={value}
        mode="dropdown"
        onValueChange={value => onValueChange(value)}>
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "90%",
    height: "30%"
  }
});

// options
// [
//   {label: "", value: ""}
// ]
