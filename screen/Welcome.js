import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import { validateEmail, validateName } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

export default function Welcome() {
  const { loginUser } = useContext(AuthContext);

  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const isFirstNameValid = validateName(firstname);
  const isLastNameValid = validateName(lastName);
  const isEmailValid = validateEmail(email);
  console.log(firstname);
  const pagerRef = useRef(PagerView);

  const navigation = useNavigation();
  const onNavigate = () => {
    loginUser({ firstName: firstname, lastName, email });
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image
          style={styles.image}
          source={require("../image/littleLemonLogo.png")}
        />
      </View>
      <PagerView
        initialPage={0}
        style={styles.PagerView}
        ref={pagerRef}
        scrollEnabled={false}
      >
        <View style={styles.formcontainer} key="1">
          <Text style={styles.formtext}>Let us get to know you</Text>

          <View>
            <Text style={styles.label}>First Name:</Text>
            <TextInput
              style={styles.input}
              value={firstname}
              onChangeText={(value) => setFirstName(value)}
            ></TextInput>
          </View>

          <View>
            <View style={styles.radioContainer}>
              <Text
                style={[styles.radio, { backgroundColor: "#F4CE14" }]}
              ></Text>
              <Text style={styles.radio}></Text>
              <Text style={styles.radio}></Text>
            </View>
            <Pressable
              onPress={() => pagerRef.current.setPage(1)}
              style={[
                styles.btn,
                !isFirstNameValid && {
                  backgroundColor: "#929956",
                  borderRadius: 5,
                },
              ]}
              disabled={!isFirstNameValid}
            >
              <Text style={styles.btntext}>Next</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.formcontainer} key="2">
          <Text style={styles.formtext}>Let us get to know you</Text>

          <View>
            <Text style={styles.label}>Last Name:</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={(value) => setLastName(value)}
            ></TextInput>
          </View>

          <View>
            <View style={styles.radioContainer}>
              <Text style={styles.radio}></Text>
              <Text
                style={[styles.radio, { backgroundColor: "#F4CE14" }]}
              ></Text>
              <Text style={styles.radio}></Text>
            </View>
            <View style={styles.btncontainer}>
              <Pressable
                onPress={() => pagerRef.current.setPage(0)}
                style={styles.secondbtn}
              >
                <Text style={styles.btntext}>Prev</Text>
              </Pressable>
              <Pressable
                onPress={() => pagerRef.current.setPage(2)}
                style={[
                  styles.secondbtn,
                  !isLastNameValid && { backgroundColor: "#929956" },
                ]}
                disabled={!isLastNameValid}
              >
                <Text style={styles.btntext}>Next</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.formcontainer} key="3">
          <Text style={styles.formtext}>Let us get to know you</Text>

          <View>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}
            ></TextInput>
          </View>

          <View>
            <View style={styles.radioContainer}>
              <Text style={styles.radio}></Text>
              <Text style={styles.radio}></Text>
              <Text
                style={[styles.radio, { backgroundColor: "#F4CE14" }]}
              ></Text>
            </View>
            <View style={styles.btncontainer}>
              <Pressable
                onPress={() => pagerRef.current.setPage(1)}
                style={styles.secondbtn}
              >
                <Text style={styles.btntext}>Prev</Text>
              </Pressable>
              <Pressable
                onPress={() => onNavigate({ firstname, lastName, email })}
                disabled={!isEmailValid}
                style={[
                  styles.secondbtn,
                  !isEmailValid && { backgroundColor: "#929956" },
                ]}
              >
                <Text style={styles.btntext}>Complete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  navbar: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    overflow: "hidden",
    backgroundColor: "",
  },
  image: {
    height: 50,
    width: 180,
  },
  PagerView: {
    width: "100%",
    height: "90%",
  },
  formcontainer: {
    height: "93%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 70,
    marginHorizontal: 5,
    overflow: "hidden",
  },
  formtext: {
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
  btncontainer: {
    flexDirection: "row",
    gap: 10,
  },
  btn: {
    backgroundColor: "#F4CE14",
    width: 350,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },

  secondbtn: {
    backgroundColor: "#F4CE14",
    width: 150,
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
