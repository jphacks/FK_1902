import React from "react";
import { Button, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
import COLORS from "app/src/config/color";

const { height, width } = Dimensions.get("window");

export default ({ title, onPress, color, backgroundColor, disabled }) => (
  <View style={styles.wrapper}>
    <AwesomeButtonCartman
      backgroundColor={colors.accent}
      textLineHeight={0}
      textColor={COLORS.white}
      textFontFamily="mplus-1p-b"
      height={height}
      width={width}
      onPress={onPress}
    >
      {text}
    </AwesomeButtonCartman>
  </View>
);

export default props => {
  const { title, onPress, color, backgroundColor, disabled } = props;

  const styles = StyleSheet.create({
    button: {
      width: width * 0.8,
      height: 32,
      backgroundColor: "#5A6BAA"
    },
    buttonText: {
  
    }
  });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    <Button
      style={styles.button}
      title={title}
      onPress={onPress}
      color={color}
      disabled={disabled}
    />
  );
};


