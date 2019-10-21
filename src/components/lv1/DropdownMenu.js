import React from "react";
import DropdownMenu from "react-native-dropdown-menu";
import { View, StyleSheet } from "react-native";

import COLOR from "app/src/config/color";

export default ({ options }) => {
  return <DropdownMenu data={options} />;
};
