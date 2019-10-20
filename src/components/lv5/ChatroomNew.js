import React from "react";
import { Actions } from "react-native-router-flux";

import Chatroom from "app/src/models/chatroom";
import ChatroomNew from "app/src/components/lv4/ChatroomNew";

export default class extends React.Component {
  chatroom = new Chatroom();

  state = {
    chatroom: { ...Chatroom.properties },

    isVisibleTagModal: false
  };

  onCreateChatroom = async () => {
    const { chatroom } = this.state;
    const { user } = this.props;
    chatroom.host = { id: user.docId, name: user.name, avatar: user.avatar };

    const chatroomId = await this.chatroom.create(chatroom);
    Actions.chatroom({ chatroomId, isHost: true });
  };

  onChangeText = (target, text) => {
    const { chatroom } = this.state;
    this.setState({
      chatroom: { ...chatroom, [target]: text }
    });
  };

  toggleTagModal = () => {
    this.setState({ isVisibleTagModal: !this.state.isVisibleTagModal });
  };

  onClearForm = () => {
    this.setState({ chatroom: { detail: { ...Chatroom.properties.detail } } });
  };

  onAddTag = value => {
    const { chatroom } = this.state;
    const { tags } = chatroom;

    !chatroom.tags.includes(value) && tags.push(value);
    this.setState({ chatroom: { ...chatroom, tags } });
  };

  onDeleteTag = value => {
    const { chatroom } = this.state;
    const { tags } = chatroom;

    tags.pop(value);
    this.setState({ chatroom: { ...chatroom, tags } });
  };

  render() {
    return (
      <ChatroomNew
        {...this.state}
        onCreateChatroom={this.onCreateChatroom}
        onChangeText={this.onChangeText}
        onClearForm={this.onClearForm}
        onAddTag={this.onAddTag}
        onDeleteTag={this.onDeleteTag}
        toggleTagModal={this.toggleTagModal}
      />
    );
  }
}
