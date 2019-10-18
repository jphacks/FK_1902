import React from "react";
import View from "react-native";
import Input from "app/src/components/lv1/Input";
import Icon from "app/src/components/lv1/Icon";

export default props => {
  const { style, ...props } = props;
  return (
    <View style={style}>
      <Icon {...props} />
      <Input {...props} />
    </View>
  );
};
