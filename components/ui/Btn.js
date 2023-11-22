import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Btn({
  text,
  onPress,
  bgColor,
  textColor,
  bordercolor,
  width,
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
    fontSize: 20,
    fontWeight: "500",
    color: "#2f463d",
  },
});
