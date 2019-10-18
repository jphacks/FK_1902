import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { db } from "app/src/utils/firebase";

import Chatroom from "app/src/models/chatroom";
import Message from "app/src/models/chatroom/message";

export default class extends React.Component {
  chatroom = new Chatroom();
  message = new Message();

  state = {
    chatroom: { ...Chatroom.properties },
    messages: [{ ...Message.properties }]
  };

  componentDidMount = async () => {
    // stateで受け取る
    const chatroomId = "OsLsIsIz5OUocDbptjNn";

    this.unsubscribeChatroom = this.chatroom.subscribe(chatroomId, chatroom =>
      this.setState({ chatroom })
    );
    this.unsubscribeMessage = this.message.subscribe(chatroomId, messages =>
      this.setState({ messages })
    );

    this.isHost = Math.round(Math.random()) ? true : false;
  };

  componentWillUnMount() {
    this.unsubscribeChatroom();
    this.unsubscribeMessage();
  }

  onSend(messages = []) {
    const chatroomId = this.state.chatroom.docId;
    messages.forEach(message => this.message.create(chatroomId, message));
  }

  render() {
    const { chatroom, messages } = this.state;
    // stateで受け取る
    const isHost = this.isHost;

    return (
      <GiftedChat
        messages={messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: isHost ? chatroom.host.id : chatroom.guest.id,
          name: isHost ? chatroom.host.name : chatroom.guest.name,
          avatar: isHost ? chatroom.host.avatar : chatroom.guest.avatar
        }}
        placeholder=""
        alwaysShowSend
        showAvatarForEveryMessage
      />
    );
  }
}
