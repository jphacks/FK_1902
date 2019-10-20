import React from "react";
import { Actions } from "react-native-router-flux";

import Chatroom from "app/src/models/chatroom";

import ChatroomIndex from "app/src/components/lv4/ChatroomIndex";

export default class extends React.Component {
  chatroom = new Chatroom();

  state = {
    chatrooms: [{ ...Chatroom.properties }],
    loading: true,
    refreshing: false,
    isVisibleTagModal: false,
    filterTags: []
  };

  componentDidMount() {
    this.fetchChatrooms();
  }

  fetchChatrooms() {
    this.chatroom
      .getAll()
      .then(chatrooms => this.setState({ chatrooms, loading: false }));
  }

  onRefresh = async () => {
    this.setState({ refreshing: true });
    await this.fetchChatrooms();
    this.setState({ refreshing: false });
  };

  onEnterChatroom = chatroomId => {
    const { user } = this.props;
    this.chatroom.updateGuest(chatroomId, user);
    Actions.chatroom({ chatroomId, isHost: false });
  };

  onDeleteTag = value => {
    const { dammySelectedTags } = this.state;
    dammySelectedTags.pop(value);
    this.setState({ dammySelectedTags });
  };

  toggleTagModal = () => {
    this.setState({ isVisibleTagModal: !this.state.isVisibleTagModal });
  };

  onAddTag = value => {
    const { filterTags } = this.state;
    !filterTags.includes(value) && filterTags.push(value);
    this.setState({ filterTags });
  };

  render() {
    const { filterTags, chatrooms } = this.state;
    const filteredChatrooms = chatrooms.filter(chatroom => {
      // filteredTagsの配列にある値がchatrooms.tagsにあればそれを返す
      return chatroom;
    });

    return (
      <ChatroomIndex
        {...this.state}
        chatrooms={filteredChatrooms}
        toRegister={() => Actions.register()}
        onRefresh={this.onRefresh}
        onEnterChatroom={this.onEnterChatroom}
        selectedTags={filterTags}
        onAddTag={this.onAddTag}
        onDeleteTag={this.onDeleteTag}
        toggleTagModal={this.toggleTagModal}
      />
    );
  }
}
