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

function App() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    role: '',
    // ... other attributes
  });

  const updateUserAttributes = (newAttributes) => {
    setUser((prevUser) => {
      // Merge the previous user attributes with the new attributes
      return { ...prevUser, ...newAttributes };
    });
  };
  
  const [userRole, setUserRole] = useState('');

  const updateUserRole = (newUserRole) => {
    setUserRole(newUserRole);
  };
  // Function to determine the appropriate Navbar based on the user's role
  const renderNavbar = () => {
    switch (userRole) {
      case 'admin':
        return <AdminNavbar setUserRole={setUserRole} />;
      case 'registered user':
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
        <Route path="/manageFlights" element={<ManageFlights />} />
        <Route
          path="/login"
          element={<Login updateUserRole={updateUserRole} />}
        />
        <Route path="/signup" element={<SignUp />} />
        {userRole === 'user'}
        <>
          <Route path="/browseFlights" element={<BrowseFlights />} />
          <Route path="/registration" element={<Registration updateUserRole={updateUserRole} />} />
          <Route path="/myFlights" element={<BookedFlights />} />
        </>
        {userRole === 'registered user'}
        <>
          <Route path="/browseFlights" element={<BrowseFlights />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/myFlights" element={<BookedFlights />} />
        </>


        <Route path="/admin" element={<AdminLogin updateUserRole={updateUserRole} />} />
        {userRole === 'admin'}
        <>
          <Route path="/flights" element={<ModFlights />} />
          <Route path="/showPromotions" element={<Promotions />} />
          <Route path="/myFlights" element={<BookedFlights />} />
        </>
        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
