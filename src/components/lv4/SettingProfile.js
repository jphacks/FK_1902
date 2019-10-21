import React from "react";

import constantsToPickerOptions from "app/src/utils/constantsToPickerOptions";
import USER from "app/src/config/user.json";
import COLOR from "app/src/config/color";

import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import CheckBox from "app/src/components/lv1/CheckBox";
import InputWithIcon from "app/src/components/lv2/InputWithIcon";
import LoadingOverlay from "app/src/components/lv2/LoadingOverlay";
import Picker from "app/src/components/lv1/Picker";
import Button from "app/src/components/lv1/Button";
import Avatar from "app/src/components/lv1/Avatar";

export default props => {
  const {
    profile,
    onChange,
    selectAvatar,
    avatarSource,
    onUpdate,
    onSignOut,
    onDeleteAccount,
    loading,
    isUserCreate,
    errorMessage
  } = props;

  return (
    <>
      <LoadingOverlay loading={loading} />
      <View>
        <View style={styles.avatarWrapper}>
          <Avatar
            size={height * 0.2}
            style={styles.avatar}
            source={avatarSource || profile.avatar}
            bgColor={COLOR.white}
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
            placeholder="表示名"
            iconName="account"
            value={profile.name}
            onChangeText={text => onChange("name")(text)}
          />
          <CheckBox
            onPress={onChange("gender")}
            options={constantsToPickerOptions(USER.gender)}
            isSelected={profile.gender}
            width={width * 0.7}
            style={{
              marginRight: "auto",
              marginLeft: "auto"
            }}
          />
          <Picker
            value={profile.age}
            options={constantsToPickerOptions(USER.age)}
            onValueChange={value => onChange("age")(value)}
            width="60%"
            height={height * 0.1}
          />
        </View>
        <View style={styles.errorMessageWrapper}>
          {Object.values(errorMessage).map(message => (
            <Text style={styles.errorMessage}>{message}</Text>
          ))}
        </View>
        <View style={styles.actions}>
          <Button
            title={isUserCreate ? "kamatteをはじめる" : "戻る"}
            onPress={onUpdate}
            bgColor={COLOR.main}
          />
          {!isUserCreate && (
            <>
              <Button
                title="ログアウト"
                onPress={onSignOut}
                bgColor={COLOR.black}
              />
              <Button
                title="アカウント削除"
                onPress={onDeleteAccount}
                bgColor={COLOR.black}
              />
            </>
          )}
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
    justifyContent: "space-around"
  },
  inputs: {
    paddingTop: height * 0.05,
    height: height * 0.3,
    justifyContent: "space-between"
  },
  errorMessageWrapper: {
    height: height * 0.05,
    justifyContent: "space-around",
    alignItems: "center"
  },
  actions: {
    height: height * 0.3,
    justifyContent: "space-around"
  },
  errorMessage: {
    color: COLOR.main,
    fontSize: 10
  },
  avatar: {
    marginBottom: height * 0.03
  }
});
