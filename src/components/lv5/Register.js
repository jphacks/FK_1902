import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button } from "react-native";

import { auth } from "app/src/utils/firebase";

import PhoneInput from "react-native-phone-input";
import Input from "app/src/components/lv1/Input";

import COUNTRY from "app/src/config/countries.json";

export default class extends React.Component {
  state = {
    phoneNumber: "",
    countryISO2: "jp",
    confirmationResult: {},
    confirmCode: ""
  };

  onChangeText = (target, text) => {
    this.setState({ [target]: text });
  };

  onSend = () => {
    const { phoneNumber, countryISO2 } = this.state;
    const { dialCode } = COUNTRY.find(country => country.iso2 === countryISO2);
    const phoneNumberWithDialCode = `+${dialCode} ${phoneNumber}`;

    auth
      .phoneNumber(phoneNumberWithDialCode)
      .then(confirmationResult => {
        console.log("SMSを送信しました");
        this.setState({ confirmationResult });
      })
      .catch(e => console.error(e.message));
  };

  onConfirm = () => {
    const { confirmationResult, confirmCode } = this.state;
    confirmationResult
      .confirm(confirmCode)
      .then(res => console.log("userID: ", res.uid))
      .catch(e => console.log(e.message));
  };

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>新規登録</Text>
        <PhoneInput
          initialCountry="jp"
          ref="phone"
          onChangePhoneNumber={phoneNumber => this.setState({ phoneNumber })}
          value={this.state.phoneNumber}
          onSelectCountry={countryISO2 => this.setState({ countryISO2 })}
        />
        <Button title="SMS送信" onPress={this.onSend} />
        <Input
          onChangeText={text => this.setState({ confirmCode: text })}
          value={this.state.confirmCode}
        />
        <Button title="確認コード送信" onPress={this.onConfirm} />
      </View>
    );
  }
}
