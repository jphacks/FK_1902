import React from "react";

import { View, Text, Button, Image } from "react-native";
import InputWithIcon from "app/src/components/lv2/InputWithIcon";

export default props => {
  const { chatroom, onChangeDetail, onCreateChatroom } = props;

  return (
    <View>
      <InputWithIcon
        value={chatroom.title}
        onChangeText={text => onChangeDetail("title", text)}
      />
      <InputWithIcon
        value={chatroom.content}
        onChangeText={text => onChangeDetail("content", text)}
      />
      <Button title="ルーム作成" onPress={onCreateChatroom} />
    </View>
  );
};
