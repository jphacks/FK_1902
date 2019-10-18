import React from "react";
import View from "react-native";
import Button from "app/src/components/lv1/Button";
import InputWithIcon from "app/src/components/lv2/InputWithIcon";

export default props => {
  const { style, ...props } = props;
  return (
    <View style={style}>
      <InputWithIcon {...props} />
      <Button {...props} />
    </View>
  );
};
