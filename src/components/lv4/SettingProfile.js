import React from "react";

import constantsToPickerOptions from "app/src/utils/constantsToPickerOptions";
import USER from "app/src/config/user.json";
import COLOR from "app/src/config/color";

import { View, Dimensions, Image, StyleSheet } from "react-native";
import InputWithIcon from "app/src/components/lv2/InputWithIcon";
import LoadingOverlay from "app/src/components/lv2/LoadingOverlay";
import Picker from "app/src/components/lv1/Picker";
import Button from "app/src/components/lv1/Button";
import Avatar from "app/src/components/lv1/Avatar";

export default props => {
  const {
    profile,
    onChangeText,
    onSelectPicker,
    selectAvatar,
    onUpdate,
    onSignOut,
    loading
  } = props;

  return (
    <>
      <LoadingOverlay loading={loading} />
      <View>
        <View style={styles.avatarWrapper}>
          <Avatar
            size={height * 0.2}
            style={styles.avatar}
            source={profile.avatar}
          />
          <Button
            small
            title="プロフィール画像選択"
            style={styles.avatarSelect}
            onPress={selectAvatar}
          />
        </View>
        <View style={styles.inputs}>
          <InputWithIcon
            placeholder="ユーザーネームを入力してください"
            iconName="account"
            value={profile.name}
            onChangeText={text => onChangeText("name", text)}
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
        </View>
        <View style={styles.actions}>
          <Button
            title="設定して戻る"
            onPress={onUpdate}
            bgColor={COLOR.main}
            style={{ marginBottom: 24 }}
          />
          <Button
            title="ログアウト"
            onPress={onSignOut}
            bgColor={COLOR.black}
          />
        </View>
      </View>
    </>
  );
};

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  avatarWrapper: {
    alignItems: "center",
    height: height * 0.3,
    padding: 5
  },
  avatar: {
    marginBottom: height * 0.03
  },
  avatarSelect: {
    height: height * 1.97
  },
  inputs: {
    height: height * 0.4
  },
  actions: {
    height: height * 0.3
  }
});
