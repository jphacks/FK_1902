import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button } from "react-native";

import { auth } from "app/src/utils/firebase";
import Chatroom from "app/src/models/chatroom";

export default class extends React.Component {
  chatroom = new Chatroom();

  state = {
    userId: "",
    user: { id: "", name: "", avatar: "" },
    chatrooms: [{ ...Chatroom.properties }],
    loading: true
  };

  componentDidMount() {
    const { user } = this.props;
    this.setState({
      user: { id: user.id, name: user.name, avatar: user.avatar }
    });
    this.fetchChatrooms();
  }

  fetchChatrooms() {
    this.chatroom
      .getAll()
      .then(chatrooms => this.setState({ chatrooms, loading: false }));
  }

  onEnterChatroom = async chatroomId => {
    const { user } = this.state;
    await this.chatroom
      .updateGuest(chatroomId, user)
      .then(() => Actions.chatroom({ chatroomId, isHost: false }));
  };

  render() {
    const { chatrooms, loading } = this.state;

    return (
      <View>
        <Button title="新規登録" onPress={() => Actions.register()} />
        {loading ? (
          <Text>loading</Text>
        ) : (
          chatrooms.map(chatroom => (
            <Button
              title={chatroom.detail.title}
              onPress={() => this.onEnterChatroom(chatroom.docId)}
            />
          ))
        )}
      </View>
    );
  }
}
