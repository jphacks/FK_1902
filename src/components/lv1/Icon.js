import React from "react";
import { Icon } from "react-native-vecotor-icons/AntDesign";

export default props => {
  const { color, size, name } = props;
  return <Icon name={name} size={size} color={color} />;
};
