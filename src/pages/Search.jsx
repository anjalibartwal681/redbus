import { useLocation, useNavigate } from "react-router-dom";
import { buses } from "../data/buses";
import { useState } from "react";
import SearchBox from "../components/searchbox";
import ViewBusesCard from "../components/viewBusCard";
import SeatModal from "../components/SeatModal";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const normalize = (str) => str.toLowerCase().trim();

  const from = normalize(query.get("from") || "");
  const to = normalize(query.get("to") || "");

  const [showModal, setShowModal] = useState(false);
  const [activeBus, setActiveBus] = useState(null);

  // ✅ FILTER BUSES
  const filteredBuses = buses.filter(
    (bus) =>
      normalize(bus.from).includes(from) &&
      normalize(bus.to).includes(to)
  );

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔴 SEARCH BAR (STICKY) */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <div className="px-2 sm:px-4 py-3">
          <SearchBox />
        </div>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 mt-6">

        {/* HEADER */}
        <h2 className="mb-4 font-bold text-base sm:text-lg">
          {filteredBuses.length} buses found
        </h2>

        {/* TOP CARD */}
        <div className="bg-white shadow-md p-4 rounded-lg mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          
          <div>
            <h2 className="font-bold text-base sm:text-lg">
              See All Available Buses
            </h2>
            <p className="text-gray-500 text-sm">
              Click to view all buses
            </p>
          </div>

          <button
            onClick={() => navigate("/bus-list")}
            className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            View Buses
          </button>
        </div>

        {/* ✅ BUS LIST */}
        {filteredBuses.length > 0 ? (
          <div className="flex flex-col gap-4">
            {filteredBuses.map((bus) => (
              <ViewBusesCard
                key={bus.id}
                bus={bus}
                onShow={() => {
                  setActiveBus(bus);
                  setShowModal(true);
                }}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No buses found 😔
          </p>
        )}
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

export default SearchPage;