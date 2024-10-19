import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/userContext";
import { useNavigate } from "react-router-dom";


export const useAuthentication = () => {
  const { user, setUser } = useAuth(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://khaata-bfnauo4x7-muhammad-sumairs-projects.vercel.app/api/auth/login", {
        username,
        password,
      });
      alert(response.data.message || "success");
      
    
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/')
      
      setUser((prev) => ({
        ...prev,
        user: response.data.user, 
        token: response.data.token,
      }));
    } catch (error) {
      alert(error.message || "something went wrong");
    
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser({
        user: null,
        token: null,
  
    });
  }

  return {
    handleLogout,
    handleLogin,
    username,
    password,
    setUsername,
    setPassword,
  };
};

export const useRegisterUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          username,
          password,
        }
      );
      alert(response.data.message || "Signup successful");
      navigate('/login')
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return {
    handleSignup,
    username,
    password,
    setUsername,
    setPassword,
  };
};
