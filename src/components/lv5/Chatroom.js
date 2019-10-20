import React from "react";
import { Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

import Chatroom from "app/src/models/chatroom";
import Message from "app/src/models/chatroom/message";

import ChatroomNavBar from "app/src/components/lv3/ChatroomNavBar";

export default class extends React.Component {
  chatroom = new Chatroom();
  message = new Message();

  state = {
    messages: [{ ...Message.properties }]
  };

  componentDidMount() {
    const { chatroomId } = this.props;

    this.unsubscribeMessage = this.message.subscribe(chatroomId, messages =>
      this.setState({ messages })
    );
  }

  componentWillUnMount() {
    this.unsubscribeMessage();
  }

  onSend(messages = []) {
    messages.forEach(message => this.message.create(chatroomId, message));
  }

  onLeave = () => {
    const { chatroomId, isHost } = this.props;
    if (isHost) {
      this.chatroom.delete(chatroomId).then(() => Actions.chatroomIndex());
    } else {
      const emptyUser = { id: "", name: "", avatar: "" };
      this.chatroom
        .updateGuest(chatroomId, emptyUser)
        .then(() => Actions.chatroomIndex());
    }
  };

  render() {
    const { messages } = this.state;
    const { user } = this.props;

    return (
      <>
        <ChatroomNavBar title="ほげ" />
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
        <Text onPress={this.onLeave}>aaa</Text>
      </>
    );
  }
}
