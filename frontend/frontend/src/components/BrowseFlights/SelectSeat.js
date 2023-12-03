// SelectSeat.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const SelectSeat = ({ flightId }) => {
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [aircraftData, setAircraftData] = useState(null);
  const [price,setPrice]=useState();
  const aircraftId = aircraftData?.aircraftId;
  const model = aircraftData?.model;
  const businessSeatsPerRow = aircraftData?.businessSeatsPerRow;
  const seatsPerRow = aircraftData?.seatsPerRow;
  const businessRows = aircraftData?.businessRows;
  const comfortRows = aircraftData?.comfortRows;
  const economyRows = aircraftData?.economyRows;

  const prices= (
    {business: 200.00,
    comfort: 130.00,
  economy: 60.00}
  )
  // const prices= (
  //   {business: aircraftData?.businessCost,
  //   comfort: aircraftData?.comfortCost,
  // economy: aircraftData?.economyCost}
  // )
  
  useEffect(() => {
    const fetchAircraftData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/aircraft/getAircraftByFlightId/${Number(flightId)}`);
        if (response.status === 200) {
          setAircraftData(response.data);
          console.log(response.data);

        } else {
          console.error("Aircraft not found");
        }
      } catch (error) {
        console.error("Error fetching aircraft data:", error);
      }
    };

    fetchAircraftData();
  }, [flightId]);

  const handleSeatClick = (seat) => {
    if (selectedSeat.includes(seat)) {
      setSelectedSeat(
        selectedSeat.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      setSelectedSeat([seat]);
    }
  };

  const handleClick = () => {
    const paramName = "info";
    navigate(`/flights/insurance/${paramName}?flightId=${flightId}&selectedSeat=${selectedSeat}&price=${Number(price)}`);
 
  };
  const [isSeatVisible, setSeatVisible] = useState(false);
  const toggleSeat = () => {
    setSeatVisible(!isSeatVisible);
  };



  const renderBusinessSeats = () => {
    const rows = businessRows;
    const seatsPerRow = businessSeatsPerRow;

    const seatGrid = [];

    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= businessSeatsPerRow; seat++) {
        const seatNumber = `${row}${String.fromCharCode(64 + seat)}`;
        const isSelected = selectedSeat.includes(seatNumber);

        seatGrid.push(
          <div
            key={seatNumber}
            className={`cursor-pointer p-2 border border-gray-300 rounded ${
              isSelected ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => {handleSeatClick(seatNumber) 
                            setPrice(prices.business)}}
          >
            {seatNumber}
          </div>
        );
      }
    }

    return seatGrid;
  };

  const renderComfortSeats = () => {
    const rows = comfortRows;
    // const seatsPerRow = seatsPerRow;

    const seatGrid = [];

    for (let row = businessRows + 1 ; row <= businessRows + rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${row}${String.fromCharCode(64 + seat)}`;
        const isSelected = selectedSeat.includes(seatNumber);

        seatGrid.push(
          <div
            key={seatNumber}
            className={`cursor-pointer p-2 border border-gray-300 rounded ${
              isSelected ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => {handleSeatClick(seatNumber) 
              setPrice(prices.comfort)}}
>
            {seatNumber}
          </div>
        );
      }
    }

    return seatGrid;
  };

  const renderSeats = () => {
    const rows = economyRows;
    // const seatsPerRow = seatsPerRow;

    const seatGrid = [];

    for (let row = 1 + businessRows + comfortRows; row <= rows + 1 + businessRows + comfortRows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${row}${String.fromCharCode(64 + seat)}`;
        const isSelected = selectedSeat.includes(seatNumber);

        seatGrid.push(
          <div
            key={seatNumber}
            className={`cursor-pointer p-2 border border-gray-300 rounded ${
              isSelected ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => {handleSeatClick(seatNumber) 
              setPrice(prices.economy)}}
>
            {seatNumber}
          </div>
        );
      }
    }

    return seatGrid;
  };

  return (
    
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Select Your Seat</h2>
      <h3 className="text-1xl font-bold mb-4">Business: ${prices.business}</h3>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        {renderBusinessSeats()}
      </div>
      <h3 className="text-1xl font-bold mb-4">Comfort: $ {prices.comfort}</h3>
      <div className="grid grid-cols-6 gap-4 max-w-md mx-auto">
        {renderComfortSeats()}
      </div>
      <h3 className="text-1xl font-bold mb-4">Economy$ {prices.economy}</h3>
      <div className="grid grid-cols-6 gap-4 max-w-md mx-auto">
        {renderSeats()}
      </div>
      <p className="mt-4">Selected Seat: {selectedSeat}</p>
        <button
          onClick={handleClick}
          class="flex mx-auto text-white mb-16 bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
        >
          Continue
        </button>
    </div>
  );
};

export default SelectSeat;
