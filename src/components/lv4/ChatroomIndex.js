import React from "react";
import { View, Text, Button } from "react-native";

export default props => {
  const { toRegister, loading, chatrooms, onEnterChatroom } = props;

  return (
    <View>
      <Button title="新規登録" onPress={toRegister} />
      {loading ? (
        <Text>loading</Text>
      ) : (
        chatrooms.map((chatroom, index) => (
          <Button
            key={index}
            title={chatroom.detail.title}
            onPress={() => onEnterChatroom(chatroom.docId)}
          />
        ))
      )}
    </View>
  );
};
