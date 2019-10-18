import React from "react";
import { TextInput } from "react-native";

export default ({
  placeholder,
  value,
  maxLength,
  keyboardType,
  onChangeText,
  ...props
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      {...props}
    />
  );
};
