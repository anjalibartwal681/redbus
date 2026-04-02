import { useNavigate } from "react-router-dom";

const ViewBusesCard = ({ bus, index, onShow }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center">
      
      {/* LEFT */}
      <div>
        <h2 className="font-bold text-lg">{bus.name}</h2>
        <p className="text-gray-500">
          {bus.departure} → {bus.arrival}
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end gap-2">
        <p className="text-red-500 font-bold">₹{bus.price}</p>

        {/* 🔥 CONDITION */}
        {index === 0 ? (
          // ✅ FIRST CARD → VIEW BUSES (redirect page)
          <button
            onClick={() => navigate(`/bus/${bus.id}`)}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            View Buses
          </button>
        ) : (
          // ✅ OTHER CARDS → VIEW SEATS (modal)
          <button
            onClick={onShow}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            View Seats
          </button>
        )}
      </div>
    </div>
  );
};

export default ViewBusesCard;