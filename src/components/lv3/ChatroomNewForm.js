import React from "react";
import {
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  View,
  Text,
  Dimensions,
  StyleSheet
} from "react-native";

import COLOR from "app/src/config/color.json";

import Button from "app/src/components/lv1/Button";
import Textarea from "app/src/components/lv1/Textarea";
import InputWithIcon from "app/src/components/lv2/InputWithIcon";
import TagSelectButton from "app/src/components/lv2/TagSelectButton";

export default props => {
  const {
    chatroom,
    onChangeText,
    onCreateChatroom,
    onClearForm,
    onDeleteTag,
    toggleTagModal
  } = props;

  return (
    <View style={styles.wrapper}>
      <InputWithIcon
        value={chatroom.title}
        onChangeText={text => onChangeText("title", text)}
        placeholder="ルームのタイトルを入力（20文字以内）"
        maxLength={20}
        style={{ marginBottom: 20 }}
      />
      <TagSelectButton
        toggleModal={toggleTagModal}
        {...props}
        selectedTags={chatroom.tags}
        style={{ marginBottom: height * 0.03 }}
        deleteTag={onDeleteTag}
      />
      <Textarea
        value={chatroom.content}
        onChangeText={text => onChangeText("content", text)}
        height={height * 0.3}
        width="88%"
        placeholder="説明を追加"
        style={{ marginBottom: height * 0.03 }}
      />
      <Button
        title="かまってもらう"
        style={{ marginBottom: height * 0.03 }}
        onPress={onCreateChatroom}
      />
      <Button
        title="入力情報をクリア"
        bgColor={COLOR.black}
        onPress={onClearForm}
      />
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    alignItems: "center",
    backgroundColor: COLOR.whiteMain,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: height * 0.08
  }
});
