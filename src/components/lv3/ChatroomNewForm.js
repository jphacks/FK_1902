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

import Textarea from "app/src/components/lv1/Textarea";
import InputWithIcon from "app/src/components/lv2/InputWithIcon";

export default props => {
  const { chatroom, onChangeDetail, onCreateChatroom } = props;

  return (
    <View style={styles.wrapper}>
      <InputWithIcon
        value={chatroom.title}
        onChangeText={text => onChangeDetail("title", text)}
        placeholder="ルームのタイトルを入力（20文字以内）"
        maxLength={20}
        style={{ marginBottom: 20 }}
      />
      <Textarea height={height * 0.3} width="88%" placeholder="説明を追加" />
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: COLOR.whiteMain,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: height * 0.08
  }
});
