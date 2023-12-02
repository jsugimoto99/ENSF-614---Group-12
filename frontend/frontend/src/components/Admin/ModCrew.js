import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ModCrew() {
    const [crews, setCrews] = useState([]);
    const [flights, setFlights] = useState([]);
    const [crew, setCrew] = useState([]);
    const [flight, setFlight] = useState([]);
    const [crewMember1, setCrewMember1]= useState("");
    const [crewMember2, setCrewMember2]= useState("");
    const [crewMember3, setCrewMember3]= useState("");
    const [crewMember4, setCrewMember4]= useState("");
    const [flightId, setFlightId]= useState();
  
  
    useEffect(() => {
      axios
        .get("http://localhost:8081/crew/listAll")
        .then((response) => {
          setCrews(response.data);
        })
        .catch((error) => {
          console.error("Error fetching crews:", error);
        });
    }, []);
  
    const handleDelete = (crewId) => {
      axios
        .delete(`http://localhost:8081/crew/delete/${crewId}`)
        .then((response) => {
          console.log(response.data);
          setCrews(crews.filter((crew) => crew.id !== crewId));
        })
        .catch((error) => {
          console.error("Error deleting crew:", error);
        });
    };
  
    useEffect(() => {
      axios.get('http://localhost:8081/flight/listAll')
        .then(response => {
          setFlights(response.data);
        })
        .catch(error => {
          console.error('Error fetching locations:', error);
        });
    }, []);

  
    const handleClick = (e) => {
      e.preventDefault();
      const crew = {
        member1:crewMember1,
        member2:crewMember2,
        member3:crewMember3,
        member4:crewMember4
      };
      console.log(crew);
      axios.post(`http://localhost:8081/crew/add`, crew, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response.data); // Axios automatically parses JSON
          return axios.get("http://localhost:8081/crew/listAll");
        })
        .then((response) => {
          
          setCrews(response.data)
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
                Add Crew To The System
              </h1>
            </div>
            <div class="container mx-auto lg:w-3/4 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full">
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                Add Crew
              </h2>
              <div class="relative mb-4">
                <label for="depart_loc" class="leading-7 text-sm text-gray-600">
                  Flight
                </label>
  
                <select
                  id="flight"
                  name="flight"
                  value={flightId}
                  onChange={(e) => setFlightId(e.target.value)}
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >

                  <option value="" disabled selected>Select a Flight</option>
                  {/* Populate options from the locations state */}
                  {flights.map(flight => (
                    <option key={flight.id} value={flight.id}>
                      {flight.id}: {flight.depart_loc}-{flight.dest_loc}
                    </option>
                  ))}
                </select>
              </div>
              <div class="relative mb-4">
                <label for="depart_loc" class="leading-7 text-sm text-gray-600">
                  Crew Member 1
                </label>
                <input
                  type="text"
                  id="crewMember"
                  name="crewMember"
                  value={crewMember1}
                  onChange={(e) => setCrewMember1(e.target.value)}
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label for="depart_loc" class="leading-7 text-sm text-gray-600">
                  Crew Member 2
                </label>
                <input
                  type="text"
                  id="crewMember"
                  name="crewMember"
                  value={crewMember2}
                  onChange={(e) => setCrewMember2(e.target.value)}
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label for="depart_loc" class="leading-7 text-sm text-gray-600">
                  Crew Member 3
                </label>
                <input
                  type="text"
                  id="crewMember"
                  name="crewMember"
                  value={crewMember3}
                  onChange={(e) => setCrewMember3(e.target.value)}
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label for="depart_loc" class="leading-7 text-sm text-gray-600">
                  Crew Member 4
                </label>
                <input
                  type="text"
                  id="crewMember"
                  name="crewMember"
                  value={crewMember4}
                  onChange={(e) => setCrewMember4(e.target.value)}
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                class="text-white bg-gray-500 border-0 py-2 px-20 focus:outline-none hover:bg-gray-600 rounded text-lg"
                onClick={handleClick}
              >
                Add Flight
              </button>
            </div>
            <div class="container px-5 py-24 mx-auto">
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                Crew List
              </h2>
              <ul>
                {crews.map((crew) => (
                  <li key={crew.id} class="mb-3">
                    <p>
                        Crew ID: {crew.id}  Assigned Flight: {crew.flight_id}
                        <br/>
                        Crew Member 1: {crew.member1}
                        <br/>
                        Crew Member 2: {crew.member2}
                        <br/>
                        Crew Member 3: {crew.member3}
                        <br/>
                        Crew Member 4: {crew.member4}
                    </p>
                    
                    <button
                      onClick={() => handleDelete(crew.id)}
                      class="ml-3 text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }

