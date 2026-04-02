// components/SeatLayout.jsx
import { useState } from "react";
import Seat from "./seat";


const SeatLayout = ({ price }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const total = selectedSeats.length * price;

  return (
    <>
    <div className="grid grid-cols-5 gap-3 w-full max-w-md mx-auto">
  {Array.from({ length: 40 }, (_, i) => {
    const seatNumber = i + 1;

    // Skip middle column (aisle)
    if ((i + 1) % 5 === 3) {
      return <div key={i}></div>;
    }

    return (
      
      <Seat
        key={seatNumber}
        number={seatNumber}
        isSelected={selectedSeats.includes(seatNumber)}
        onClick={handleSeat}
        price={price}
      />
    );
  })}
</div>

      <div className="mt-4">
        <p>Seats: {selectedSeats.join(", ")}</p>
        <p className="font-bold">Total: ₹{total}</p>
      </div>
    </>
  );
};

export default SeatLayout;