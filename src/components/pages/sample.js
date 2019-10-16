import React from "react";
import { Actions } from "react-native-router-flux";

import { View, Text } from "react-native";

export default class extends React.Component {
  render() {
    return (
      <View>
        <Text>sample text</Text>
        <Text>sample text</Text>
        <Text>sample text</Text>
        <Text>sample text</Text>
        <Text>sample text</Text>
        <Text onPress={() => Actions.sample2()}>sample2へ</Text>
      </View>
    );
  }
}
