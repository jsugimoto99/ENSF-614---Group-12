import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Insurance = () => {
const location = useLocation();
const flightId = new URLSearchParams(location.search).get('flightId');
const selectedSeat = new URLSearchParams(location.search).get('selectedSeat');
const price = new URLSearchParams(location.search).get('price');
const [insurance, setInsurance] = useState(false)
  const navigate = useNavigate();
  
  const handleInsuranceChange = (event) => {
    setInsurance(event.target.checked);
  };
  
  const handleClick = () => {
    const paramName = "ticketInfo";
    navigate(`/payment/${paramName}?flightId=${flightId}&selectedSeat=${selectedSeat}&insurance=${insurance}&price=${Number(price)}`);
  };
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center items-center">
            <div className="p-4 lg:w-1/2">
              <div className="h-full bg-gray-300 bg-opacity-75 mt-10 mb-10 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-900 mb-3">
                  Insurance?
                </h1>
                <p className="leading-relaxed mb-3 text-gray-700">
                  Please check the box if you would like to add insurance to your ticket.
                </p>
                {/* Checkbox */}
                <div className="flex items-center justify-center mt-4">
                  <input
                    type="checkbox"
                    id="termsCheckbox"
                    className="mr-2"
                    onChange={handleInsuranceChange}
                  />
                  <label htmlFor="termsCheckbox" className="text-gray-600 ml-2">
                    Insurance
                  </label>
                </div>


              </div>
            </div>
          </div>
        </div>
          <button
            onClick={handleClick}
            className="flex mx-auto mt-8 text-white dark:bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:dark:bg-gray-600 rounded-full text-lg"
          >
            Continue to Payment ...
          </button>
      </section>
    </>


  );
};

export default Insurance;
