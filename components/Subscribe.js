import * as React from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import Logo from "../image/littleLemonLogo.png";
import { validateEmail } from "../utils";

const Subscribe = ({ navigation }) => {
  // Add welcome screen code here.
  const [disabled, setDisabled] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const inputRef = React.useRef();
  const [isValidEmail, setIsValidEmail] = React.useState("true");

  const changeEmail = (value) => {
    setEmail(value);
    setIsValidEmail(true);
    if (value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const onSubscribe = () => {
    const emailValidation = validateEmail(email);
    if (emailValidation) {
      setIsValidEmail(true);
      Alert.alert("Thanks for subscribing, stay tuned!");
      setEmail("");
      setDisabled(true);
      inputRef.current.blur();
    } else {
      setIsValidEmail(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Text style={styles.text}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
      </View>

      <View>
        <TextInput
          style={[
            styles.input,
            isValidEmail ? { marginBottom: 20 } : { borderColor: "red" },
          ]}
          value={email}
          onChangeText={changeEmail}
          ref={inputRef}
          placeholder="Type your email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="white"
        ></TextInput>
        {!isValidEmail && (
          <Text style={styles.validEmail}>
            Please Enter a valid email address
          </Text>
        )}
        <Pressable
          style={[styles.btn, disabled ? { opacity: 0.7 } : { opacity: 1 }]}
          android_ripple={{ color: "white" }}
          onPress={onSubscribe}
          disabled={disabled}
        >
          <Text style={styles.newsletter}>Subscribe</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
    paddingBottom: 80,
    backgroundColor: "#495e57",
  },
  imageContainer: {
    width: 130,
    height: 130,
  },
  image: {
    width: 130,
    height: 130,
    objectFit: "contain",
  },
  secondContainer: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 50,
    textAlign: "center",
    paddingVertical: 30,
    color: "white",
  },
  btnContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
  },
  input: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 19,
    color: "white",

    fontWeight: "500",
  },
  validEmail: {
    marginBottom: 20,
    color: "red",
  },
  btn: {
    backgroundColor: "#f8e002",
    color: "white",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
  },
  newsletter: {
    color: "black",
    fontWeight: "800",
    fontSize: 17,
    width: 320,
    alignContent: "center",
    textAlign: "center",
  },
});
