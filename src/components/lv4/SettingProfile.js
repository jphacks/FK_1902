import React from "react";

import constantsToPickerOptions from "app/src/utils/constantsToPickerOptions";
import USER from "app/src/config/user.json";

import { View, Text, Button, Image } from "react-native";
import Input from "app/src/components/lv1/Input";
import Picker from "app/src/components/lv1/Picker";

export default props => {
  const {
    profile,
    onChangeProfileText,
    onSelectPicker,
    selectAvatar,
    imageUpload,
    onUpdate,
    onSignOut
  } = props;

  return (
    <View>
      <Input
        value={profile.name}
        onChangeText={text => this.onChangeProfileText("name", text)}
      />
      <Picker
        value={profile.age}
        options={constantsToPickerOptions(USER.age)}
        onValueChange={value => onSelectPicker("age", value)}
      />
      <Picker
        value={profile.gender}
        options={constantsToPickerOptions(USER.gender)}
        onValueChange={value => onSelectPicker("gender", value)}
      />
      <Text>現在のプロフィール写真</Text>
      <Image
        source={{ uri: profile.avatar }}
        style={{ height: 100, minWidth: 100 }}
      />
      <Button title="新しいプロフィール画像選択" onPress={selectAvatar} />
      <Button title="プロフィール画像更新" onPress={imageUpload} />
      <Button title="プロフィール更新" onPress={onUpdate} />
      <Button title="ログアウト" onPress={onSignOut} />
    </View>
  );
};
