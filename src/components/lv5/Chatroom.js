import React from "react";
import { Actions } from "react-native-router-flux";
import { Alert, BackHandler } from "react-native";
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
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      this.onLeave();
      return true;
    });

    const { chatroomId, isHost, userId, hostId } = this.props;

    this.unsubscribeChatroom = this.chatroom.subscribe(chatroomId, chatroom => {
      if (!chatroom.isActive) {
        Alert.alert("", "ルームが削除されました");
        this._leave();
      }
      this.setState({ chatroom });
    });
    this.unsubscribeMessage = this.message.subscribe(
      chatroomId,
      messages => this.setState({ messages }),
      userId,
      hostId,
      isHost
    );
    !isHost && this.notification(true);
  }

  notification = isEnter => {
    const { chatroom } = this.state;
    const { chatroomId } = this.props;

    const text = isEnter
      ? `ユーザが入室しました`
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
    const { isHost } = this.props;

    if (isHost) {
      Alert.alert("", "ルームを削除します。よろしいですか？", [
        { text: "いいえ" },
        { text: "はい", onPress: () => this._leave() }
      ]);
    } else {
      this._leave();
    }
  };

  _leave = () => {
    const { chatroomId, isHost } = this.props;
    const { chatroom } = this.state;

    if (isHost) {
      this.chatroom.delete(chatroomId);
    } else {
      this.chatroom.updateGuest(chatroomId, chatroom);
      this.notification(false);
    }
    this.backHandler.remove();
    this.unsubscribeChatroom();
    this.unsubscribeMessage();
    Actions.pop();
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
    const { user, userId } = this.props;

    return (
      <>
        <ChatroomNavBar title={chatroom.title} onPress={this.onLeave} />
        <GiftedChat
          messages={messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: userId,
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
