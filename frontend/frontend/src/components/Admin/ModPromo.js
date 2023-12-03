import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ModPromo() {
  const [promoDescription, setPromoDescription] = useState("");
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/promotions")
      .then((response) => {
        setPromos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Promos", error);
      });
  }, []);

  const handleDelete = (promoId) => {
    axios
      .delete(`http://localhost:8081/promotions/${Number(promoId)}`)
      .then((response) => {
        console.log(response.data);

        return axios.get("http://localhost:8081/promotions");
      })
      .then((response) => {
        setPromos(response.data);
        setPromoDescription("");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const promo = {
      description: promoDescription
    };

    console.log(promo);

    axios.post("http://localhost:8081/promotions/add", promo, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
        return axios.get("http://localhost:8081/promotions");
      })
      .then((response) => {
        setPromos(response.data);
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
              Promotions
            </h1>
          </div>
          <div class="container mx-auto lg:w-3/4 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Add Promotion
            </h2>
            <div class="relative mb-4">
              <label for="depart_loc" class="leading-7 text-sm text-gray-600">
                Promotion Description
              </label>

              <input
                id="model"
                name="model"
                value={promoDescription}
                onChange={(e) => setPromoDescription(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >

              </input>
            </div>
            <button
              class="text-white bg-gray-500 border-0 py-2 px-20 focus:outline-none hover:bg-gray-600 rounded text-lg"
              onClick={handleClick}
            >
              Add Promotion
            </button>
          </div>
        </div>
      </section>
      <div>
      <div class="container mx-auto lg:w-3/4 md:w-4/5 sm:w-full px-5">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Promotions
            </h2>
            <ul>
              {promos.map((promo) => (
                <li key={promo.promo_id} class="mb-3">
                  Code: {promo.code},  Description: {promo.description}
                  <button
                    onClick={() => handleDelete(promo.promoId)}
                    class="ml-3 text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  )
}

