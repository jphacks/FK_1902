import React from "react";

import constantsToPickerOptions from "app/src/utils/constantsToPickerOptions";
import USER from "app/src/config/user.json";
import COLOR from "app/src/config/color";

import { View, Text, Image } from "react-native";
import Input from "app/src/components/lv1/Input";
import Picker from "app/src/components/lv1/Picker";
import Button from "app/src/components/lv1/Button";

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
      <Text>ユーザーネーム</Text>
      <Input
        placeholder="ユーザーネームを入力してください"
        value={profile.name}
        onChangeText={text => this.onChangeProfileText("name", text)}
      />
      <Text>年齢</Text>
      <Picker
        value={profile.age}
        options={constantsToPickerOptions(USER.age)}
        onValueChange={value => onSelectPicker("age", value)}
      />
      <Text>性別</Text>
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

      <Button
        title="新しいプロフィール画像選択"
        onPress={selectAvatar}
        backgroundColor={COLOR.main}
      />
      <Button
        title="プロフィール画像更新"
        onPress={imageUpload}
        backgroundColor={COLOR.main}
      />
      <Button
        title="プロフィール更新"
        onPress={onUpdate}
        backgroundColor={COLOR.main}
      />
      <Button
        title="ログアウト"
        onPress={onSignOut}
        backgroundColor={COLOR.black}
      />
    </View>
  );
};
