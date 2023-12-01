// SelectSeat.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SelectSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      setSelectedSeats([seat]);
    }
  };

  const [isSeatVisible, setSeatVisible] = useState(false);
  const toggleSeat = () => {
    setSeatVisible(!isSeatVisible);
  };

  const renderSeats = () => {
    const rows = 6;
    const seatsPerRow = 2;

    const seatGrid = [];

    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat < seatsPerRow; seat++) {
        const seatNumber = `${row}${String.fromCharCode(64 + seat)}`;
        const isSelected = selectedSeats.includes(seatNumber);

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
      <h3 className="text-1xl font-bold mb-4">Business Class</h3>
      <div className="grid grid-cols-6 gap-4 max-w-md mx-auto">
        {renderSeats()}
      </div>
      <p className="mt-4">Selected Seat: {selectedSeats}</p>
      <Link to='/flights/insurance'>
        <button
          
          class="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
        >
          Continue
        </button>
      </Link>
    </div>
  );
};

export default SelectSeat;
