import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button } from "react-native";

import { auth } from "app/src/utils/firebase";
import UserDetail from "app/src/models/userDetail";
import Chatroom from "app/src/models/chatroom";

export default class extends React.Component {
  userDetail = new UserDetail();
  chatroom = new Chatroom();

  state = {
    userId: "",
    user: { id: "", name: "", avatar: "" },
    chatrooms: [{ ...Chatroom.properties }],
    loading: true
  };

  componentDidMount = async () => {
    // user情報はトップページで取得して受け渡すかRootのとこでいい感じに呼び出す
    const userId = auth.currentUserId();
    await this.setState({ userId });
    userId && this.fetchUser();
    this.fetchChatrooms();
  };

  fetchUser = async () => {
    const { userId } = this.state;
    await this.userDetail
      .getByUserId(userId)
      .then(profile =>
        this.setState({
          user: {
            id: profile.docId,
            name: profile.name,
            avatar: profile.avatar
          }
        })
      )
      .catch(e => console.log(e));
  };

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
