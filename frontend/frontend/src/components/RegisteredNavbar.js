import React from "react";
import { Link , useNavigate} from "react-router-dom";
import logo from "./images/logo.png";

const RegisteredNavbar = ({ updateUserAttributes}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const userAttributes = {
      role: 'default',
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
    }

    console.log(userAttributes);
    updateUserAttributes(userAttributes);
    console.log("Logout successful!");
    navigate("/");
          return;
  };

  return (
    <>
      <header className="text-gray-600 body-font dark:bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{
                  maxWidth: "200px",
                  maxHeight: "30px",
                  width: "auto",
                  height: "auto",
                }}
              />
            </Link>
            <Link to="/">
              <span className="ml-3 text-xl text-gray-50">Cloud 9 Airlines</span>
            </Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-gray-50">
            <Link to="/browseFlights">
              <a className="mr-5 hover:text-green-900">Book a Flight</a>
            </Link>
            <Link to="/myFlights">
              <a className="mr-5 hover:text-green-900">My Flights</a>
            </Link>
            <Link to="/showPromotions">
              <a className="mr-5 hover:text-green-900">Promotions</a>
            </Link>
          </nav>
          <Link to="/">
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={handleClick}
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default RegisteredNavbar;
