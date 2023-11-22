import { Children, createContext, useState } from "react";

export const AuthContext = createContext({
  userInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    emailNotification: [],
    image: "",
  },
  isAuthenticated: false,
  setUser: () => {},
  loginUser: ({ firstName, lastName, email }) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    emailNotification: [],
    image: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = ({ firstName, lastName, email }) => {
    setUser((prevStae) => {
      setIsAuthenticated(true);
      return {
        ...prevStae,
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
    });
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      emailNotification: [],
      image: "",
    });
  };

  const value = {
    loginUser: loginUser,
    isAuthenticated: isAuthenticated,
    userInfo: user,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
