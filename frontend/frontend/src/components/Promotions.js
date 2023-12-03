import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Promotions() {
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

  return (
    <>
      <section className="text-gray- body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Promotions
          </h1>
        </div>
      </section>

      <div className="container mx-auto lg:w-3/4 md:w-4/5 sm:w-full px-5 text-center">
        <h2 className="text-gray-900 text-xl font-medium title-font mb-5">
          Available Promotions: Apply code at checkout!
        </h2>
        <ul className="list-disc list-inside">
          {promos.map((promo) => (
            <li key={promo.promo_id} className="mb-3 text-xl">
             Code: <span className="font-bold text-2xl"> {promo.code} </span> , Description: {promo.description}
            </li>
          ))}

        </ul>
      </div>
    </>
  );
}
