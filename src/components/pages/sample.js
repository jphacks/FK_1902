import React from "react";
import { Actions } from "react-native-router-flux";

import { View, Text } from "react-native";
import { storage } from "app/src/utils/firebase";

export default class extends React.Component {
  componentDidMount() {
    const iconRef = storage.ref().child("icon.png");
    console.log(iconRef.name);
  }

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
