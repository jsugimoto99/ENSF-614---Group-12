import React from "react";
import watch from "../images/watch.png"
import logo from "../images/logo.png"

function Featured() {
  const fairList = [
    {
      province: "Ontario",
      city: "Toronto",
      price: 500,
      depart_date: "2023-01-15",
    },
    {
      province: "British Columbia",
      city: "Vancouver",
      price: 600,
      depart_date: "2023-02-01",
    },
    {
      province: "Quebec",
      city: "Montreal",
      price: 450,
      depart_date: "2023-03-10",
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mb-16 px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {fairList.map((item, index) => (
              <div key={index} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-2xl title-font font-medium mb-1 text-gray-500">
                    {item.province}
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {item.city}
                  </h1>
                  <p className="leading-relaxed mb-3 text-gray-600 text-2xl">
                    ${item.price}
                  </p>
                  <a className="text-gray-500 inline-flex items-center text-2xl">
                    {item.depart_date}
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <p>{item.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;