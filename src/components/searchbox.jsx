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

    if (!value) {
      setFromSuggestions([]);
      return;
    }

    setFromSuggestions(
      cities.filter((c) =>
        c.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleToChange = (value) => {
    setTo(value);

    if (!value) {
      setToSuggestions([]);
      return;
    }

    setToSuggestions(
      cities.filter((c) =>
        c.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSearch = (e) => {
    e?.preventDefault();

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
    <div className="max-w-6xl mx-auto px-3">

      {/* MAIN BOX */}
  <div className="bg-white rounded-3xl shadow-lg p-3 pb-6 md:pb-10 flex flex-col md:flex-row md:items-center justify-between gap-3">

        {/* LEFT SECTION */}
        <div className="flex flex-col md:flex-row flex-1 border border-gray-300 md:border-black rounded-2xl bg-white">

          {/* FROM */}
          <div
            ref={fromRef}
            className="flex items-center gap-2 px-4 py-3 md:py-2 w-full md:flex-1 border-b md:border-b-0 md:border-r border-gray-300 relative z-50"
          >
            <FaBus className="text-gray-500" />

            <div className="w-full relative">
              <p className="text-xs text-gray-500">From</p>

              <input
                value={from}
                onChange={(e) => handleFromChange(e.target.value)}
                placeholder="Enter city"
                className="w-full outline-none font-semibold text-sm"
              />

              {fromSuggestions.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white border shadow-xl rounded-lg z-[9999] max-h-40 overflow-y-auto">
                  {fromSuggestions.map((city, i) => (
                    <p
                      key={i}
                      onClick={() => {
                        setFrom(city);
                        setFromSuggestions([]);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {city}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* SWAP */}
          <div className="flex justify-center -mt-3 md:mt-0 md:px-3 z-10">
            <button
              type="button"
              onClick={() => {
                setFrom(to);
                setTo(from);
              }}
              className="bg-gray-200 p-2 rounded-full shadow"
            >
              <MdSwapHoriz />
            </button>
          </div>

          {/* TO */}
          <div
            ref={toRef}
            className="flex items-center gap-2 px-4 py-3 md:py-2 w-full md:flex-1 border-b md:border-b-0 md:border-r border-gray-300 relative"
          >
            <FaBus className="text-gray-500" />

            <div className="w-full relative">
              <p className="text-xs text-gray-500">To</p>

              <input
                value={to}
                onChange={(e) => handleToChange(e.target.value)}
                placeholder="Enter destination"
                className="w-full outline-none font-semibold text-sm"
              />

              {toSuggestions.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white border shadow-xl rounded-lg z-[9999] max-h-40 overflow-y-auto">
                  {toSuggestions.map((city, i) => (
                    <p
                      key={i}
                      onClick={() => {
                        setTo(city);
                        setToSuggestions([]);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {city}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* DATE */}
          <div className="flex items-center gap-3 px-4 py-3 md:py-2 w-full md:flex-1 border-b md:border-b-0 md:border-r border-gray-300">
            <FaCalendarAlt className="text-gray-500" />

            <div>
              <p className="text-xs text-gray-500">Date of Journey</p>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="outline-none font-semibold text-sm bg-transparent"
              />
            </div>
          </div>

          {/* TODAY / TOMORROW */}
          <div className="flex justify-end md:justify-start gap-2 px-4 py-3 md:py-2 w-full md:w-auto">
            <button
              type="button"
              onClick={() => {
                setSelectedDate(getToday());
                setActiveDay("today");
              }}
              className={`px-3 py-1 rounded-full text-sm ${
                activeDay === "today"
                  ? "bg-gray-300"
                  : "bg-gray-200"
              }`}
            >
              Today
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedDate(getTomorrow());
                setActiveDay("tomorrow");
              }}
              className={`px-3 py-1 rounded-full text-sm ${
                activeDay === "tomorrow"
                  ? "bg-red-200"
                  : "bg-gray-200"
              }`}
            >
              Tomorrow
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-between gap-3 border border-gray-300 md:border-black rounded-2xl px-4 py-3 md:py-2 bg-white w-full md:w-auto md:ml-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/029/271/069/non_2x/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />

          <div className="flex-1">
            <p className="text-sm font-semibold">Booking for women</p>
            <p className="text-xs text-blue-500 cursor-pointer">
              Know more
            </p>
          </div>

          <button
            type="button"
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
      <div className="flex justify-center mt-4 md:-mt-6 w-full">
    <button
      type="button"
      onClick={handleSearch}
      className="bg-red-500 text-white w-full md:w-auto px-6 md:px-40 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg"
    >
      <FaSearch />
      Search buses
    </button>
  </div>
    </div>
  );
};

export default SearchBox;