import React from "react";
import { Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import ImagePicker from "react-native-image-picker";

import { auth } from "app/src/utils/firebase";
import UserDetail from "app/src/models/userDetail";

import SettingProfile from "app/src/components/lv4/SettingProfile";

export default class extends React.Component {
  userDetail = new UserDetail();

  state = {
    profile: { ...UserDetail.properties },
    avatarSource: "",
    loading: false,
    errorMessage: { name: "", age: "", gender: "" }
  };

  componentDidMount() {
    const { user } = this.props;
    const { profile } = this.state;
    this.setState({ profile: { ...profile, ...user } });
  }

  onChange = target => value => {
    const { profile } = this.state;
    this.setState({ profile: { ...profile, [target]: value } });
  };

  onSignOut = () => {
    auth.signOut();
  };

  onDeleteAccount = () => {
    auth.delete();
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
    this.setState({ loading: true });
    await this.userDetail
      .createAvatar(profile.docId, avatarSource)
      .then(snapShot => {
        console.log("res", snapShot);
        this.setState({
          profile: { ...profile, avatar: snapShot.downloadURL },
          loading: false,
          avatarSource: ""
        });
      })
      .catch(e => this.setState({ loading: false }));
  };

  onUpdate = () => {
    const { avatarSource } = this.state;
    avatarSource && this.imageUpload();

    const { userId } = this.props;
    const { profile } = this.state;

    this.setState({ errorMessage: { name: "", gender: "", age: "" } });

    !profile.name &&
      this.setState({
        errorMessage: {
          ...this.state.errorMessage,
          name: "表示名を入力して下さい"
        }
      });

    profile.gender === "0" &&
      this.setState({
        errorMessage: {
          ...this.state.errorMessage,
          gender: "性別を選択して下さい"
        }
      });

    profile.age === "0" &&
      this.setState({
        errorMessage: {
          ...this.state.errorMessage,
          age: "年齢を選択して下さい"
        }
      });

    if (
      Object.values(this.state.errorMessage).some(message => message !== "")
    ) {
      return false;
    }

    delete profile.docId;
    this.userDetail
      .set(userId, profile)
      .then(() => {
        this.props.reloadUser();
        Actions.chatroomIndex();
      })
      .catch(e => console.error(e.message));
  };

  render() {
    const { isUserCreate } = this.props;

    return (
      <SettingProfile
        {...this.state}
        onChange={this.onChange}
        selectAvatar={this.selectAvatar}
        onUpdate={this.onUpdate}
        onSignOut={this.onSignOut}
        onDeleteAccount={this.onDeleteAccount}
        isUserCreate={isUserCreate}
      />
    );
  }
}
