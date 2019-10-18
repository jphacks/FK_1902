import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, Button } from "react-native";

import { auth } from "app/src/utils/firebase";

import Input from "app/src/components/lv1/Input";

export default class extends React.Component {
  state = { userId: "", displayName: "", ptotoUrl: "" };

  componentDidMount() {
    const userId = auth.currentUserId();
    this.setState({ userId });
  }

  onSignOut = () => {
    auth
      .signOut()
      .then(() => Actions.refresh())
      .catch(e => console.error(e.message));
  };

  render() {
    return (
      <View>
        {auth.isSignedIn() ? (
          <>
            <Text>id: {this.state.userId}</Text>
            <Button title="ログアウト" onPress={this.onSignOut} />
          </>
        ) : (
          <Text>ログインしてないよ</Text>
        )}
      </View>
    );
  }
}
