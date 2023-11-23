import { Children, createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  userInfo: {
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
  },
  isAuthenticated: false,
  setUserData: () => {},
  loginUser: ({ firstName, lastName, email }) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = async ({ firstName, lastName, email }) => {
    console.log("Logging in");
    setUser((prevStae) => {
      setIsAuthenticated(true);
      console.log("It is geting tru in login");
      const updatedUser = {
        ...prevStae,
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      AsyncStorage.setItem("userData", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };
  const logout = () => {
    setIsAuthenticated(false);
    AsyncStorage.removeItem("userData");
    setUser({
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
  };
  const setUserData = (data) => {
    AsyncStorage.setItem("userData", JSON.stringify(data));
    setUser(data);
    setIsAuthenticated(true);
  };

  const value = {
    loginUser: loginUser,
    isAuthenticated: isAuthenticated,
    userInfo: user,
    logout: logout,
    setUserData: setUserData,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
