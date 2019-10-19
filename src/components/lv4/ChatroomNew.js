import React from "react";

import { View, Text, Button, Image } from "react-native";
import Input from "app/src/components/lv1/Input";

export default props => {
  const { chatroom, onChangeDetail, onCreateChatroom } = props;

  return (
    <View>
      <Text>ルームタイトル</Text>
      <Input
        value={chatroom.title}
        onChangeText={text => onChangeDetail("title", text)}
      />
      <Text>詳細</Text>
      <Input
        value={chatroom.content}
        onChangeText={text => onChangeDetail("content", text)}
      />
      <Button title="ルーム作成" onPress={onCreateChatroom} />
    </View>
  );
};
