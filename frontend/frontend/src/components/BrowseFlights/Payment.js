import React, { useState } from "react";
import { Link, useNavigate, useLocation} from "react-router-dom";
// import logo from ".components/images/logo.png";
// axios import remains the same

function Payment() {
  const location = useLocation();
  const selectedFlight = new URLSearchParams(location.search).get('selectedFlight');
  const selectedSeat = new URLSearchParams(location.search).get('selectedSeat');
  const insurance = new URLSearchParams(location.search).get('insurance');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [seatId,setSeatId] = useState("")
  const navigate = useNavigate();

  // Error state variables can be added here if needed

  const handleClickRoute = () => {
    navigate(`/payment`);
  };

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
        cvv,
      },
    };

    console.log(registrationData);

    // Here you can handle the API request to register the user
    // Adjust the endpoint and request details as per your backend requirements
  };

  return (
    <>
      <section>
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Make a Payment
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Seat: {selectedSeat}
                </p>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Seat Price:
              </p>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Total Price:
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Bulling Info
              </h1>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Name On Card
                    </label>
                    <input
                      type="name"
                      id="name on Card"
                      name="name on card"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="Last name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="number" class="leading-7 text-sm text-gray-600">
                      Credit Card
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2 relative">
                  <div class="flex justify-center">
                    <div class="relative pr-2">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        Year
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div class="relative pr-2">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        Month
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div class="relative pr-">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        CCV
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Link to="/thankyou">
          <button
            onClick={handleClickRoute}
            class="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
          >
            Make Payment ...
          </button>
        </Link>
      </section>
    </>
  );
}

export default Payment;
