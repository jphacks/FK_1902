import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button } from "react-native";

import { auth } from "app/src/utils/firebase";

import Logo from "app/src/components/lv1/Logo";
import LoadingOverlay from "app/src/components/lv2/LoadingOverlay";

import COUNTRY from "app/src/config/countries.json";

import COLOR from "app/src/config/color";

import { GoogleSigninButton } from "react-native-google-signin";

export default class extends React.Component {
  state = { isSigninInProgress: false, loading: false };

  onLoginOrRegister = () => {
    this.setState({ isSigninInProgress: true });
    auth
      .siginInWithGoogle()
      .then(() => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
          this.props.reloadUser({ isUserCreate: true });
        }, 5000);
      })
      .catch(e => {
        this.setState({ isSigninInProgress: false });
        console.log(e.message);
      });
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <LoadingOverlay loading={loading} />
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center", marginTop: 200 }}>
            <Logo />
            <Text
              style={{
                color: COLOR.black
              }}>
              愚痴や悩みを誰かに話してみましょう♪
            </Text>
          </View>
          <GoogleSigninButton
            style={{ width: 220, height: 60, alignSelf: "center" }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.onLoginOrRegister}
            disabled={this.state.isSigninInProgress}
          />
        </View>
      </>
    );
  }
}
