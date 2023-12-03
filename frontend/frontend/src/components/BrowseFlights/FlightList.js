import React, { useState, useEffect } from "react";
import SelectSeat from "./SelectSeat";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const FlightList = () => {
  const location = useLocation(0);
  const departLoc = new URLSearchParams(location.search).get('depart_loc');
  const destLoc = new URLSearchParams(location.search).get('dest_loc');
  const date = new URLSearchParams(location.search).get('depart_date');
  const [flightId, setFlightId] = useState();
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [flights, setFlights] = useState([]);
  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };
  const flightData = {
    departLoc: departLoc,
    destLoc: destLoc,
    date: date
  };
  
  useEffect(() => {
    console.log(flightData);
  
    axios.get(`http://localhost:8081/flight/listFlights/${date}/${departLoc}/${destLoc}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

      .then((response) => {
        setFlights(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching flights:", error);
      });
  }, [departLoc, destLoc, date]); // Include variables that are used inside the effect in the dependency array
  

  const [isSeatVisible, setSeatVisible] = useState(false);
  const toggleSeat = () => {
    setSeatVisible(!isSeatVisible);
  };

  return (
    <>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto  flex flex-wrap flex-col">
      <div className="p-4 rounded-lg dark:bg-gray-800 dark:text-gray-100">
        <div>
          <h1 className="text-gray-100 text-xl font-large title-font mb-5">
            Flights on: {date}
          </h1>
          <div className="container mx-auto">
            {flights.length === 0 ? (
              <p className="text-xl text-gray-100">
                There are no flights that match your search criteria.
              </p>
            ) : (
              <ul className="space-y-8">
                {flights.map((flight) => (
                  <li key={flight.id} className="flex items-center justify-between mb-16">
                    <div className="mr-10 flex w-4/5">
                      <div className="mr-4 w-1/6">
                        <span className="text-teal-400">ID:</span> {flight.id}
                      </div>
                      <div className="mr-4 w-1/6">
                        <span className="text-teal-400">From:</span> {flight.departLoc}
                      </div>
                      <div className="mr-4 w-1/4">
                        <span className="text-teal-400">To:</span> {flight.destLoc}
                      </div>
                      <div className="mr-4">
                        <span className="text-teal-400">Departure Date:</span> {flight.date}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        toggleSeat();
                        setFlightId(flight.id);
                      }}
                      type="button"
                      className="px-6 py-2 font-semibold rounded dark:bg-teal-400 dark:text-gray-900"
                    >
                      Select Flight
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
    {isSeatVisible && <SelectSeat flightId={flightId} />}
  </section>
</>
  );
};

export default FlightList;
