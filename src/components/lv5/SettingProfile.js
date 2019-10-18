import React from "react";
import { Actions } from "react-native-router-flux";
import ImagePicker from "react-native-image-picker";
import { View, Text, Button, Image } from "react-native";

import { auth } from "app/src/utils/firebase";
import UserDetail from "app/src/models/userDetail";

import Input from "app/src/components/lv1/Input";

import USER from "app/src/config/user.json";

export default class extends React.Component {
  userDetail = new UserDetail();

  state = {
    userId: "",
    profile: { ...UserDetail.properties },
    newAvatar: { data: "", fileName: "" }
  };

  componentDidMount = async () => {
    const userId = auth.currentUserId();
    await this.setState({ userId });
    this.fetchUserProfile();
  };

  fetchUserProfile() {
    const { userId } = this.state;
    this.userDetail
      .getByUserId(userId)
      .then(profile => this.setState({ profile }))
      .catch(e => console.log(e));
  }

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
      .then(() => console.log("update ok"))
      .catch(e => console.error(e.message));
  };

  imageUpload = async () => {
    const { newAvatar } = this.state;
    const data = await this.userDetail.createAvatar(newAvatar.uri);
  };

  selectAvatar = () => {
    const { profile } = this.state;
    const options = {
      title: "プロフィール画像選択...",
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, res => {
      if (res.didCancel) {
        console.log("User cancelled image picker");
      } else if (res.error) {
        console.log("ImagePicker Error: ", res.error);
      } else {
        console.log(res);
        const data = "data:image/jpeg;base64," + res.data;
        const { fileName } = res;
        this.setState({ newAvatar: { data, fileName } });
      }
    });
  };

  render() {
    const { userId, profile, newAvatar } = this.state;
    const { name, age, gender, avatar } = profile;

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
            <Image source={newAvatar.data} />
            <Button title="image選択" onPress={this.selectAvatar} />
            <Button title="画像投稿" onPress={this.imageUpload} />
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
