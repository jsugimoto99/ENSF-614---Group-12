import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ModFlights() {
  const [departLoc, setDeparture] = useState("");
  const [destLoc, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [departTime, setDepartureTime] = useState("00:00");
  const [arriveTime, setArrivalTime] = useState("00:00");
  const [flights, setFlights] = useState([]);
  const [locations, setLocations] = useState([]);

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

  const handleDelete = (flightId) => {
    axios
      .delete(`http://localhost:8081/flight/delete/${flightId}`)
      .then((response) => {
        console.log(response.data);
        // Update the flights state after deleting a flight
        setFlights(flights.filter((flight) => flight.id !== flightId));
      })
      .catch((error) => {
        console.error("Error deleting flight:", error);
      });
  };

  // To Implement!!!!!!!!!!!!!!!!!!!
  useEffect(() => {
    // Make a GET request to fetch locations
    axios.get('http://localhost:8081/location/listAll')
      .then(response => {
        // Assuming the response data is an array of locations
        setLocations(response.data);
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts



  const handleClick = (e) => {
    e.preventDefault();
    const flight = {
      arriveTime: `${arriveTime}:00`,
      date: new Date(date).toISOString().slice(0, 10),
      departLoc: departLoc,
      departTime: `${departTime}:00`,
      destLoc: destLoc,
    };

    console.log(flight);
    console.log(JSON.flight);

    axios.post("http://localhost:8081/flight/add", flight, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data); // Axios automatically parses JSON
        return axios.get("http://localhost:8081/flight/listAll");
      })
      .then((response) => {
        
        setFlights(response.data)
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          
        <div>
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5 animate__bounceIn">
              Flights List
            </h2>
            <ul>
              {flights.map((flight) => (
                <li key={flight.id} class="mb-3">
                  {flight.depart_loc} to {flight.dest_loc} - {flight.depart_date}
                  <button
                    onClick={() => handleDelete(flight.id)}
                    class="ml-3 text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div class="container mx-auto lg:w-3/4 md:w-4/5 sm:w-full px-5">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Add Flight To The System
            </h1>
          </div>
          <div class="container mx-auto lg:w-3/4 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Add Flight
            </h2>
            <div class="relative mb-4">
              <label for="depart_loc" class="leading-7 text-sm text-gray-600">
                From
              </label>

              <select
                id="depart_loc"
                name="depart_loc"
                value={departLoc}
                onChange={(e) => setDeparture(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                {/* Add default option */}
                <option value="" disabled selected>Select a location</option>
                {/* Populate options from the locations state */}
                {locations.map(location => (
                  <option key={location.code} value={location.city}>
                    {location.city}
                  </option>
                ))}
              </select>
            </div>
            <div class="relative mb-4">
              <label for="depart_loc" class="leading-7 text-sm text-gray-600">
                To
              </label>

              <select
                id="dest_loc"
                name="dest_loc"
                value={destLoc}
                onChange={(e) => setDestination(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                {/* Add default option */}
                <option value="" disabled selected>Select a location</option>
                {/* Populate options from the locations state */}
                {locations.map(location => (
                  <option key={location.code} value={location.city}>
                    {location.city}
                  </option>
                ))}
              </select>
            </div>
            <div class="relative mb-4">
              <label for="Date" class="leading-7 text-sm text-gray-600">
                Date
              </label>
              <input
                type="date"
                id="depart_date"
                name="depart_date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label
                for="Departure Time"
                class="leading-7 text-sm text-gray-600"
              >
                Departure Time
              </label>
              <input
                type="time"
                id="depTime"
                name="depTime"
                value={departTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="Arrival Time" class="leading-7 text-sm text-gray-600">
                Arrival Time
              </label>
              <input
                type="time"
                id="arrTime"
                name="arrTime"
                value={arriveTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class="text-white bg-gray-500 border-0 py-2 px-20 focus:outline-none hover:bg-gray-600 rounded text-lg"
              onClick={handleClick}
            >
              Add Flight
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
