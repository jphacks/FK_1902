import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button } from "react-native";

import { auth } from "app/src/utils/firebase";

import Logo from "app/src/components/lv1/Logo";

import COUNTRY from "app/src/config/countries.json";

import COLOR from "app/src/config/color";

import { GoogleSigninButton } from "react-native-google-signin";

export default class extends React.Component {
  state = { isSigninInProgress: false };

  onLoginOrRegister = () => {
    this.setState({ isSigninInProgress: true });
    auth
      .siginInWithGoogle()
      .then(() => {
        this.props.reloadUser({ isUserCreate: true });
      })
      .catch(e => {
        this.setState({ isSigninInProgress: false });
        console.log(e.message);
      });
  };

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Logo />
        <Text
          style={{
            color: COLOR.black,
            marginBottom: 40
          }}>
          愚痴や悩みを誰かに話してみましょう♪
        </Text>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.onLoginOrRegister}
          disabled={this.state.isSigninInProgress}
        />
      </View>
    );
  }
}
