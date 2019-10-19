import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button } from "react-native";

import Chatroom from "app/src/models/chatroom";

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
    const { chatrooms, loading } = this.state;

    return (
      <View>
        <Button title="新規登録" onPress={() => Actions.register()} />
        {loading ? (
          <Text>loading</Text>
        ) : (
          chatrooms.map((chatroom, index) => (
            <Button
              key={index}
              title={chatroom.detail.title}
              onPress={() => this.onEnterChatroom(chatroom.docId)}
            />
          ))
        )}
      </View>
    );
  }
}
