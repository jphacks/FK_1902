import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
  StyleSheet,
  Dimensions
} from "react-native";

import COLOR from "app/src/config/color.json";

export default props => {
  const { chatroom, onPress } = props;

  return (
    <TouchableOpacity style={styles.cardBg} onPress={onPress}>
      <View style={styles.subWrapper}>
        <Image
          style={styles.avatar}
          source={{ uri: chatroom.host.avatar || "a" }}
        />
        <Text style={styles.subText}>{chatroom.host.name}</Text>
      </View>
      <View style={styles.mainWrapper}>
        <Text style={styles.mainText}>{chatroom.detail.title}</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoText}>aaa</Text>
        <Text style={styles.infoText}>bbb</Text>
        <Text style={styles.infoText}>ccc</Text>
      </View>
    </TouchableOpacity>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  cardBg: {
    backgroundColor: COLOR.white,
    height: height * 0.12,
    margin: width * 0.03,
    padding: width * 0.04,
    borderWidth: 0.5,
    borderColor: COLOR.gray,
    borderRadius: 15,
    shadowColor: COLOR.gray,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.5
  },
  subWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    height: height * 0.03,
    width: height * 0.03,
    borderRadius: 100,
    backgroundColor: COLOR.gray,
    marginRight: width * 0.02
  },
  subText: {
    fontSize: 12,
    color: COLOR.gray
  },
  mainWrapper: {
    marginTop: height * 0.005,
    marginLeft: width * 0.07
  },
  mainText: {
    fontSize: 16
  },
  infoWrapper: {
    flexDirection: "row",
    marginLeft: width * 0.07
  },
  infoText: {
    marginRight: width * 0.02,
    color: COLOR.gray,
    fontSize: 12
  }
});
