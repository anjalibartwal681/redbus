import SeatLayout from "./SeatLayout";

const SeatModal = ({ show, onClose, bus }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-end z-50">

      {/* 🔥 MODAL */}
      <div className="bg-white w-full max-w-8xl h-[90vh]  py-8 rounded-t-xl overflow-hidden relative animate-slideUp">

        {/* CLOSE */}
        <div className="flex flex-row gap-4">
          <div>
                   <button
          onClick={onClose}
          className="top-6 left-6 text-sm"
        >
          ✖
        </button>

        {/* HEADER */}
        <div className="p-4 pl-4 border-b">
          <h2 className="font-semibold">
            {bus?.from} → {bus?.to}
          </h2>

          <div className="flex gap-6 mt-2 text-sm">
            <span className="text-red-500 font-semibold">1. Select seats</span>
       
          </div>
        </div>
        </div>
          </div>
       
    

        {/* CONTENT */}
        <div className="flex h-full pb-20">

          {/* LEFT */}
          <div className="w-1/2 p-4 overflow-y-auto border-r">
            <SeatLayout price={bus?.price} />
          </div>

          {/* RIGHT */}
          <div className="w-1/2 p-4 overflow-y-auto">
          

            <h2 className="font-bold text-lg">
              {bus?.name}
            </h2>

            <p className="text-gray-500 text-sm">
              {bus?.time}
            </p>

            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded inline-block mt-2">
              4.2 ⭐
            </span>

            <div className="flex gap-2 mt-4">
                <img
    src={bus?.image}
    alt={bus?.name}
    className=" w-full object-contain border rounded p-1 bg-white"
  />
            </div>

            <div className="flex gap-4 mt-6 text-sm border-b pb-2">
              <span className="text-red-500 font-semibold">Why book this bus?</span>
              <span>Boarding point</span>
              <span>Dropping point</span>
            </div>

            <p className="mt-4 text-gray-600 text-sm">
              Comfortable journey with AC seating.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatModal;