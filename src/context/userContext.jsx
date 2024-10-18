import { createContext, useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (userData) {
        setUser((prev) => ({
         ...prev,
          user: JSON.parse(userData)
        }));
    }
    if (token) {
      setUser((prev) => ({
        ...prev,
        token: token,
      }));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
