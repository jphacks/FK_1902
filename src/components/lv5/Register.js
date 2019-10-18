import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button } from "react-native";

import PhoneInput from "react-native-phone-input";
import Input from "app/src/components/lv1/Input";

import COUNTRY from "app/src/config/countries.json";

export default class extends React.Component {
  state = {
    phoneNumber: "",
    countryISO2: "jp"
  };

  onChangeText = (target, text) => {
    this.setState({ [target]: text });
  };

  onSend = () => {
    const { phoneNumber, countryISO2 } = this.state;
    const { dialCode } = COUNTRY.find(country => country.iso2 === countryISO2);
    const phoneNumberWithDialCode = `+${dialCode} ${phoneNumber}`;
    // send
  };

  render() {
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
      </View>
    );
  }
}
