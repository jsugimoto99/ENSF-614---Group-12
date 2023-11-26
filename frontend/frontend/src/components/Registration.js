import React, { Component } from 'react'
import logo from "./images/logo.png";
export class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameOnCard: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    };
  }
  handleChange = (e) => {
    // Update state for the corresponding form field
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = async (e) => {
    e.preventDefault();
    const { nameOnCard, cardNumber, expiryDate, cvv } = this.state;
    const navigate = this.props.navigate;

    console.log(this.state);

    try {
      const response = fetch("http://localhost:8081/User/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state),
      });
      if (response.ok) {
        const userData = await response.json();
        console.log("Login status:", userData);

        if (userData.status === "success") {
          // Call the updateUserRole function passed from App.js
          this.props.setUserRole(userData.userRole);
          navigate("/");
          return;
        }
        else {
          // Registration failed, update the error message state
          this.setState({ errorMessage: "Invalid login"});
        }
      } else {
        console.log("Login failed");
        // Handle login failure, show error message, etc.
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }

  };

  handleChangeDate = (event) => {
    // Get the input value
    let inputValue = event.target.value;

    // Remove non-numeric characters
    inputValue = inputValue.replace(/\D/g, '');

    // Format the input as MM/YYYY
    if (inputValue.length > 2) {
      inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2)}`;
    }

    // Limit the input to 7 characters (MM/YY)
    inputValue = inputValue.slice(0, 5);

    // Update the state with the formatted value
    this.setState({ expiryDate: inputValue });
  };

  handleChangeCardNumber = (event) => {
    // Get the input value
    let inputValue = event.target.value;

    // Remove non-numeric characters
    inputValue = inputValue.replace(/\D/g, '');

    // Add spaces to format as "1234 5678 1234 1233"
    inputValue = inputValue.replace(/(\d{4})/g, '$1 ').trim();

    // Limit the input to 19 characters (including spaces)
    inputValue = inputValue.slice(0, 19);

    // Update the state with the formatted value
    this.setState({ cardNumber: inputValue });
  };

  handleChangeCVV = (event) => {
    // Get the input value
    let inputValue = event.target.value;

    // Remove non-numeric characters
    inputValue = inputValue.replace(/\D/g, '');

    // Limit the input to 3 characters
    inputValue = inputValue.slice(0, 3);

    // Update the state with the formatted value
    this.setState({ cvv: inputValue });
  };

  render() {
    const { nameOnCard, cardNumber, expiryDate, cvv, errorMessage } = this.state;

    return (
      <div>
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
                    Register Credit Card
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    {errorMessage && (
                      <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>
                    )}
                    <div>
                      <label
                        htmlFor="fName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name on Card
                      </label>
                      <input
                        type="text"
                        name="nameOnCard"
                        id="nameOnCard"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your first name"
                        required
                        value={nameOnCard}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cardNumber"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your card number"
                        required
                        value={cardNumber}
                        onChange={this.handleChangeCardNumber}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="expiryDate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        id="expiryDate"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="MM/YY"
                        required
                        value={expiryDate}
                        onChange={this.handleChangeDate}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cvv"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        id="cvv"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter CVV"
                        required
                        value={cvv}
                        onChange={this.handleChangeCVV}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={this.handleClick}
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      </div>
    )
  }
}

export default Registration