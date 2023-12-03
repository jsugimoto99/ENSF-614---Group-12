import "./App.css";
import Navbar from "./components/NavBars/Navbar";
import AdminNavbar from "./components/NavBars/AdminNavbar";
import Registration from "./components/Registration";
import AdminLogin from "./components/AdminLogin";
import UserNavbar from "./components/NavBars/UserNavbar";
import RegisteredNavbar from "./components/NavBars/RegisteredNavbar"
import Footer from "./components/Footer";
import MyBooking from "./components/ManageBooking/MyBooking";
import { ManageBooking } from "./components/ManageBooking/ManageBooking";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import './App.css';
import React, { useState, useEffect } from "react";
import BrowseFlights from "./components/BrowseFlights/BrowseFlight";
import ModPromo from "./components/Admin/ModPromo";
import ModFlights from "./components/Admin/ModFlights";
import FlightList from "./components/BrowseFlights/FlightList";
import Insurance from "./components/BrowseFlights/Insurance";
import Payment from "./components/BrowseFlights/Payment";
import ModAircrafts from "./components/Admin/ModAircrafts";
import ThankYou from "./components/BrowseFlights/ThankYou";
import ModCrew from "./components/Admin/ModCrew";
import Team from "./components/home/Team";
import StaffNavbar from "./components/NavBars/StaffNavbar";
import StaffLogin from "./components/StaffLogin";
import StaffFlightList from "./components/Staff/StaffFlightList";
import StaffPassengerList from "./components/Staff/StaffPassengerList";
import Promotions from "./components/Promotions";

function App() {
   // Function to get user role from storage or set a default value
   const getUserRoleFromStorage = () => {
    const storedRole = localStorage.getItem('userRole');
    return storedRole || '';
  };

  // Function to set user role in storage
  const setUserRoleInStorage = (role) => {
    localStorage.setItem('userRole', role);
  };

  // State for user
  const [user, setUser] = useState({
    role: getUserRoleFromStorage(),
    id: '',
    username: '',
    password: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });

  // Function to update user attributes
  const updateUserAttributes = (newAttributes) => {
    setUser((prevUser) => {
      // Merge the previous user attributes with the new attributes
      const updatedUser = { ...prevUser, ...newAttributes };

      // Update user role based on the 'role' property in newAttributes
      if (newAttributes.role) {
        setUserRoleInStorage(newAttributes.role);
      }

      return updatedUser;
    });
  };

  // Function to set user role in state
  const setUserRole = (role) => {
    setUser((prevUser) => ({
      ...prevUser,
      role: role
    }));
  };

  // Effect to update user role from storage on component mount
  useEffect(() => {
    const storedRole = getUserRoleFromStorage();
    setUserRole(storedRole);
  }, []);
  // Function to determine the appropriate Navbar based on the user's role
  const renderNavbar = () => {
    switch (user.role) {
      case 'admin':
        return <AdminNavbar updateUserAttributes={updateUserAttributes} />;
      case 'registered user':
        return <RegisteredNavbar updateUserAttributes={updateUserAttributes} />;
      case 'staff':
          return <StaffNavbar updateUserAttributes={updateUserAttributes} />;
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
        <Route path="/flightList/:paramName" element={<FlightList />} />
        <Route path="flights/insurance/:paramName" element={<Insurance />} />
        <Route path="/payment/:paramName" element={<Payment />} />
        <Route path="/thankyou/:seatId/:flightId/" element={<ThankYou />} />
        <Route path="/myBooking" element={<MyBooking />} />
        <Route path="/team" element={<Team />} />
        <Route path="/manageBooking/:ticketId/:lastName" element={<ManageBooking />} />
        <Route path="/login" element={<Login updateUserAttributes={updateUserAttributes} />} />
        <Route path="/signup" element={<SignUp />} />
        {user.role === 'user'}
        <>
          {/* <Route path="/browseFlights" element={<BrowseFlights />} /> */}
          <Route path="/registration" element={<Registration updateUserAttributes = {updateUserAttributes} user = {user} />} />
          {/* <Route path="/manageFlights" element={<ManageFlights />} /> */}
          
          
        </>
        {user.role === 'registered user'}
        <>
          <Route path="/browseFlights" element={<BrowseFlights />} />
          <Route path="/promotions" element={<Promotions />} />
          {/* <Route path="/manageFlights" element={<ManageFlights />} /> */}
        </>
        <Route path="/admin" element={<AdminLogin updateUserAttributes = {updateUserAttributes} user = {user} />} />
        {user.role === 'admin'}
        <>
          <Route path="/flights" element={<ModFlights />} />
          <Route path="/aircrafts" element={<ModAircrafts />} />
          <Route path="/promo" element={<ModPromo />} />
          <Route path="/crew" element={<ModCrew />} />
        </>
        <Route path="/staff" element={<StaffLogin updateUserAttributes = {updateUserAttributes} user = {user} />} />
        {user.role === 'staff'}
        <>
        <Route path="/staffFlightList" element={<StaffFlightList />} />
        <Route path="/staffPassengerList/:flightId" element={<StaffPassengerList />} />
        </>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
