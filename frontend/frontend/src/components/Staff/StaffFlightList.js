import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';

const StaffFlightList = () => {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/flight/listAll")
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.error("Error fetching flights:", error);
      });
  }, []);

  return (
    <div>
      <div class="text-gray-600 body-font">
        <div class="container px-5 p-10 pb-5 mx-auto">
          <ul class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1 class="text-gray-900 text-xl font-medium title-font mb-5 mx-auto">
              Flight List
            </h1>
            {flights.map((flight) => (
              <li key={flight.id} class="mb-3 text-xl text-black-500">
                From: {flight.depart_loc}, To: {flight.dest_loc} - Date: {flight.depart_date}
                <Link to={`/staffPassengerList/${flight.id}`}>
                  <button
                    class="ml-3 text-white bg-gray-600 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
                  >
                    View Passengers
                  </button>
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default StaffFlightList;
