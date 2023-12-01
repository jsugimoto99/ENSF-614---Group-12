import "./App.css";
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import Registration from "./components/Registration";
import AdminLogin from "./components/AdminLogin";
import UserNavbar from "./components/UserNavbar";
import RegisteredNavbar from "./components/RegisteredNavbar"
import Footer from "./components/Footer";
import ManageFlights from "./components/ManageFlights";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import './App.css';
import React, { useState } from "react";
import BrowseFlights from "./components/BrowseFlights";
import Promotions from "./components/Promotions";
import BookedFlights from "./components/BookedFlights";
import ModFlights from "./components/ModFlights";
import FlightList from "./components/BrowseFlights/FlightList";
import Insurance from "./components/BrowseFlights/Insurance";
import Payment from "./components/BrowseFlights/Payment";
import ModAircrafts from "./components/ModAircrafts";
import ThankYou from "./components/payments/ThankYou";

function App() {
  const [user, setUser] = useState({
    role: '',
    id: '',
    username: '',
    password: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expDate:'',
    cvv: ''
  });

  const updateUserAttributes = (newAttributes) => {
    setUser((prevUser) => {
      // Merge the previous user attributes with the new attributes
      const updatedUser = { ...prevUser, ...newAttributes };
  
      // Update user role based on the 'role' property in newAttributes
      if (newAttributes.role) {
        setUserRole(newAttributes.role);
      }
  
      return updatedUser;
    });
  };
  
  const [userRole, setUserRole] = useState('user');
  const updateUserRole = (newUserRole) => {
    setUserRole(newUserRole);
  };
  // Function to determine the appropriate Navbar based on the user's role
  const renderNavbar = () => {
    switch (userRole) {
      case 'admin':
        return <AdminNavbar updateUserAttributes={updateUserAttributes} />;
      case 'registered user':
        return <RegisteredNavbar updateUserAttributes={updateUserAttributes} />;
      case 'user':
        return <UserNavbar updateUserAttributes={updateUserAttributes} />;
      default:
        return <Navbar />;
    }
  }; return (
    <div>
      {renderNavbar()} {/* Conditional rendering based on user's role */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browseFlights" element={<BrowseFlights />} />
        <Route path="/manageFlights" element={<ManageFlights />} />
        <Route path="/login" element={<Login updateUserAttributes={updateUserAttributes} user = {user} />} />
        <Route path="/signup" element={<SignUp />} />
        {userRole === 'user'}
        <>
          <Route path="/browseFlights" element={<BrowseFlights />} />
          <Route path="/flightList/:paramName" element={<FlightList />} />
          <Route path="flights/insurance/:paramName" element={<Insurance />} />
          <Route path="/registration" element={<Registration updateUserAttributes = {updateUserAttributes} user = {user} />} />
          <Route path="/myFlights" element={<BookedFlights />} />
          <Route path="/payment/:paramName" element={<Payment />} />
          <Route path="/thankyou" element={<ThankYou />} />
          
        </>
        {userRole === 'registered user'}
        <>
          <Route path="/browseFlights" element={<BrowseFlights />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/myFlights" element={<BookedFlights />} />
        </>
        <Route path="/admin" element={<AdminLogin updateUserAttributes = {updateUserAttributes} user = {user} />} />
        {userRole === 'admin'}
        <>
          <Route path="/flights" element={<ModFlights />} />
          <Route path="/aircrafts" element={<ModAircrafts />} />
          <Route path="/showPromotions" element={<Promotions />} />
          <Route path="/myFlights" element={<BookedFlights />} />
        </>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
