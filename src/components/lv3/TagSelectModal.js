import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";

import COLOR from "app/src/config/color.json";

export default props => {
  return (
    <View>
      <Modal isVisible={false}>
        <View style={{ flex: 1, backgroundColor: COLOR.white }}>
          <Text>a</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});
