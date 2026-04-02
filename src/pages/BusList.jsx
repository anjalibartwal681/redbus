import { buses } from "../data/buses";
import { useState } from "react";
import SeatLayout from "../components/SeatLayout";
import "../../src/index.css";
import SeatModal from "../components/SeatModal";

const BusList = () => {
  const [showModal, setShowModal] = useState(false); // ✅ ADD
  const [activeBus, setActiveBus] = useState(null);  // ✅ ADD

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Available Buses</h1>

      <div className="flex flex-col gap-4">
        {buses.map((bus) => (
          <div
            key={bus.id}
            className="bg-white shadow-md p-5 rounded-xl flex justify-between items-center hover:shadow-lg transition"
          >
            {/* LEFT */}
            <div>
              <h2 className="font-bold text-lg">{bus.name}</h2>

              <p className="text-gray-500 text-sm mt-1">
                {bus.from} → {bus.to}
              </p>

              <p className="text-gray-600 text-sm">{bus.time}</p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end gap-2">
              <p className="text-red-500 font-bold text-lg">
                ₹{bus.price}
              </p>

              {/* ✅ OPEN MODAL */}
              <button
                onClick={() => {
                  setActiveBus(bus);   // ✅ set bus
                  setShowModal(true);  // ✅ open modal
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full shadow"
              >
                View Seats
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
   <SeatModal
  show={showModal}
  onClose={() => setShowModal(false)}
  bus={activeBus}
/>
    </div>
  );
};

export default BusList;