import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/logo.png";

export default function StaffLogin({ updateUserAttributes }) {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    updateUserAttributes({role: 'staff'});
          navigate("/");
          return;
  }
  return (
    <>
      <section class="bg-gray-50">
        <div class="flex items-center flex-col mt-16 px-6 py-8 mx-auto lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img class="w-8 h-8 mr-2" src={logo} alt="logo" />
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Staff Login
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div class="flex items-center justify-between">
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleClick}
                >
                  Sign in

                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
