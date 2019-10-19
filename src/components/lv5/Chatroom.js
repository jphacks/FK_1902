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
    messages: [{ ...Message.properties }]
  };

  componentDidMount() {
    const { user, chatroomId } = this.props;

    this.unsubscribeMessage = this.message.subscribe(chatroomId, messages =>
      this.setState({ messages })
    );
  }

  componentWillUnMount = async () => {
    this.unsubscribeMessage();
  };

  onSend(messages = []) {
    const { chatroomId } = this.props;
    messages.forEach(message => this.message.create(chatroomId, message));
  }

  render() {
    const { messages } = this.state;
    const { user } = this.props;

    return (
      <GiftedChat
        messages={messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: user.docId,
          name: user.name,
          avatar: user.avatar
        }}
        placeholder=""
        alwaysShowSend
      />
    );
  }
}
