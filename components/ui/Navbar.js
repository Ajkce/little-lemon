import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar({ navigateProp, isBackVisible }) {
  const { userInfo } = useContext(AuthContext);
  const navigation = useNavigation();
  console.log(userInfo);

  const onBack = () => {
    navigation.navigate(navigateProp);
  };
  const openProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.navbar}>
      {isBackVisible && (
        <Pressable onPress={onBack}>
          <Ionicons name="arrow-back-circle" size={40} color="#2f463d" />
        </Pressable>
      )}

      <Image
        style={styles.image}
        source={require("../../image/littleLemonLogo.png")}
      ></Image>

      <Pressable style={styles.profile} onPress={openProfile}>
        <Image
          style={styles.profileImage}
          source={
            userInfo.image
              ? { uri: userInfo.image }
              : require("../../image/profile.webp")
          }
        ></Image>
      </Pressable>
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
