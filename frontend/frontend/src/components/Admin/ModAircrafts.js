import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ModAircrafts() {
  const [model, setModel] = useState("");
  const [bspr, setBspr] = useState("4");
  const [spr, setSpr] = useState("6");
  const [br, setBr] = useState("2");
  const [cr, setCr] = useState("4");
  const [er, setEr] = useState("6");
  const [bC,setBc] = useState(200.00)
  const [cC,setCc] = useState(140.00)
  const [eC,setEc] = useState(80.00)
  const [aircrafts, setAircrafts] = useState([]);
  const [availModels, setAvailModels] = useState([
    { id: "777", model: 'Boeing 777' },
    { id: "380", model: 'Airbus 320' },
    { id: "747", model: 'Boeing 747' },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/aircraft/listAll")
      .then((response) => {
        setAircrafts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching aircrafts:", error);
      });
  }, []);

  const handleDelete = (aircraftId) => {
    axios
      .delete(`http://localhost:8081/aircraft/delete/${aircraftId}`)
      .then((response) => {
        console.log(response.data);
        // Update the flights state after deleting a flight
        setAircrafts(aircrafts.filter((aircraft) => aircraft.aircraftId !== aircraftId));
      })
      .catch((error) => {
        console.error("Error deleting aircraft:", error);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const aircraft = {
      model: model,
      businessSeatsPerRow: bspr,
	    businessRows: br,
	    seatsPerRow: spr,
      comfortRows: cr,
      economyRows: er,
      businessCost: bC,
      comfortCost: cC,
      economyCost: eC
    };

    console.log(aircraft);

    axios.post("http://localhost:8081/aircraft/add", aircraft, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
        // Fetch the updated list of aircrafts
        return axios.get("http://localhost:8081/aircraft/listAll");
      })
      .then((response) => {
        // Update the state with the new list of aircrafts
        setAircrafts(response.data);
        window.location.reload();
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
              Add Aircraft To Database
            </h1>
          </div>
          <div class="container mx-auto lg:w-3/4 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Add Aircraft
            </h2>
            <div class="relative mb-4">
              <label for="depart_loc" class="leading-7 text-sm text-gray-600">
                Model
              </label>

              <select
                id="model"
                name="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                {/* Add default option */}
                <option value="" disabled selected>Select a Model</option>
                {/* Populate options from the locations state */}
                {availModels.map(availModel => (
                  <option key={availModel.id} value={availModel.model}>
                    {availModel.model}
                  </option>
                ))}
              </select>
            </div>
            <button
              class="text-white bg-gray-500 border-0 py-2 px-20 focus:outline-none hover:bg-gray-600 rounded text-lg"
              onClick={handleClick}
            >
              Add Aircraft
            </button>
          </div>
        </div>
      </section>
      <div>
      <div class="container mx-auto mb-16 lg:w-3/4 md:w-4/5 sm:w-full px-10">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Aircrafts in Database
            </h2>
            <ul>
              {aircrafts.map((aircraft) => (
                <li key={aircraft.id} class="mb-3">
                  Aircraft ID: {aircraft.aircraftId}      Aircraft Model: {aircraft.model}
                  <button
                    onClick={() => handleDelete(aircraft.aircraftId)}
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

