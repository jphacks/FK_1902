import React from "react";
import {
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  View,
  Dimensions,
  StyleSheet
} from "react-native";

import COLOR from "app/src/config/color.json";

import ChatroomCard from "app/src/components/lv2/ChatroomCard";

export default props => {
  const { chatrooms, refreshing, onRefresh, onEnterChatroom, loading } = props;

  return (
    <>
      <ScrollView
        style={styles.listBg}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <View
            style={{
              margin: height * 0.2
            }}>
            <ActivityIndicator size="large" color={COLOR.accent} />
          </View>
        ) : (
          chatrooms.map((chatroom, index) => (
            <ChatroomCard
              chatroom={chatroom}
              key={index}
              onPress={() => onEnterChatroom(chatroom.docId)}
            />
          ))
        )}
      </ScrollView>
    </>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  listBg: {
    height: "85%",
    backgroundColor: COLOR.whiteMain
  }
});
