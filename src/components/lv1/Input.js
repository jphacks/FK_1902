import React from "react";

import { TextInput, StyleSheet } from "react-native";

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
      onChangeText={text => onChangeText(text)}
      autoCapitalize="none"
      {...props}
      style={style.input}
    />
  );
};

const style = StyleSheet.create({
  input: {
    width: "100%",
    paddingRight: "2%",
    paddingLeft: "2%",
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5
  }
});
