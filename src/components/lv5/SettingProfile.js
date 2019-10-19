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
    avatarSource: ""
  };

  componentDidMount = async () => {
    const userId = auth.currentUserId();
    await this.setState({ userId });
    userId && this.fetchUserProfile();
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
        const source = res.uri;
        this.setState({ avatarSource: source });
      }
    });
  };

  imageUpload = async () => {
    const { userId, profile, avatarSource } = this.state;
    await this.userDetail
      .createAvatar(userId, avatarSource)
      .then(snapShot => {
        this.setState({
          profile: { ...profile, avatar: snapShot.downloadURL }
        });
        this.onUpdate();
      })
      .catch(e => console.error);
  };

  render() {
    const { userId, profile, avatarSource } = this.state;
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
            <Text>現在のプロフィール写真</Text>
            <Image
              source={{ uri: profile.avatar }}
              style={{ height: 200, minWidth: 200 }}
            />
            <Button
              title="新しいプロフィール画像選択"
              onPress={this.selectAvatar}
            />
            <Text>新しいプロフィール写真</Text>
            <Image
              source={{ uri: avatarSource }}
              style={{ height: 200, minWidth: 200 }}
            />
            <Button title="プロフィール画像更新" onPress={this.imageUpload} />
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
