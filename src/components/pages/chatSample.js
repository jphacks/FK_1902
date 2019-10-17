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
    await this.fetchChatroom();

    const chatroomId = this.state.chatroom.docId;
    this.unsubscribeMessage = this.message.subscribe(chatroomId, messages =>
      this.setState({ messages })
    );
  };

  componentWillUnMount() {
    this.unsubscribeMessage();
  }

  fetchChatroom = async () => {
    // stateで渡す
    const chatroom = await this.chatroom
      .getByDocId("OsLsIsIz5OUocDbptjNn")
      .catch(e => console.error(e.message));
    this.setState({ chatroom });
  };

  onSend(messages = []) {
    const chatroomId = this.state.chatroom.docId;
    messages.forEach(message => this.message.create(chatroomId, message));
  }

  render() {
    const { chatroom, messages } = this.state;

    return (
      <GiftedChat
        messages={messages}
        onSend={messages => this.onSend(messages)}
        // userId ルーム作成時にisHost渡す
        // あればhostのidをなければguestのidを
        user={{
          _id: chatroom.host
        }}
      />
    );
  }
}
