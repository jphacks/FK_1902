import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Image } from "react-native";

import COLORS from "app/src/config/color";

import Chatroom from "app/src/models/chatroom";

import Input from "app/src/components/lv1/Input";
import Button from "app/src/components/lv1/Button";

export default class extends React.Component {
  chatroom = new Chatroom();

  state = {
    chatroom: { ...Chatroom.properties }
  };

  onCreateChatroom = async () => {
    const { chatroom } = this.state;
    const { user } = this.props;
    chatroom.host = { id: user.docId, name: user.name, avatar: user.avatar };

    const chatroomId = await this.chatroom
      .create(chatroom)
      .then(() => Actions.chatroom({ chatroomId, isHost: true }));
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
        <Button
          title="ルーム作成"
          onPress={this.onCreateChatroom}
          color={COLORS.whiteMain}
          disable={false}
        />
      </View>
    );
  }
}
