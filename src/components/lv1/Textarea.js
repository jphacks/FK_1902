import React from "react";
import Textarea from "react-native-textarea";

import COLOR from "app/src/config/color.json";

import { View, StyleSheet } from "react-native";

export default ({
  placeholder,
  value,
  maxLength,
  keyboardType,
  onChangeText,
  width,
  height,
  style,
  ...props
}) => {
  const styles = StyleSheet.create({
    wrapper: {
      width: width,
      marginRight: "auto",
      marginLeft: "auto",
      justifyContent: "center",
      alignItems: "center"
    },
    textareaWrapper: {
      backgroundColor: COLOR.white,
      borderRadius: 10,
      height: height,
      paddingRight: "2%",
      paddingLeft: "2%"
    },
    textarea: {
      height: height * 0.95,
      textAlignVertical: "top",
      fontSize: 16
    }
  });

  return (
    <View style={{ ...styles.wrapper, ...style }}>
      <Textarea
        containerStyle={styles.textareaWrapper}
        style={styles.textarea}
        placeholder={placeholder}
        defaultValue={value}
        maxLength={maxLength}
        onChangeText={onChangeText}
        autoCapitalize="none"
        {...props}
        style={styles.input}
      />
    </View>
  );
};
