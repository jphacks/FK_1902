import React from "react";
import { View } from "react-native";
import Input from "app/src/components/lv1/Input";
import Icon from "app/src/components/lv1/Icon";

export default ({ iconName, iconSize, iconColor, ...props }) => {
  return (
    <View>
      <Icon name={iconName} size={iconSize} color={iconColor} />
      <Input {...props} />
    </View>
  );
};
