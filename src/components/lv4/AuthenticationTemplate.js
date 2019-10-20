import React from "react";
import { View } from "react-native";
import Logo from "app/src/components/lv1/Logo";
import AuthenticationForm from "app/src/components/lv3/form/AuthenticationForm";

export default props => {
  return (
    <View>
      <Logo />
      <AuthenticationForm {...props} />
    </View>
  );
};
