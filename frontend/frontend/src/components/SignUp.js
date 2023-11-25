import React, { useState } from "react";
import logo from "./images/logo.png";

export default function SignUp() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");


  const handleClick = (e) => {
    e.preventDefault();
    const registerUser = {
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

    console.log(registerUser);

    fetch("http://localhost:8081/User/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerUser),
    })
      .then((response) => {
        console.log(response.text()); // Only attempt to parse JSON if there's content
      })
      .then((data) => {
        console.log("User Registered: ", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

  };
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
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl md:mt-0 dark:bg-gray-800 dark:border-gray-700">            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
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
                    onChange={(e) => setFName(e.target.value)}
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
                    onChange={(e) => setLName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                    onChange={(e) => setStreet(e.target.value)}
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
                    onChange={(e) => setCity(e.target.value)}
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
                    onChange={(e) => setState(e.target.value)}
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
                    onChange={(e) => setZip(e.target.value)}
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


