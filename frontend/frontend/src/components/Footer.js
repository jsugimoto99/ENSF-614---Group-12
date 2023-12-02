import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font dark:bg-gray-900 fixed bottom-0 w-full">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src={logo}
              alt="logo"
              style={{
                maxWidth: '200px',
                maxHeight: '30px',
                width: 'auto',
                height: 'auto',
              }}
            />
            <Link to="/">
              <span className="ml-3 text-xl text-white">Cloud 9 Airlines</span>
            </Link>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Cloud 9 Airlines
            <a
              href="https://twitter.com/knyttneve"
              className="text-white ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Book with Us
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* ...Your social media icons */}
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
