import React, { useState } from "react";

export default function ModFlight() {
  const [depart_loc, setDeparture] = useState("");
  const [dest_loc, setDestination] = useState("");
  const [depart_date, setDate] = useState("");
  const [depart_time, setDepartureTime] = useState("");
  const [arrive_time, setArrivalTime] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const flight = {
      arrive_time: `${arrive_time}:00`,
      depart_date: new Date(depart_date).toISOString().slice(0, 10),
      depart_loc: depart_loc,
      depart_time: `${depart_time}:00`,
      dest_loc: dest_loc,
    };

    console.log(flight);
    console.log(JSON.flight);

    fetch("http://localhost:8081/flight/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(flight),
    })
      .then((response) => {
        console.log(response.text()); // Only attempt to parse JSON if there's content
      })
      .then((data) => {
        console.log("New Flight added:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="container mx-auto lg:w-3/4 md:w-4/5 sm:w-full px-5">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Book your Trip now!
            </h1>
            <p class="leading-relaxed mt-4">Great</p>
          </div>
          <div class="container mx-auto lg:w-3/4 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Add Flight
            </h2>
            <div class="relative mb-4">
              <label for="From" class="leading-7 text-sm text-gray-600">
                From
              </label>
              <input
                type="text"
                id="depart_loc"
                name="depart_loc"
                value={depart_loc}
                onChange={(e) => setDeparture(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="To" class="leading-7 text-sm text-gray-600">
                To
              </label>
              <input
                type="text"
                id="dest_loc"
                name="dest_loc"
                value={dest_loc}
                onChange={(e) => setDestination(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="Date" class="leading-7 text-sm text-gray-600">
                Date
              </label>
              <input
                type="date"
                id="depart_date"
                name="depart_date"
                value={depart_date}
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
                value={depart_time}
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
                value={arrive_time}
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
