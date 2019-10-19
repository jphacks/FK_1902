import React from "react";
import { View, Text, Button } from "react-native";

import ChatroomList from "app/src/components/lv3/ChatroomList";

export default props => {
  const { toRegister, loading } = props;

  return (
    <View>{loading ? <Text>loading</Text> : <ChatroomList {...props} />}</View>
  );
};
