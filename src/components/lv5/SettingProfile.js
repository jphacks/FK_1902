import React from "react";
import { Actions } from "react-native-router-flux";
import ImagePicker from "react-native-image-picker";

import { auth } from "app/src/utils/firebase";
import UserDetail from "app/src/models/userDetail";

import SettingProfile from "app/src/components/lv4/SettingProfile";

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

  onSelectPicker = (target, value) => {
    const { profile } = this.state;
    this.setState({ profile: { ...profile, [target]: value } });
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
    return (
      <SettingProfile
        {...this.state}
        onChangeProfileText={this.onChangeProfileText}
        onSelectPicker={this.onSelectPicker}
        selectAvatar={this.selectAvatar}
        imageUpload={this.imageUpload}
        onUpdate={this.onUpdate}
        onSignOut={this.onSignOut}
      />
    );
  }
}
