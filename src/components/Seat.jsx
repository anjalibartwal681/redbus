import { MdEventSeat } from "react-icons/md";

const Seat = ({ number, isSelected, isBooked, onClick }) => {
  return (
    <div
      onClick={() => !isBooked && onClick(number)}
      className={`w-10 h-10 flex flex-col items-center justify-center rounded-md border transition-all duration-200 text-xs font-medium
        ${
          isBooked
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : isSelected
            ? "bg-green-500 text-white border-green-500 shadow-md scale-105"
            : "bg-white text-gray-700 border-gray-300 hover:border-red-400 hover:text-red-500 cursor-pointer"
        }`}
    >
      <MdEventSeat size={18} />
      {/* <span className="text-[10px]">{number}</span> */}
    </div>
  );
};

export default Seat;