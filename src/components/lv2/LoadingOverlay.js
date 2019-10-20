import React from "react";

import COLOR from "app/src/config/color";

import { ActivityIndicator } from "react-native";
import Modal from "react-native-modal";

export default ({ loading }) => (
  <Modal isVisible={loading}>
    <ActivityIndicator size="large" color={COLOR.main} />
  </Modal>
);
