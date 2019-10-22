import React from "react";
import { Alert, BackHandler } from "react-native";
import { Actions } from "react-native-router-flux";
import ImagePicker from "react-native-image-picker";

import { auth } from "app/src/utils/firebase";
import errorAlert from "app/src/utils/errorAlert";
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
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      this.onUpdate();
      return true;
    });
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

  imageUpload = () => {
    const { profile, avatarSource } = this.state;
    const req = this.userDetail
      .createAvatar(profile.docId, avatarSource)
      .then(snapShot => {
        this.setState({
          profile: { ...profile, avatar: snapShot.downloadURL },
          avatarSource: ""
        });
      })
      .catch(e => {
        throw new Error();
      });

    return req;
  };

  onUpdate = async () => {
    // バリデーション
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

    this.setState({ loading: true });
    // 画像アップロード
    const { avatarSource } = this.state;
    if (avatarSource) {
      try {
        await this.imageUpload();
      } catch (e) {
        errorAlert();
        this.setState({ loading: false });
        return false;
      }
    }

    // 更新
    const { userId } = this.props;
    const newProfile = this.state.profile;

    delete newProfile.docId;

    this.userDetail
      .set(userId, newProfile)
      .then(() => {
        this.props.reloadUser();
        Actions.chatroomIndex();
      })
      .catch(() => errorAlert());
    this.setState({ loading: false });

    this.backHandler.remove();
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
