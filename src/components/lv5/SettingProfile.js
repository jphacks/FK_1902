import React from "react";
import { Actions } from "react-native-router-flux";
import ImagePicker from "react-native-image-picker";
import { View, Text, Button, Image } from "react-native";

import { auth } from "app/src/utils/firebase";
import constantsToPickerOptions from "app/src/utils/constantsToPickerOptions";
import UserDetail from "app/src/models/userDetail";

import Input from "app/src/components/lv1/Input";
import Picker from "app/src/components/lv1/Picker";

import USER from "app/src/config/user.json";

export default class extends React.Component {
  userDetail = new UserDetail();

  state = {
    profile: { ...UserDetail.properties },
    avatarSource: ""
  };

  componentDidMount() {
    const { user } = this.props;
    const { profile } = this.state;
    this.setState({ profile: { ...profile, ...user } });
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
    const { profile } = this.state;
    delete profile.docId;
    this.userDetail
      .set(profile.id, profile)
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
    const { profile, avatarSource } = this.state;
    await this.userDetail
      .createAvatar(profile.docId, avatarSource)
      .then(snapShot => {
        this.setState({
          profile: { ...profile, avatar: snapShot.downloadURL }
        });
        this.onUpdate();
      })
      .catch(e => console.error);
  };

  render() {
    const { profile, avatarSource } = this.state;
    const { name, age, gender, avatar } = profile;

    return (
      <View>
        {auth.isSignedIn() ? (
          <>
            <Input
              value={name}
              onChangeText={text => this.onChangeProfileText("name", text)}
            />
            <Picker
              value={age}
              options={constantsToPickerOptions(USER.age)}
              onValueChange={value =>
                this.setState({
                  profile: { ...this.state.profile, age: value }
                })
              }
            />
            <Picker
              value={gender}
              options={constantsToPickerOptions(USER.gender)}
              onValueChange={value =>
                this.setState({
                  profile: { ...this.state.profile, gender: value }
                })
              }
            />
            <Text>現在のプロフィール写真</Text>
            <Image
              source={{ uri: profile.avatar }}
              style={{ height: 100, minWidth: 100 }}
            />
            <Button
              title="新しいプロフィール画像選択"
              onPress={this.selectAvatar}
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
