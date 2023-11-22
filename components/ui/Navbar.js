import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Navbar({ navigateProp }) {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.navigate(navigateProp);
  };
  return (
    <View style={styles.navbar}>
      <Pressable onPress={onBack}>
        <Ionicons name="arrow-back-circle" size={40} color="#2f463d" />
      </Pressable>
      <Image
        style={styles.image}
        source={require("../../image/littleLemonLogo.png")}
      ></Image>
      <View style={styles.profile}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/favicon.png")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    overflow: "hidden",
    backgroundColor: "",
    flexDirection: "row",
    borderBottomColor: "#b6c5bf",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  image: {
    height: 50,
    width: 180,
  },
  profile: {
    height: 50,
    width: 50,
    overflow: "hidden",
    borderRadius: 50,
    borderColor: "#b9c7c1",
    borderWidth: 1,
  },
  profileImage: {
    height: 50,
    width: 50,
  },
});
