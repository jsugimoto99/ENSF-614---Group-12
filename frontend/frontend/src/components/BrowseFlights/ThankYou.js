import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

function ThankYou() {
    const [isOpen, setIsOpen] = useState(false);
    const openModel = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
    const textArray = ['Ticket number', 'Departure', 'Destination', 'Seat Number', 'Flight Number'];
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
              {textArray.map((text, index) =>(
              <p key={index} className="flex-1 text-center dark:text-gray-400 text-2xl">
                {text}: 
              </p>

              ))}
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
