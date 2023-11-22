import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/ui/Navbar";

export default function Home() {
  const { userInfo } = useContext(AuthContext);
  console.log(userInfo);
  return (
    <View style={styles.container}>
      <Navbar></Navbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});
