import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text } from "react-native";

export default class extends React.Component {
  render() {
    return (
      <View>
        <Text onPress={() => Actions.chatSample()}>chatroomへ</Text>
      </View>
    );
  }
}
