import React from "react";
import { TextInput } from "react-native";

const Input = props => {
  const { placeholder, value } = props;
  return <TextInput placeholder={placeholder} value={value} />;
};

export default Input;
