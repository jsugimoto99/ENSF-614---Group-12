import React, { useState } from "react";
import SelectSeat from "./SelectSeat";

const FlightList = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  const [isSeatVisible, setSeatVisible] = useState(false);
  const toggleSeat = () => {
    setSeatVisible(!isSeatVisible);
  };

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div class="flex mx-auto flex-wrap mb-20">
            <button class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
              Janauary 20 $20
            </button>
            <button class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              Janauary 21 $20
            </button>
            <button class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              Janauary 22 $20
            </button>
            <button class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              Janauary 23 $20
            </button>
          </div>
          <div className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
              <ul className="items-stretch hidden space-x-3 lg:flex">
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-teal-400 dark:border-teal-400"
                  >
                    From: YYC Calgary
                  </a>
                </li>
              </ul>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Back to homepage"
                className="flex items-center p-2"
              >
                <p>To: YYZ Toronto</p>
              </a>
              <div className="flex items-center md:space-x-4">
                <div className="relative">
                  <p>Total travel time: 4h: 20m</p>
                </div>
                <button
                  onClick={toggleDivVisibility}
                  type="button"
                  className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-teal-400 dark:text-gray-900"
                >
                  Show Flight
                </button>
              </div>
              <button title="Open menu" type="button" className="p-4 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {isDivVisible && (
            <search>
              <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-10 mx-auto">
                  <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                      Choose a bundle
                    </h1>
                  </div>
                  <div class="flex flex-wrap -m-4">
                    <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                      <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                          +$117/per passeger
                        </h2>
                        <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                          Basic
                        </h1>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Personal item up to 7kg
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Carry-on bag up tp 10kg
                        </p>
                        <p class="flex items-center text-gray-600 mb-6">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          1st checked baggage up to 23kg
                        </p>
                        <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                          Button
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                      <div class="h-full p-6 rounded-lg border-2 border-gray-500 flex flex-col relative overflow-hidden">
                        <span class="bg-gray-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                          Economy
                        </span>
                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                          Economy
                        </h2>
                        <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                          <span>$38</span>
                          <span class="text-lg ml-1 font-normal text-gray-500">
                            /mo
                          </span>
                        </h1>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Vexillologist pitchfork
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Tumeric plaid portland
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Hexagon neutra unicorn
                        </p>
                        <p class="flex items-center text-gray-600 mb-6">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Mixtape chillwave tumeric
                        </p>
                        <button class="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded">
                          Button
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                      <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                          BUSINESS
                        </h2>
                        <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                          <span>$56</span>
                          <span class="text-lg ml-1 font-normal text-gray-500">
                            /mo
                          </span>
                        </h1>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Vexillologist pitchfork
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Tumeric plaid portland
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Hexagon neutra unicorn
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Vexillologist pitchfork
                        </p>
                        <p class="flex items-center text-gray-600 mb-6">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Mixtape chillwave tumeric
                        </p>
                        <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                          Button
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                      <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                          SPECIAL
                        </h2>
                        <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                          <span>$72</span>
                          <span class="text-lg ml-1 font-normal text-gray-500">
                            /mo
                          </span>
                        </h1>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Vexillologist pitchfork
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Tumeric plaid portland
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Hexagon neutra unicorn
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Vexillologist pitchfork
                        </p>
                        <p class="flex items-center text-gray-600 mb-6">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5"
                              class="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          Mixtape chillwave tumeric
                        </p>
                        <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                          Button
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <button onClick={toggleSeat} class="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Select Seat ...</button>
            </search>
          )}
        </div>
        {isSeatVisible && (
        <SelectSeat />
        )}
      </section>
    </>
  );
};

export default FlightList;
