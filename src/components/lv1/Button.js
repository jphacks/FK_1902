import React from "react";
import { Button } from "react-native";

export default props => {
  const { title, onPress, color, disabled } = props;
  return (
    <Button title={title} onPress={onPress} color={color} disabled={disabled} />
  );
};
