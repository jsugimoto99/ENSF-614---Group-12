// SelectSeat.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SelectSeat = ({ selectedFlight }) => {
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = useState([]);

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
    navigate(`/flights/insurance/${paramName}?selectedFlight=${selectedFlight}&selectedSeat=${selectedSeat}`);
 
  };
  const [isSeatVisible, setSeatVisible] = useState(false);
  const toggleSeat = () => {
    setSeatVisible(!isSeatVisible);
  };

  const renderSeats = () => {
    const rows = 4;
    const seatsPerRow = 6;

    const seatGrid = [];

    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${row}${String.fromCharCode(64 + seat)}`;
        const isSelected = selectedSeat.includes(seatNumber);

        seatGrid.push(
          <div
            key={seatNumber}
            className={`cursor-pointer p-2 border border-gray-300 rounded ${
              isSelected ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
    }

    return seatGrid;
  };

  const renderBusinessSeats = () => {
    const rows = 2;
    const seatsPerRow = 4;

    const seatGrid = [];

    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${row}${String.fromCharCode(64 + seat)}`;
        const isSelected = selectedSeat.includes(seatNumber);

        seatGrid.push(
          <div
            key={seatNumber}
            className={`cursor-pointer p-2 border border-gray-300 rounded ${
              isSelected ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
    }

    return seatGrid;
  };

  const renderComfortSeats = () => {
    const rows = 3;
    const seatsPerRow = 6;

    const seatGrid = [];

    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${row}${String.fromCharCode(64 + seat)}`;
        const isSelected = selectedSeat.includes(seatNumber);

        seatGrid.push(
          <div
            key={seatNumber}
            className={`cursor-pointer p-2 border border-gray-300 rounded ${
              isSelected ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleSeatClick(seatNumber)}
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
      <h3 className="text-1xl font-bold mb-4">Business</h3>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        {renderBusinessSeats()}
      </div>
      <h3 className="text-1xl font-bold mb-4">Comfort</h3>
      <div className="grid grid-cols-6 gap-4 max-w-md mx-auto">
        {renderComfortSeats()}
      </div>
      <h3 className="text-1xl font-bold mb-4">Economy</h3>
      <div className="grid grid-cols-6 gap-4 max-w-md mx-auto">
        {renderSeats()}
      </div>
      <p className="mt-4">Selected Seat: {selectedSeat}</p>
        <button
          onClick={handleClick}
          class="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
        >
          Continue
        </button>
    </div>
  );
};

export default SelectSeat;
