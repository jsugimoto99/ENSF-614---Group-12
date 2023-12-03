import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function StaffPassengerList() {
  const {flightId} = useParams();
  const [tickets, setTickets]= useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8081/booking/getByFlightId/${Number(flightId)}`)
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.error("Error fetching flights:", error);
      });
  }, []);

  const handleDeleteClick = (ticket) => {
    // Add logic for handling delete
    console.log("Delete clicked");

    // Assuming ticketId and username are available in the component state or props
    const ticketId = ticket.ticketId;
    const lastName = ticket.lastName;

    // Make an Axios DELETE request
    axios
      .delete(
        `http://localhost:8081/booking/delete/${Number(ticketId)}/${lastName}`
      )
      .then((response) => {
        console.log(lastName,"'s Booking:", response.data);
        // Add any additional logic after a successful delete
      })
      .catch((error) => {
        console.error("Error deleting:", error);
        // Handle errors appropriately
      });
  };
  return (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto  flex flex-wrap flex-col">
      <div className="p-4 rounded-lg dark:bg-gray-800 light:bg-gray-100 dark:text-gray-100 light:text-gray-800">
        <ul className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <h1 className="dark:text-gray-100 light:text-gray-800 text-xl font-large title-font mb-5">
            Passenger List for Flight ID: {flightId}
          </h1>
  
          {tickets.length === 0 ? (
            <p className="text-lg text-gray-500">No passengers booked for this flight.</p>
          ) : (
            tickets.map((ticket) => (
              <li key={ticket.ticketId} className="mb-3 text-xl text-black-500 flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-lg mr-5">
                    <strong>Name:</strong> {ticket.lastName}, {ticket.firstName}
                  </p>
                  <p className="text-lg">
                    <strong>Seat:</strong>{" "}
                    {ticket
                      ? `${ticket.class} - ${`${ticket.seatId}`.slice(-2)}`
                      : "Not assigned"}
                  </p>
                  <p className="text-lg ml-5">
                    <strong>Email:</strong> {ticket.toEmail}
                  </p>
                </div>
                <button
                  className="ml-3 text-white bg-gray-600 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
                  onClick={() => handleDeleteClick(ticket)}
                >
                  Delete Booking
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  </section>
  

  )
}

export default StaffPassengerList