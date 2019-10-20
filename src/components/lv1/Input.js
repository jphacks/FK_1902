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
      style={style}
    />
  );
};

const style = {
  width: "100%",
  paddingRight: "2%",
  paddingLeft: "2%",
  fontSize: 18,
  paddingTop: 5,
  paddingBottom: 5
};
