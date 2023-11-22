import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screen/Welcome";
import Home from "./screen/Home";
import Profile from "./screen/Profile";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const Stack = createNativeStackNavigator();

const WelcomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
const LoggedScreen = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

const Screen = () => {
  const { isAuthenticated, setUserData } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchToken() {
      const storedUser = await AsyncStorage.getItem("userData");
      setUserData(JSON.parse(storedUser));
      setLoading(false);
    }
    fetchToken();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        {isAuthenticated ? (
          <LoggedScreen></LoggedScreen>
        ) : (
          <WelcomeScreen></WelcomeScreen>
        )}
      </NavigationContainer>
    </>
  );
};

export default function App() {
  return (
    <>
      <AuthProvider>
        <Screen></Screen>
      </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
