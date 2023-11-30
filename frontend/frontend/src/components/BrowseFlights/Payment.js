import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from ".components/images/logo.png";
// axios import remains the same

function Payment() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  // Error state variables can be added here if needed

  const handleClick = async (e) => {
    e.preventDefault();
    // Validation and error handling logic goes here

    const registrationData = {
      firstName,
      lastName,
      email,
      paymentDetails: {
        nameOnCard,
        creditCard,
        expMonth,
        expYear,
        cvv
      }
    };

    console.log(registrationData);

    // Here you can handle the API request to register the user
    // Adjust the endpoint and request details as per your backend requirements
  };

  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            {/* <img className="w-8 h-8 mr-2" src={logo} alt="logo" /> */}
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                {/* Form fields for first name, last name, email, and payment details */}
                {/* Add each input field here with similar structure to the existing ones */}
                {/* For example, for first name: */}
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    required
                    className="input-field-class" // Replace with actual class names
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                {/* Add other input fields similarly */}
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    className="input-field-class" // Replace with actual class names
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                
                {/* Submit button */}
                <Link>
                <button
                  type="submit"
                  className="submit-button-class" // Replace with actual class names
                  onClick={handleClick}
                >
                  Complete Payment
                </button>
                </Link>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment;
