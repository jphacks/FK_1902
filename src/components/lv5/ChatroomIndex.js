import React from "react";
import { Actions } from "react-native-router-flux";

import Chatroom from "app/src/models/chatroom";

import ChatroomIndex from "app/src/components/lv4/ChatroomIndex";

export default class extends React.Component {
  chatroom = new Chatroom();

  state = {
    chatrooms: [{ ...Chatroom.properties }],
    loading: true
  };

  componentDidMount() {
    this.fetchChatrooms();
  }

  fetchChatrooms() {
    this.chatroom
      .getAll()
      .then(chatrooms => this.setState({ chatrooms, loading: false }));
  }

  onEnterChatroom = chatroomId => {
    const { user } = this.props;
    this.chatroom.updateGuest(chatroomId, user);
    Actions.chatroom({ chatroomId, isHost: false });
  };

  render() {
    return (
      <ChatroomIndex
        {...this.state}
        toRegister={() => Actions.register()}
        onEnterChatroom={this.onEnterChatroom}
      />
    );
  }
}
