import React from "react";
import View from "react-native";
import Input from "app/src/components/lv1/Input";
import Icon from "app/src/components/lv1/Icon";

export default props => {
  return (
    <View>
      <Icon {...props} />
      <Input {...props} />
    </View>
  );
};
