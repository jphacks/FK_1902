import React from "react";
import { View } from "react-native";
import Input from "app/src/components/lv1/Input";
import IconFont from "app/src/components/lv1/Icon";

export default ({ iconName, iconSize, iconColor, ...props }) => {
  return (
    <View>
      <IconFont name={iconName} size={iconSize} color={iconColor} />
      <Input {...props} />
    </View>
  );
};
