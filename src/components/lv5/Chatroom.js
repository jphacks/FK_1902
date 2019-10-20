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
    const { chatroomId, isHost } = this.props;

    this.unsubscribeChatroom = this.chatroom.subscribe(chatroomId, chatroom => {
      this.setState({ chatroom });
      !isHost && this.notification(true);
    });
    this.unsubscribeMessage = this.message.subscribe(chatroomId, messages =>
      this.setState({ messages })
    );
  }

  notification = isEnter => {
    const { chatroom } = this.state;
    const { chatroomId } = this.props;
    const text = isEnter
      ? `${chatroom.guest.name}さんが入室しました`
      : `${chatroom.guest.name}さんが退室しました`;

    const systemMessage = {
      _id: "system",
      text: text,
      createdAt: new Date(),
      system: true
    };

    this.message.create(chatroomId, systemMessage);
  };

  onSend(messages = []) {
    const { chatroomId } = this.props;
    messages.forEach(message => this.message.create(chatroomId, message));
  }

  onLeave = () => {
    const { chatroomId, isHost } = this.props;
    const { chatroom } = this.state;

    if (isHost) {
      this.chatroom.delete(chatroomId);
    } else {
      this.chatroom.updateGuest(chatroomId, chatroom);
      this.notification(false);
    }
    this.unsubscribeChatroom();
    this.unsubscribeMessage();
    Actions.chatroomIndex();
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
    const { messages, chatroom } = this.state;
    const { user } = this.props;

    return (
      <>
        <ChatroomNavBar title={chatroom.title} onPress={this.onLeave} />
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
