import { useNavigate } from "react-router-dom";

const BusCard = ({ bus }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4 flex justify-between items-center">
      
      {/* LEFT */}
      <div>
        <h2 className="text-lg font-bold">{bus.name}</h2>
        <p className="text-gray-500">
          {bus.departure} → {bus.arrival}
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end gap-2">
        <p className="text-red-500 font-bold text-lg">₹{bus.price}</p>

        <div className="flex gap-2 flex-wrap justify-end">
          
          <button
            onClick={() => navigate(`/bus/${bus.id}`)}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            View Buses
          </button>
          <button
            onClick={() => navigate(`/seat/${bus.id}`)}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            View Seats
          </button>

        </div>
      </div>
    </div>
  );
};

export default BusCard;