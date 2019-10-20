import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Modal from "react-native-modal";

import COLOR from "app/src/config/color.json";
import TagSelectButton from "app/src/components/lv2/TagSelectButton";
import Tag from "app/src/components/lv2/Tag";
import TAG from "app/src/config/tags.json";

export default props => {
  const { addTag } = props;
  const tags = Object.keys(TAG);

  return (
    <Modal isVisible={false} style={styles.bottomModal}>
      <View style={styles.modalContent}>
        <TagSelectButton
          {...props}
          isModal
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: height * 0.03
          }}
        />
        <View style={styles.tagList}>
          {tags.map(tag => (
            <Tag onPress={() => addTag(TAG[tag])} value={tag} />
          ))}
        </View>
      </View>
    </Modal>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  modalContent: {
    backgroundColor: COLOR.whiteAccent,
    height: height * 0.87,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: height * 0.03,
    paddingRight: width * 0.05,
    paddingLeft: width * 0.05
  },
  tagList: { flexDirection: "row", flexWrap: "wrap" }
});
