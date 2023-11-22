import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/ui/Navbar";
import Checkbox from "expo-checkbox";
import YellowBtn from "../components/ui/Btn";
import Btn from "../components/ui/Btn";
import SmallBtn from "../components/ui/SmallBtn";

export default function Profile() {
  const {} = useContext(AuthContext);
  const [checkValue, setCheckValue] = useState();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    emailNotification: {
      orderStatus: false,
      passwordChandes: false,
      specialOfers: false,
      newsletter: false,
    },
    image: "",
  });
  console.log(user);

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
                source={require("../assets/favicon.png")}
              ></Image>
            </View>
            <SmallBtn
              text="Change"
              width="25%"
              bgColor="#495E57"
              textColor="white"
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
              style={styles.input}
              value={user.firstName}
              onChangeText={(value) =>
                setUser((prev) => {
                  return { ...prev, firstName: value };
                })
              }
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name:</Text>
            <TextInput
              style={styles.input}
              value={user.firstName}
              onChangeText={(value) =>
                setUser((prev) => {
                  return { ...prev, firstName: value };
                })
              }
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}> Email:</Text>
            <TextInput
              style={styles.input}
              value={user.firstName}
              onChangeText={(value) =>
                setUser((prev) => {
                  return { ...prev, firstName: value };
                })
              }
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}> Phone number:</Text>
            <TextInput
              style={styles.input}
              value={user.firstName}
              onChangeText={(value) =>
                setUser((prev) => {
                  return { ...prev, firstName: value };
                })
              }
            ></TextInput>
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
          <Btn text="Log Out" bordercolor="#c49065"></Btn>
          <View style={styles.btnContainer}>
            <SmallBtn
              text="Discard Changes"
              bgColor="#ffffff"
              width="45%"
            ></SmallBtn>
            <SmallBtn
              text="Save Changes"
              bgColor="#495E57"
              width="45%"
              textColor="white"
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
});
