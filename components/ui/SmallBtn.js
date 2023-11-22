import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SmallBtn({
  text,
  onPress,
  bgColor,
  textColor,
  bordercolor,
  width,
  isDisabled,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.btn,
        bgColor && { backgroundColor: bgColor },
        bordercolor && { borderColor: bordercolor },
        width && { width: width },
      ]}
      disabled={isDisabled}
    >
      <Text style={[styles.text, textColor && { color: textColor }]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#F4CE14",
    width: "100%",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2f463d",
  },
});
