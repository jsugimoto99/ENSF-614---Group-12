import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const ManageBooking = () => {
  const { ticketId, lastName } = useParams();
  const [ticket, setTicket] = useState([]);
  const [flight, setFlight] = useState([]);
  const [flightId] = useState([ticket.flightId]);

  useEffect(() => {
    if (ticketId && lastName) {
      axios
        .get(
          `http://localhost:8081/booking/get/${Number(ticketId)}/${lastName}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setTicket(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching Ticket:", error);
        });
    }
  }, [ticketId, lastName]);



  const handleDeleteClick = () => {
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
        console.log("Delete successful:", response.data);
        // Add any additional logic after a successful delete
      })
      .catch((error) => {
        console.error("Error deleting:", error);
        // Handle errors appropriately
      });
      
  };
  return (
    <div className="container mx-auto mt-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white flex justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-4">Manage Booking</h2>

        {/* Check if ticket has been fetched */}
        {ticket && (
          <div>
            <p className="text-lg">
              <strong>Ticket ID:</strong> {ticket.ticketId}
            </p>
            <p className="text-lg">
              <strong>First Name:</strong> {ticket.firstName}
            </p>
            <p className="text-lg">
              <strong>Last Name:</strong> {ticket.lastName}
            </p>
            <p className="text-lg">
              <strong>Departure:</strong> {ticket.departure}
            </p>
            <p className="text-lg">
              <strong>Destination:</strong> {ticket.destination}
            </p>
            <p className="text-lg">
              <strong>Seat:</strong>{" "}
              {ticket
                ? `${ticket.class} - ${`${ticket.seatId}`}`
                : "Not assigned"}
            </p>
            <p className="text-lg">
              <strong>Insurance:</strong> {ticket.insurance ? "Yes" : "No"}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {ticket.toEmail}
            </p>
          </div>
        )}
      </div>

      {/* Buttons on the right side */}
      <div className="flex-1/2">
        {/* <button
          onClick={handleEditClick}
          className="bg-teal-500 text-white px-2 py-4 rounded-md mr-4 hover:bg-gray-400 focus:outline-none"
        >
          Edit
        </button> */}
        <Link to="/">
          <button
            onClick={handleDeleteClick}
            className="bg-gray-800 text-white px-6 py-4 rounded-md hover:bg-red-600 focus:outline-none"
          >
            Cancel Booking
          </button>
        </Link>
      </div>
    </div>
  );
};
