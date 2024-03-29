import React from "react";

import { View, StyleSheet } from "react-native";
import TagSelectButton from "app/src/components/lv2/TagSelectButton";
import ChatroomList from "app/src/components/lv3/ChatroomList";
import TagSelectModal from "app/src/components/lv3/TagSelectModal";

import COLOR from "app/src/config/color.json";

export default props => {
  const {
    isVisibleTagModal,
    toggleTagModal,
    onDeleteTag,
    onAddTag,
    selectedTags
  } = props;
  return (
    <>
      <TagSelectModal
        isVisible={isVisibleTagModal}
        addTag={onAddTag}
        selectedTags={selectedTags}
        toggleModal={toggleTagModal}
        deleteTag={onDeleteTag}
      />
      <View>
        <View style={styles.filterBg}>
          <TagSelectButton
            selectedTags={selectedTags}
            deleteTag={onDeleteTag}
            toggleModal={toggleTagModal}
          />
        </View>
        <ChatroomList {...props} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  filterBg: {
    height: "15%",
    backgroundColor: COLOR.whiteMain,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
