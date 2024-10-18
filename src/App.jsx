import { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddCustomer from './components/AddCustomer';
import AddTransaction from './components/Transaction';
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from './context/userContext'; 
import AuthRoutes from './config/authRoutes';
import Customer from './pages/CustomerSingle';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<AuthRoutes/>}>
          <Route path="/" element={<Home />} /> 
          </Route>
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/chat/:id" element={<Customer />} /> 
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
