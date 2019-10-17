import React from "react";
import { Actions } from "react-native-router-flux";

import { View, Text } from "react-native";

export default class extends React.Component {
  render() {
    return (
      <View>
        <Text>sample2 text</Text>
        <Text>sample2 text</Text>
        <Text>sample2 text</Text>
        <Text>sample2 text</Text>
        <Text>sample2 text</Text>
        <Text onPress={() => Actions.sample()}>sampleへ</Text>
      </View>
    );
  }
}
