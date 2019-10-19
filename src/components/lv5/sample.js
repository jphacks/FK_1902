import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Button } from "react-native";

import { auth } from "app/src/utils/firebase";
import UserDetail from "app/src/models/userDetail";

export default class extends React.Component {
  render() {
    return (
      <View>
        <Button title="Chatroom作成" onPress={() => Actions.chatroomNew()} />
        <Button title="Chatroom一覧" onPress={() => Actions.chatroomIndex()} />
        <Button title="新規登録" onPress={() => Actions.register()} />
        <Button
          title="プロフィール設定"
          onPress={() => Actions.settingProfile()}
        />
      </View>
    );
  }
}
