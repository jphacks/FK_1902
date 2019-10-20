import React from "react";
import { Actions } from "react-native-router-flux";

import Chatroom from "app/src/models/chatroom";
import ChatroomNew from "app/src/components/lv4/ChatroomNew";

export default class extends React.Component {
  chatroom = new Chatroom();

  state = {
    chatroom: { ...Chatroom.properties }
  };

  onCreateChatroom = async () => {
    const { chatroom } = this.state;
    const { user } = this.props;
    chatroom.host = { id: user.docId, name: user.name, avatar: user.avatar };

    const chatroomId = await this.chatroom.create(chatroom);
    Actions.chatroom({ chatroomId, isHost: true });
  };

  onChangeDetail = (target, text) => {
    const { chatroom } = this.state;
    this.setState({
      chatroom: { ...chatroom, detail: { ...chatroom.detail, [target]: text } }
    });
  };

  render() {
    return (
      <ChatroomNew
        {...this.state}
        onCreateChatroom={this.onCreateChatroom}
        onChangeDetail={this.onChangeDetail}
      />
    );
  }
}
