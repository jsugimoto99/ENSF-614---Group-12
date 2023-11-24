import "./App.css";
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import Registration from "./components/Registration";
import UserNavbar from "./components/UserNavbar";
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
import BrowseFlights from "./components/BrowseFlights";

function App() {
  const [userRole, setUserRole] = useState('user');

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
      case 'user':
        return <UserNavbar setUserRole={setUserRole} />;
      default:
        return <Navbar />;
    }
  }; return (
    <div>
      {renderNavbar()} {/* Conditional rendering based on user's role */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browseFlights" element={<BrowseFlights />} />
        <Route
          path="/login"
          element={<Login updateUserRole={updateUserRole} />}
        />
        <Route path="/signup" element={<SignUp />} />
        {userRole === 'user'}
        <>
          <Route path="/browseFlights" element={<BrowseFlights />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/myFlights" element={<myFlights />} />
        </>


        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
