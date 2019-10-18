import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Button } from "react-native";

export default class extends React.Component {
  render() {
    return (
      <View>
        <Button title="Chatroom" onPress={() => Actions.chatroom()} />
        <Button title="新規登録" onPress={() => Actions.register()} />
      </View>
    );
  }
}
