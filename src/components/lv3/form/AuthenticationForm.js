import React from "react";
import { View } from "react-native";
import Button from "app/src/components/lv1/Button";
import InputWithIcon from "app/src/components/lv2/InputWithIcon";

export default props => {
  return (
    <View>
      <InputWithIcon
        placeholder="電話番号を入力"
        keyboardType="number-pad"
        maxLength={20}
        iconName="phone"
        iconSize={20}
        iconColor="#000"
        {...props}
      />
      <Button title="認証コードを送信" color="#000" {...props} />
    </View>
  );
};
