import { MdEventSeat } from "react-icons/md";

const Seat = ({ number, isSelected, isBooked, onClick }) => {
  return (
    <div
      onClick={() => !isBooked && onClick(number)}
      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
        flex flex-col items-center justify-center 
        rounded-md border transition-all duration-200 
        text-[10px] sm:text-xs font-medium
        ${
          isBooked
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : isSelected
            ? "bg-green-500 text-white border-green-500 shadow-md scale-105"
            : "bg-white text-gray-700 border-gray-300 hover:border-red-400 hover:text-red-500 cursor-pointer"
        }`}
    >
      <MdEventSeat className="text-base sm:text-lg md:text-xl" />

      {/* OPTIONAL seat number */}
      <span className="hidden sm:block text-[10px]">{number}</span>
    </div>
  );
};

export default Seat;