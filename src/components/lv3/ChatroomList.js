import React from "react";
import {
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet
} from "react-native";

import COLOR from "app/src/config/color.json";

import ChatroomCard from "app/src/components/lv2/ChatroomCard";

export default props => {
  const { chatrooms, refreshing, onRefresh, onEnterChatroom, loading } = props;

  return (
    <>
      <View style={styles.filterBg}>
        <Text
          style={{
            backgroundColor: COLOR.accent,
            width: "80%",
            height: 20
          }}>
          ジャンル
        </Text>
      </View>
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
  },
  filterBg: {
    height: "15%",
    backgroundColor: COLOR.whiteMain,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
