import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import logo from "./images/logo.png";

function SignUp({}){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    username: "",
    password: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { fName, lName, email, username, password, street, city, state, zip } = formData;

    const User = {
      fName: fName,
      lName: lName,
      email: email,
      username: username,
      password: password,
      street: street,
      city: city,
      state: state,
      zip: zip,
    };

    console.log(User);

    try {
      const response = await fetch("http://localhost:8081/User/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(User),
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("Login status:", userData);

        if (userData.status === "success") {
          // Assuming navigate is defined somewhere in your code
          navigate("/login");
          return;
        
        }
      } else {
        console.log("Sign up failed");
        // Handle login failure, show error message, etc.
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const { fName, lName, email, username, password, street, city, state, zip } = formData;

  return (
    <>
      <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-4 py-10 mx-auto sm:px-6 md:px-8 lg:px-10 lg:py-auto xl:px-12">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl md:mt-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up to create your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <label
                        htmlFor="fName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your first name"
                        required
                        value={fName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <label
                        htmlFor="lName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lName"
                        id="lName"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your last name"
                        required
                        value={lName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required="true"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required="true"
                      value={username}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required="true"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-wrap -mx-4 mb-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        htmlFor="street"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Street
                      </label>
                      <input
                        type="text"
                        name="street"
                        id="street"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your street address"
                        required
                        value={street}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        htmlFor="city"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your city"
                        required
                        value={city}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        htmlFor="state"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your state"
                        required
                        value={state}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        htmlFor="zip"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zip"
                        id="zip"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your ZIP code"
                        required
                        value={zip}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={handleClick}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default SignUp;
