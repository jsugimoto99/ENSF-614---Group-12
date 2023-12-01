import React, { useState, useEffect } from "react";

function ManageFlights() {

  const [ticketId, setTicketId] = useState("");
  const [lastName, setLastName] = useState("");

  const handleTicketIdChange = (event) => {
    setTicketId(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 animate__bounceIn">
              Manage Flights
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Enter your Ticket ID and your Last Name to modify you flight.
            </p>
          </div>
          <div className="flex lg:w-2/3 w-1/2 sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-1/3">
              <label htmlFor="ticketId">Input Ticket Id</label>
              <input
                type="text"
                id="ticketId"
                value={ticketId}
                onChange={handleTicketIdChange}
                className="border border-gray-300 p-2 w-full rounded-md"
              />
            </div>
            <div className="relative flex-grow w-1/2">
              <label htmlFor="lastName">Input Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                className="border border-gray-300 p-2 w-full rounded-md"
              />
            </div>
            <button
              // onClick={handleClick}
              className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ManageFlights