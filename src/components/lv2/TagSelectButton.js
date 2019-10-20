import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions
} from "react-native";

import COLOR from "app/src/config/color.json";

import Icon from "app/src/components/lv1/Icon";
import Tag from "app/src/components/lv2/Tag";

export default ({ toggleModal, selectedTags, deleteTag, style, isModal }) => {
  const bgColor = isModal ? COLOR.white : COLOR.whiteAccent;

  const styles = StyleSheet.create({
    wrapper: {
      width: "90%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: bgColor,
      borderRadius: 25,
      minHeight: height * 0.04,
      paddingTop: height * 0.003,
      paddingBottom: height * 0.003,
      paddingLeft: width * 0.02
    },
    iconWrapper: {
      width: "10%"
    },
    tags: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap"
    },
    placeholder: {
      color: COLOR.black,
      fontSize: 14
    }
  });

  return (
    <TouchableOpacity
      onPress={toggleModal}
      activeOpacity={0.9}
      style={{ ...styles.wrapper, ...style }}>
      <View style={styles.tags}>
        {selectedTags ? (
          selectedTags.map((tag, index) => (
            <Tag key={index} value={tag} deleteTag={() => deleteTag(tag)} />
          ))
        ) : (
          <Text style={styles.placeholder}>ジャンルを指定する</Text>
        )}
      </View>
      <View style={styles.iconWrapper}>
        <Icon
          name="menu-down-outline"
          size={14}
          color={COLOR.accent}
          size={height * 0.04}
        />
      </View>
    </TouchableOpacity>
  );
};

const { width, height } = Dimensions.get("window");
