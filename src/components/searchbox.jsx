import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBus, FaCalendarAlt, FaSearch } from "react-icons/fa";
import { MdSwapHoriz } from "react-icons/md";
import { cities } from "../data/buses";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBox = () => {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDay, setActiveDay] = useState("today");
  const [womenBooking, setWomenBooking] = useState(false);

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const fromRef = useRef();
  const toRef = useRef();

  const formatDate = (date) => date.toISOString().split("T")[0];

  const getToday = () => new Date();

  const getTomorrow = () => {
    const t = new Date();
    t.setDate(t.getDate() + 1);
    return t;
  };

  // CLOSE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (fromRef.current && !fromRef.current.contains(e.target)) {
        setFromSuggestions([]);
      }
      if (toRef.current && !toRef.current.contains(e.target)) {
        setToSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFromChange = (value) => {
    setFrom(value);
    setFromSuggestions(
      cities.filter((c) =>
        c.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleToChange = (value) => {
    setTo(value);
    setToSuggestions(
      cities.filter((c) =>
        c.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSearch = () => {
    if (!from || !to) {
      alert("Please enter both locations");
      return;
    }

    navigate(
      `/search?from=${from}&to=${to}&date=${formatDate(
        selectedDate
      )}&womenBooking=${womenBooking}`
    );
  };

  return (
    <div className="max-w-6xl mx-auto">

      {/* MAIN BOX */}
      <div className="bg-white rounded-3xl h-auto shadow-md p-3 pb-10 flex items-center justify-between">

        {/* LEFT SECTION */}
        <div className="flex items-center flex-1 border border-black rounded-2xl bg-white">

          {/* FROM */}
          <div
            ref={fromRef}
            className="flex items-center gap-2 px-4 py-2 flex-1 border-r border-black relative"
          >
            <FaBus className="text-gray-500" />

            <div className="w-full">
              <p className="text-xs text-gray-500">From</p>
              <input
                value={from}
                onChange={(e) => handleFromChange(e.target.value)}
                placeholder="Enter city"
                className="w-full outline-none text-black font-semibold text-sm"
              />

              {fromSuggestions.length > 0 && (
                <div className="absolute top-full mt-2 left-0 w-full bg-white text-black border shadow-xl rounded-lg z-[999]">
                  {fromSuggestions.map((city, i) => (
                    <p
                      key={i}
                      onClick={() => {
                        setFrom(city);
                        setFromSuggestions([]);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {city}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* SWAP */}
          <button
            onClick={() => {
              setFrom(to);
              setTo(from);
            }}
            className="px-3"
          >
            <div className="bg-gray-200 p-2 rounded-full">
              <MdSwapHoriz />
            </div>
          </button>

          {/* TO */}
          <div
            ref={toRef}
            className="flex items-center gap-2 px-4 py-2 flex-1 border-r border-black relative"
          >
            <FaBus className="text-gray-500" />

            <div className="w-full">
              <p className="text-xs text-gray-500">To</p>
              <input
                value={to}
                onChange={(e) => handleToChange(e.target.value)}
                placeholder="Enter destination"
                className="w-full outline-none text-black font-semibold text-sm"
              />

              {toSuggestions.length > 0 && (
                <div className="absolute top-full mt-2 left-0 w-full bg-white text-black border shadow-xl rounded-lg z-[999]">
                  {toSuggestions.map((city, i) => (
                    <p
                      key={i}
                      onClick={() => {
                        setTo(city);
                        setToSuggestions([]);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {city}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* DATE */}
          <div className="flex items-center gap-3 px-4 py-2 border-r border-black">
            <FaCalendarAlt className="text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Date of Journey</p>

              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);

                  const today = formatDate(getToday());
                  const tomorrow = formatDate(getTomorrow());
                  const selected = formatDate(date);

                  if (selected === today) setActiveDay("today");
                  else if (selected === tomorrow) setActiveDay("tomorrow");
                  else setActiveDay("custom");
                }}
                className="outline-none text-black font-semibold text-sm bg-transparent"
              />
            </div>
          </div>

          {/* TODAY / TOMORROW */}
          <div className="flex gap-2 px-4 py-2">
            <button
              onClick={() => {
                setSelectedDate(getToday());
                setActiveDay("today");
              }}
              className={`px-3 py-1 rounded-full text-sm ${
                activeDay === "today"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Today
            </button>

            <button
              onClick={() => {
                setSelectedDate(getTomorrow());
                setActiveDay("tomorrow");
              }}
              className={`px-3 py-1 rounded-full text-sm ${
                activeDay === "tomorrow"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Tomorrow
            </button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 border border-black rounded-2xl px-4 py-2 ml-4 bg-white">
          <img
            src="https://static.vecteezy.com/system/resources/previews/029/271/069/non_2x/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <p className="text-sm font-semibold text-black">
              Booking for women
            </p>
            <p className="text-xs text-blue-500 cursor-pointer">
              Know more
            </p>
          </div>

          <button
            onClick={() => setWomenBooking(!womenBooking)}
            className={`w-10 h-5 rounded-full relative ${
              womenBooking ? "bg-red-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition ${
                womenBooking ? "translate-x-5" : ""
              }`}
            />
          </button>
        </div>

      </div>

      {/* SEARCH BUTTON */}
      <div className="flex justify-center -mt-6 w-full">
        <button
          onClick={handleSearch}
          className="bg-red-500 text-white px-40 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg"
        >
          <FaSearch />
          Search buses
        </button>
      </div>

    </div>
  );
};

export default SearchBox;