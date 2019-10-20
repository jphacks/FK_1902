import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button } from "react-native";

import { auth } from "app/src/utils/firebase";

import Logo from "app/src/components/lv1/Logo";

import COUNTRY from "app/src/config/countries.json";

import COLOR from "app/src/config/color";

import { GoogleSigninButton } from "react-native-google-signin";

export default class extends React.Component {
  state = {
    phoneNumber: "",
    countryISO2: "jp",
    confirmationResult: {},
    confirmCode: ""
  };

  // onChangeText = (target, text) => {
  //   this.setState({ [target]: text });
  // };

  // onSend = () => {
  //   const { phoneNumber, countryISO2 } = this.state;
  //   const { dialCode } = COUNTRY.find(country => country.iso2 === countryISO2);
  //   const phoneNumberWithDialCode = `+${dialCode} ${phoneNumber}`;

  //   auth
  //     .phoneNumber(phoneNumberWithDialCode)
  //     .then(confirmationResult => {
  //       console.log("SMSを送信しました");
  //       console.log(confirmationResult);
  //       this.setState({ confirmationResult });
  //     })
  //     .catch(e => console.error(e.message));
  // };

  // onConfirm = () => {
  //   const { confirmationResult, confirmCode } = this.state;
  //   confirmationResult
  //     .confirm(confirmCode)
  //     .then(res => console.log("userID: ", res.uid))
  //     .catch(e => console.log(e.message));
  // };

  // onPress = () => {
  //   console.log("pressed");
  // };

  // onChangeText = () => {
  //   console.log("onChangeText");
  // };

  onLoginOrRegister = () => {
    auth
      .siginInWithGoogle()
      .then(() => {
        console.log("sign in");
        this.props.reloadUser();
        Actions.settingProfile();
      })
      .catch(e => console.log(e.message));
    // GoogleSignin.signIn()
    //   .then(data => {
    //     // Create a new Firebase credential with the token
    //     const credential = firebase.auth.GoogleAuthProvider.credential(
    //       data.idToken,
    //       data.accessToken
    //     );
    //     // Login with the credential
    //     return firebase.auth().signInWithCredential(credential);
    //   })
    //   .then(user => {
    //     // If you need to do anything with the user, do it here
    //     // The user will be logged in automatically by the
    //     // `onAuthStateChanged` listener we set up in App.js earlier
    //   })
    //   .catch(error => {
    //     const { code, message } = error;
    //     // For details of error codes, see the docs
    //     // The message contains the default Firebase string
    //     // representation of the error
    //     console.error(error.message);
    //   });
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
