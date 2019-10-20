import React from "react";
import { Actions } from "react-native-router-flux";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

import Chatroom from "app/src/models/chatroom";
import Message from "app/src/models/chatroom/message";

import ChatroomNavBar from "app/src/components/lv3/ChatroomNavBar";

import COLOR from "app/src/config/color";

export default class extends React.Component {
  chatroom = new Chatroom();
  message = new Message();

  state = {
    chatroom: { ...Chatroom.properties },
    messages: [{ ...Message.properties }]
  };

  componentDidMount() {
    const { chatroomId } = this.props;

    this.unsubscribeChatroom = this.chatroom.subscribe(chatroomId, chatroom => {
      this.setState({ chatroom });
    });
    this.unsubscribeMessage = this.message.subscribe(chatroomId, messages =>
      this.setState({ messages })
    );
  }

  componentWillUnMount() {
    this.unsubscribeChatroom();
    this.unsubscribeMessage();
  }

  onSend(messages = []) {
    const { chatroomId } = this.props;
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

  renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLOR.main
          },
          left: {
            backgroundColor: COLOR.white
          }
        }}
      />
    );
  };

  render() {
    const { messages } = this.state;
    const { user } = this.props;

    return (
      <>
        <ChatroomNavBar
          title={this.state.chatroom.detail.title}
          onPress={this.onLeave}
        />
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
          alignTop
          renderBubble={this.renderBubble}
          renderAvatar={this.renderAvatar}
        />
      </>
    );
  }
}
