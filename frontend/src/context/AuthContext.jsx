import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGithub, logout } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const login = async () => {
    const userData = await loginWithGithub();
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/dashboard");
  };

  const logoutUser = () => {
    logout();
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout: logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
