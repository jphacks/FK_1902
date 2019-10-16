import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text } from "react-native";

import { db } from "app/src/utils/firebase";

export default class extends React.Component {
  // componentDidMount() {
  //   db.collection("sample")
  //     .add({ aaa: "aaa" })
  //     .then(() => console.log("ok"))
  //     .catch(e => console.log("error"));
  // }

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
