import React from "react";
import { Icon } from "react-native-vecotor-icons/AntDesign";

export default ({ color, size, name }) => {
  return <Icon name={name} size={size} color={color} />;
};
