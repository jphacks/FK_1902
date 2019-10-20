import React from "react";
import { Picker } from "react-native";

export default ({ value, options, onValueChange }) => {
  return (
    <Picker selectedValue={value} onValueChange={value => onValueChange(value)}>
      {options.map((option, index) => (
        <Picker.Item key={index} label={option.label} value={option.value} />
      ))}
    </Picker>
  );
};

// options
// [
//   {label: "", value: ""}
// ]
