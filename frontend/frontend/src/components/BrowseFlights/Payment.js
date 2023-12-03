import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

function Payment() {
  const location = useLocation();
  const flightId = new URLSearchParams(location.search).get('flightId');
  const selectedSeat = new URLSearchParams(location.search).get('selectedSeat');
  const initialPrice = parseFloat(new URLSearchParams(location.search).get('price'));
  const [price, setPrice] = useState(initialPrice);
  const insuranceParam = new URLSearchParams(location.search).get('insurance');
  const insurance = insuranceParam === 'true';
  const [ticketId, setTicketId] =useState("");
  const [seatId, setSeatId] = useState("")
  const [flight, setFlight] = useState([]);
  const [insuranceCost, setInsuranceCost] = useState(0.00);
  const [TotalCost, setTotalCost] = useState(0.00);
  const navigate = useNavigate();
  const [ticketInfo, setTicketInfo] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [billingInfo, setBillingInfo] = useState({
    nameOnCard: '',
    creditCardNumber: '',
    creditCardExp: '',
    creditCardCvv: '',
    seatId: selectedSeat
  });
  console.log(billingInfo)
  

  useEffect(() => {
    axios.get(`http://localhost:8081/flight/getFlightById/${Number(flightId)}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

      .then((response) => {
        setFlight(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching flights:", error);
      });
  }, [flightId]); // Include variables that are used inside the effect in the dependency array

  useEffect(() => {
    // Calculate the total cost whenever either insuranceCost or seatCost changes
    const newTotalCost = insuranceCost + price;
    setTotalCost(newTotalCost);
  }, [insuranceCost, price]);

  useEffect(() => {
    // Calculate the total cost whenever either insuranceCost or seatCost changes
    const updateSeatId = flight.aircraftId + "-" + selectedSeat;
    setSeatId(updateSeatId);
    console.log(seatId)
  }, [flight, selectedSeat]);

  useEffect(() => {
    // Conditionally update insuranceCost based on the value of insurance
    if (insurance) {
      setInsuranceCost(15.00);
    } else {
      setInsuranceCost(0.00);
    }
  }, [insurance]);

  function formatAmount(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // paymentDetails: {
  //   nameOnCard,
  //   creditCard,
  //   expMonth,
  //   expYear,
  //   cvv,

  const handleBooking = async () => {
    const bookingRequest = {
      seat_id: seatId,
      flight_id: flightId,
      to_email: email,
      first_name: firstName,
      last_name: lastName,
      insurance: insurance
    }

    
    console.log(bookingRequest);
    try {
      const response = await axios.post('http://localhost:8081/booking/add', bookingRequest, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Ticket has been successfully created with ID:', response.data);
      setTicketId = response.data;

      // Handle success, redirect, or perform other actions
    } catch (error) {
      console.error('Error creating booking');
      // Handle error, display a message, etc.
    }
    const billingInfo = {
      amount: TotalCost,
      name: nameOnCard,
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv,
      seat_id: seatId
    }
    try {
      const response = await axios.post('http://localhost:8081/payment/process', billingInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Booking response:', response.data);
      // Handle success, redirect, or perform other actions
    } catch (error) {
      console.error('Error creating booking:', error.response ? error.response.data : error.message);
      // Handle error, display a message, etc.
    }


  };

  const handleChangeName = (e) => {
    // Update state for the corresponding form field
    setBillingInfo({ ...billingInfo, nameOnCard: e.target.value });
  };

  const handleChangeFName = (e) => {
    // Update state for the corresponding form field
    setTicketInfo({ ...ticketInfo, firstName: e.target.value });
  };

  const handleChangeLName = (e) => {
    // Update state for the corresponding form field
    setTicketInfo({ ...ticketInfo, lastName: e.target.value });
  };

  const handleChangeEmail = (e) => {
    // Update state for the corresponding form field
    setTicketInfo({ ...ticketInfo, email: e.target.value });
  };

  const handleChangeDate = (event) => {
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
    setBillingInfo({ ...billingInfo, creditCardExp: inputValue });
  };

  const handleChangeCardNumber = (event) => {
    // Get the input value
    let inputValue = event.target.value;

    // Remove non-numeric characters
    inputValue = inputValue.replace(/\D/g, '');

    // Add spaces to format as "1234 5678 1234 1233"
    inputValue = inputValue.replace(/(\d{4})/g, '$1 ').trim();

    // Limit the input to 19 characters (including spaces)
    inputValue = inputValue.slice(0, 19);

    // Update the state with the formatted value
    setBillingInfo({ ...billingInfo, creditCardNumber: inputValue });
  };

  const handleChangeCVV = (event) => {
    // Get the input value
    let inputValue = event.target.value;

    // Remove non-numeric characters
    inputValue = inputValue.replace(/\D/g, '');

    // Limit the input to 3 characters
    inputValue = inputValue.slice(0, 3);

    // Update the state with the formatted value
    setBillingInfo({ ...billingInfo, creditCardCvv: inputValue });
  };

  const {
    nameOnCard: nameOnCard,
    creditCardNumber: cardNumber,
    creditCardExp: expiryDate,
    creditCardCvv: cvv } = billingInfo;

  const {
    firstName: firstName,
    lastName: lastName,
    email: email
  } = ticketInfo;

  return (
    <>
      <section>
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-16">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Flight Details
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base flight-details">
                <span className="detail-label"><strong>From:</strong></span> {flight.departLoc}
                <span className="detail-label ml-5"><strong>Departure Time:</strong></span> {flight.departTime}
                <br />
                <span className="detail-label"><strong>To:</strong></span> {flight.destLoc}
                <span className="detail-label ml-5"><strong>Arrival Time:</strong></span> {flight.arriveTime}
                <br />
                <span className="detail-label"><strong>Date:</strong></span> {flight.date}
              </p>

              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Seat: {selectedSeat}
              </p>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Seat Price: {formatAmount(price)}
              </p>
              <div>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  {insurance && <span> Insurance: {formatAmount(insuranceCost)}</span>}
                </p>
              </div>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Total Price: {formatAmount(TotalCost)}
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Billing Info
              </h1>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your first name"
                      required={true}
                      value={firstName}
                      onChange={handleChangeFName} />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Name On Card
                    </label>
                    <input
                      type="text"
                      name="nameOnCard"
                      id="nameOnCard"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter the name on your card"
                      required={true}
                      value={nameOnCard}
                      onChange={handleChangeName} />
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
                      name="lastName"
                      id="lastName"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your last name"
                      required={true}
                      value={lastName}
                      onChange={handleChangeLName} />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="number" class="leading-7 text-sm text-gray-600">
                      Credit Card
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your card number"
                      required={true}
                      value={cardNumber}
                      onChange={handleChangeCardNumber} />
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
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required={true}
                      value={email}
                      onChange={handleChangeEmail} />
                  </div>
                </div>
                <div class="p-2 w-1/2 relative">
                  <div class="flex justify-center">
                    <div class="relative pr-2">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        id="expiryDate"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="MM/YY"
                        required={true}
                        value={expiryDate}
                        onChange={handleChangeDate} />
                    </div>
                    <div class="relative pr-">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        CCV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        id="cvv"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter CVV"
                        required={true}
                        value={cvv}
                        onChange={handleChangeCVV} />
                    </div>
                  </div>
                </div>
                <div>
                    <div class="p-2 w-1/3relative">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        Discount Code
                      </label>
                      <input
                        type="discountCode"
                        name="discountCode"
                        id="discountCode"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Code"
                        required />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <Link to={`/thankyou/${seatId}/${flightId}/${ticketId}`}>
          <button
            onClick={handleBooking}
            class="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
          >
            Book Flight
          </button>
        </Link>
      </section>
    </>
  );
}

export default Payment;
