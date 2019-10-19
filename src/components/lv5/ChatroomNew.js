import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button, Image } from "react-native";
import { auth } from "app/src/utils/firebase";

import UserDetail from "app/src/models/userDetail";
import Chatroom from "app/src/models/chatroom";

import Input from "app/src/components/lv1/Input";

export default class extends React.Component {
  userDetail = new UserDetail();
  chatroom = new Chatroom();

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

  fetchUser = async () => {
    const { userId } = this.state;
    await this.userDetail
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
  };

  onCreateChatroom = async () => {
    const { user, chatroom } = this.state;
    chatroom.host = user;
    const chatroomId = await this.chatroom.create(chatroom);
    Actions.chatroom({ chatroomId, isHost: true });
  };

  render() {
    const { chatroom } = this.state;

    return (
      <View>
        <Text>ルームタイトル</Text>
        <Input
          value={chatroom.title}
          onChangeText={text =>
            this.setState({
              chatroom: {
                ...chatroom,
                detail: { ...chatroom.detail, title: text }
              }
            })
          }
        />
        <Button title="ルーム作成" onPress={this.onCreateChatroom} />
      </View>
    );
  }
}
