import React from "react";
import View from "react-native";
import Logo from "app/src/components/lv1/Logo";
import AuthenticationForm from "app/src/components/lv3/AuthenticationForm";

export default props => {
  const { style, ...props } = props;
  return (
    <View style={style}>
      <Logo {...props} />
      <AuthenticationForm {...props} />
    </View>
  );
};
