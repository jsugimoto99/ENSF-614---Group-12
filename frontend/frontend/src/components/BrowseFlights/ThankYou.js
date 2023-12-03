import React, { useState, useEffect } from "react";
import { Link , useParams} from "react-router-dom";
import logo from "../images/logo.png"
import axios from "axios";

function ThankYou() {
  const {flightId, seatId} = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [flight, setFlight] = useState([]);
  const [ticket, setTicket] = useState([]);
  
  useEffect(() => {
      axios
        .get(
          `http://localhost:8081/booking/get/${seatId}`,
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
    }, [seatId]);
  
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
  
  
  
  const openModel = () => {
      setIsOpen(true);
    };

  
    const closeModal = () => {
      setIsOpen(false);
    };
     return (
    <>
      <section class="text-gray-500 body-font">
        <div class="container px-5 py-10 mx-auto flex flex-wrap flex-col">
          <div class="flex mx-auto flex-wrap mb-20">
            <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
              <Link to="/">
              <button className="absolute top-2 right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                </svg>
              </button>
              </Link>
              <img src={logo}
              alt="logo"
              style={{
                maxWidth: "200px",
                maxHeight: "70px",
                width: "auto",
                height: "auto",
              }}
              />
              <h2 className="text-3xl font-semibold leadi tracki">
                Thank you for flying with us!
              </h2>

              <p className="flex-1 text-center dark:text-gray-400 text-2xl">
              Ticket number: {ticket.d} 
              </p>
              <p className="flex-1 text-center dark:text-gray-400 text-2xl">
              Departure: {flight.departLoc}
              </p>
              <p className="flex-1 text-center dark:text-gray-400 text-2xl">
              Destination: {flight.destLoc}
              </p>
              <p className="flex-1 text-center dark:text-gray-400 text-2xl">
              Seat Number: {seatId.slice(-2)}
              </p>
              <p className="flex-1 text-center dark:text-gray-400 text-2xl">
              Flight Number: {flightId}
              </p>
             

              <Link to="/">
              <button
                type="button"
                className="px-8 py-3 font-semibold rounded-full dark:bg-teal-400 dark:text-gray-900"
              >
                Close
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThankYou;
