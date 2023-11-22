import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { TextInput } from "react-native";
import YellowBtn from "../ui/YellowBtn";
import PagerView from "react-native-pager-view";

export default function Form1() {
  const pagerRef = useRef(PagerView);
  const onPress = () => {
    pagerRef.current.setPage(2);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let us get to know you</Text>

      <View>
        <Text style={styles.label}>First Name:</Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View>
        <View style={styles.radioContainer}>
          <Text style={styles.radio}></Text>
          <Text style={styles.radio}></Text>
          <Text style={styles.radio}></Text>
        </View>
        <Pressable onPress={onPress} style={styles.btn}>
          <Text style={styles.btntext}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "93%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 70,
    marginHorizontal: 5,
    overflow: "hidden",
  },
  text: {
    color: "#495E57",
    fontWeight: "900",
    fontSize: 30,
  },
  label: {
    color: "#495E57",
    fontSize: 23,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 9,
  },
  input: {
    backgroundColor: "#cadbd1",
    width: 350,
    height: 40,
    borderRadius: 5,
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: "400",
    paddingVertical: 5,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  radio: {
    backgroundColor: "#6c7c76",
    width: 17,
    height: 17,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#F4CE14",
    width: 350,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  btntext: {
    fontSize: 20,
    fontWeight: "500",
    color: "#2f463d",
  },
});
