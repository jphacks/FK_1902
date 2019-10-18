import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button } from "react-native";

import { auth } from "app/src/utils/firebase";
import UserDetail from "app/src/models/userDetail";

import Input from "app/src/components/lv1/Input";

import USER from "app/src/config/user.json";

export default class extends React.Component {
  userDetail = new UserDetail();

  state = { userId: "", profile: { ...UserDetail.properties } };

  componentDidMount() {
    const userId = auth.currentUserId();
    this.setState({ userId });
    this.fetchUserProfile();
  }

  fetchUserProfile = async () => {
    const profile = await this.userDetail.getByUserId(userId);
    this.setState({ profile });
  };

  onChangeProfileText = (target, text) => {
    const { profile } = this.state;
    this.setState({ profile: { ...profile, [target]: text } });
  };

  onSignOut = () => {
    auth
      .signOut()
      .then(() => Actions.refresh())
      .catch(e => console.error(e.message));
  };

  onUpdate = () => {
    const { userId, profile } = this.state;
    this.userDetail
      .set(userId, profile)
      .then(() => console.log("ok"))
      .catch(e => console.error(e.message));
  };

  render() {
    const { userId, profile } = this.state;
    const { name, age, gender } = profile;
    return (
      <View>
        {auth.isSignedIn() ? (
          <>
            <Text>id: {userId}</Text>
            <Text>name: {name}</Text>
            <Input
              value={name}
              onChangeText={text => this.onChangeProfileText("name", text)}
            />
            {/* セレクトボックス */}
            <Text>age: {USER.age[age]}</Text>
            <Input
              value={age}
              onChangeText={text => this.onChangeProfileText("age", text)}
            />
            {/* セレクトボックス */}
            <Text>gender: {USER.gender[gender]}</Text>
            <Input
              value={gender}
              onChangeText={text => this.onChangeProfileText("gender", text)}
            />
            <Button title="プロフィール更新" onPress={this.onUpdate} />
            <Button title="ログアウト" onPress={this.onSignOut} />
          </>
        ) : (
          <Text>ログインしてないよ</Text>
        )}
      </View>
    );
  }
}
