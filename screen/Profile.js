import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/ui/Navbar";
import Checkbox from "expo-checkbox";
import YellowBtn from "../components/ui/Btn";
import Btn from "../components/ui/Btn";
import SmallBtn from "../components/ui/SmallBtn";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { validateEmail, validateName } from "../utils";

export default function Profile() {
  const { userInfo, setUserData, logout } = useContext(AuthContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUser((prev) => {
        return { ...prev, image: result.assets[0].uri };
      });
    }
    console.log(user);
  };
  const [user, setUser] = useState({
    firstName: userInfo.firstName ? userInfo.firstName : "",
    lastName: userInfo.lastName ? userInfo.lastName : "",
    email: userInfo.email ? userInfo.email : "",
    phone: userInfo.phone ? userInfo.phone : "",
    emailNotification: userInfo.emailNotification
      ? userInfo.emailNotification
      : {
          orderStatus: false,
          passwordChandes: false,
          specialOfers: false,
          newsletter: false,
        },
    image: userInfo.image ? userInfo.image : "",
  });
  const navigation = useNavigation();
  const [isValid, setisValid] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
  });

  const chandeHandler = () => {
    setisValid((prev) => {
      const newState = {
        firstName: user.firstName.length > 0,
        lastName: user.lastName.length > 0,
        email: !!validateEmail(user.email),
        phone: userInfo.phone || user.phone ? user.phone.length === 10 : true,
      };
      if (
        newState.firstName &&
        newState.lastName &&
        newState.email &&
        newState.phone
      ) {
        setUserData(user);
        Alert.alert("Success", "Your changes has been saved", [
          { text: "OK", onPress: () => navigation.navigate("Home") },
        ]);
      }

      return newState;
    });
  };

  const logoutUser = () => {
    logout();
    setUser(userInfo);
  };

  const discardChanges = () => {
    setUser(userInfo);
  };

  function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  }
  const isAnytingChanged = !areObjectsEqual(user, userInfo);

  return (
    <ScrollView style={styles.container}>
      <Navbar navigateProp="Home" isBackVisible={true}></Navbar>
      <View style={styles.profileCard}>
        <Text style={styles.notificationTitle}>Personal Information</Text>
        <View>
          <Text style={styles.label}>Avatar</Text>
          <View style={styles.avatarContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={
                  user.image
                    ? { uri: user.image }
                    : require("../image/profile.webp")
                }
              ></Image>
            </View>
            <SmallBtn
              text="Change"
              width="25%"
              bgColor="#495E57"
              textColor="white"
              onPress={pickImage}
            ></SmallBtn>
            <SmallBtn
              text="Remove"
              width="25%"
              bgColor="#da6565"
              bordercolor="#da6565"
            ></SmallBtn>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name:</Text>
            <TextInput
              style={[
                styles.input,
                !isValid.firstName && { borderColor: "red" },
              ]}
              value={user.firstName}
              onChangeText={(value) =>
                setUser((prev) => {
                  return { ...prev, firstName: value };
                })
              }
            ></TextInput>
            {!isValid.firstName && (
              <Text style={styles.error}>Please Enter a first name</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name:</Text>
            <TextInput
              style={[
                styles.input,
                !isValid.lastName && { borderColor: "red" },
              ]}
              value={user.lastName}
              onChangeText={(value) =>
                setUser((prev) => {
                  return { ...prev, lastName: value };
                })
              }
            ></TextInput>
            {!isValid.lastName && (
              <Text style={styles.error}>Please Enter a last name</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}> Email:</Text>
            <TextInput
              style={[styles.input, !isValid.email && { borderColor: "red" }]}
              value={user.email}
              onChangeText={(value) =>
                setUser((prev) => {
                  return { ...prev, email: value };
                })
              }
            ></TextInput>
            {!isValid.email && (
              <Text style={styles.error}>
                Please Enter a valid email address
              </Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}> Phone number:</Text>
            <TextInput
              style={[styles.input, !isValid.phone && { borderColor: "red" }]}
              value={user.phone}
              onChangeText={(value) =>
                setUser((prev) => {
                  return { ...prev, phone: value };
                })
              }
              keyboardType="number-pad"
            ></TextInput>
            {!isValid.phone && (
              <Text style={styles.error}>Phone number should be 10 digits</Text>
            )}
          </View>
          <View style={styles.notification}>
            <Text style={styles.notificationTitle}>Email Notifications</Text>
            <View style={styles.checkContianer}>
              <Checkbox
                style={styles.check}
                disabled={false}
                value={user.emailNotification.orderStatus}
                onValueChange={(newValue) => {
                  console.log(newValue);
                  setUser((prev) => {
                    return {
                      ...prev,
                      emailNotification: {
                        ...prev.emailNotification,
                        orderStatus: newValue,
                      },
                    };
                  });
                }}
                color={user.emailNotification.orderStatus && "#495E57"}
              />
              <Text style={styles.checkText}>Order status</Text>
            </View>
            <View style={styles.checkContianer}>
              <Checkbox
                style={styles.check}
                disabled={false}
                value={user.emailNotification.passwordChandes}
                onValueChange={(newValue) => {
                  console.log(newValue);
                  setUser((prev) => {
                    return {
                      ...prev,
                      emailNotification: {
                        ...prev.emailNotification,
                        passwordChandes: newValue,
                      },
                    };
                  });
                }}
                color={user.emailNotification.passwordChandes && "#495E57"}
              />
              <Text style={styles.checkText}>Password Changes</Text>
            </View>
            <View style={styles.checkContianer}>
              <Checkbox
                style={styles.check}
                disabled={false}
                value={user.emailNotification.specialOfers}
                onValueChange={(newValue) => {
                  console.log(newValue);
                  setUser((prev) => {
                    return {
                      ...prev,
                      emailNotification: {
                        ...prev.emailNotification,
                        specialOfers: newValue,
                      },
                    };
                  });
                }}
                color={user.emailNotification.specialOfers && "#495E57"}
              />
              <Text style={styles.checkText}>Special Offers</Text>
            </View>
            <View style={styles.checkContianer}>
              <Checkbox
                style={styles.check}
                disabled={false}
                value={user.emailNotification.newsletter}
                onValueChange={(newValue) => {
                  console.log(newValue);
                  setUser((prev) => {
                    return {
                      ...prev,
                      emailNotification: {
                        ...prev.emailNotification,
                        newsletter: newValue,
                      },
                    };
                  });
                }}
                color={user.emailNotification.newsletter && "#495E57"}
              />
              <Text style={styles.checkText}>Newsletter</Text>
            </View>
          </View>
          <Btn text="Log Out" bordercolor="#c49065" onPress={logoutUser}></Btn>
          <View style={styles.btnContainer}>
            <SmallBtn
              text="Discard Changes"
              bgColor="#ffffff"
              textColor={isAnytingChanged ? "#495E57" : "#cfc7c7"}
              width="45%"
              onPress={discardChanges}
            ></SmallBtn>
            <SmallBtn
              text="Save Changes"
              bgColor={isAnytingChanged ? "#495E57" : "#bed3cc"}
              width="45%"
              textColor="white"
              onPress={chandeHandler}
              isDisabled={!isAnytingChanged}
            ></SmallBtn>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
  },
  profileCard: {
    marginHorizontal: 20,
    marginVertical: 20,
    borderColor: "#a2b1ab",
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 15,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    overflow: "hidden",
  },
  image: {
    width: 80,
    height: 80,
  },

  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: "#636665",
    fontSize: 17,
    fontWeight: "500",

    marginBottom: 5,
  },
  input: {
    backgroundColor: "#ebebeb",
    width: "100%",
    height: 40,
    borderRadius: 5,
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: "400",
    paddingVertical: 5,
    borderColor: "#b2bdb9",
    borderWidth: 1,
  },
  notification: {
    marginTop: 10,
  },
  notificationTitle: {
    fontSize: 23,
    fontWeight: "700",
    color: "#2f463d",
    marginBottom: 10,
  },
  checkContianer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  check: {
    width: 20,
  },
  checkText: {
    fontSize: 19,
    color: "#38443e",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#F4CE14",
    width: "100%",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  btntext: {
    fontSize: 20,
    fontWeight: "500",
    color: "#2f463d",
  },
  error: {
    color: "red",
    fontSize: 14,
  },
});
