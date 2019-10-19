import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button, Image } from "react-native";

import UserDetail from "app/src/models/userDetail";
import Chatroom from "app/src/models/chatroom";

import Input from "app/src/components/lv1/Input";

export default class extends React.Component {
  userDetail = new UserDetail();

  state = {
    userId: "",
    user: { id: "", name: "", avatar: "" },
    chatroom: { ...Chatroom.properties }
  };

  componentDidMount = async () => {
    const userId = auth.currentUserId();
    await this.setState({ userId });
    userId && this.fetchUser();
  };

  fetchUser() {
    const { userId } = this.state;
    this.userDetail
      .getByUserId(userId)
      .then(profile =>
        this.setState({
          user: {
            id: profile.docId,
            name: profile.name,
            avatar: profile.avatar
          }
        })
      )
      .catch(e => console.log(e));
  }

  render() {
    const { chatroom } = this.state;
    return (
      <View>
        <Text>ルームタイトル</Text>
        <Input
          value={chatroom.title}
          onChangeText={text => this.setState({ chatroom: { title: text } })}
        />
      </View>
    );
  }
}
