import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Button } from "react-native";

import { auth } from "app/src/utils/firebase";
import UserDetail from "app/src/models/userDetail";

export default class extends React.Component {
  userDetail = new UserDetail();

  state = {
    // この情報をchatroomのhost or guestに入れると同時にチャットルームに繊維
    userId: "",
    user: { id: "", name: "", avatar: "" }
  };

  componentDidMount = async () => {
    const userId = auth.currentUserId();
    await this.setState({});
    userId && this.fetchUser();
  };

  fetchUser() {
    const { userId } = this.state;
    this.userDetail
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
  }

  render() {
    return (
      <View>
        <Button title="Chatroom" onPress={() => Actions.chatroom()} />
        <Button title="新規登録" onPress={() => Actions.register()} />
        <Button
          title="プロフィール設定"
          onPress={() => Actions.settingProfile()}
        />
      </View>
    );
  }
}
