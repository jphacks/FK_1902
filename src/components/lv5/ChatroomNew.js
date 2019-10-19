import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button, Image } from "react-native";

import Chatroom from "app/src/models/chatroom";

import Input from "app/src/components/lv1/Input";

export default class extends React.Component {
  chatroom = new Chatroom();

  state = {
    userId: "",
    user: { id: "", name: "", avatar: "" },
    chatroom: { ...Chatroom.properties }
  };

  componentDidMount() {
    const { user } = this.props;
    this.setState({
      user: { id: user.id, name: user.name, avatar: user.avatar }
    });
  }

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
