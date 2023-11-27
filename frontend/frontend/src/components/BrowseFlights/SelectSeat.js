// SelectSeat.js
import React, { useState } from "react";

const SelectSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const renderSeats = () => {
    const rows = 12;
    const seatsPerRow = 6;

    const seatGrid = [];

    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
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
      <div className="grid grid-cols-6 gap-4 max-w-md mx-auto">
        {renderSeats()}
      </div>
      <p className="mt-4">Selected Seats: {selectedSeats.join(", ")}</p>
    </div>
  );
};

export default SelectSeat;
