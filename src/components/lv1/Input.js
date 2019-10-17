import React from "react";
import { TextInput } from "react-native";

export default props => {
  const { placeholder, value, maxLength, keyboardType } = props;
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      keyboardType={keyboardType}
    />
  );
};
