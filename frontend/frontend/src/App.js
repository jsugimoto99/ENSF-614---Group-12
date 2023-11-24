import "./App.css";
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import Admin from "./components/Admin";
import RegisteredNavbar from "./components/RegisteredNavbar"
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import './App.css';
import AddFlight from './components/Flights';
import React, { useState } from "react";

function App() {
  const [userRole, setUserRole] = useState('');

  const updateUserRole = (newUserRole) => {
    setUserRole(newUserRole);
  };
  // Function to determine the appropriate Navbar based on the user's role
  const renderNavbar = () => {
    switch (userRole) {
      case 'admin':
        return <AdminNavbar setUserRole={setUserRole} />;
      case 'registeredUser':
        return <RegisteredNavbar setUserRole={setUserRole} />;
      default:
        return <Navbar />;
    }
  }; return (
    <div>
      {renderNavbar()} {/* Conditional rendering based on user's role */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login updateUserRole={updateUserRole} />}
        />
        <Route path="/signup" element={<SignUp />} />
        {userRole === 'user' && (
          <Route path="/addflight" element={<AddFlight />} />
        )}
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
