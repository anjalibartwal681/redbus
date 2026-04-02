import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      
      {/* TOP NAV */}
      <div className="flex justify-between items-center px-4 md:px-10 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500">
          redBus
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-red-500">Bus Tickets</Link>
          <Link to="/" className="hover:text-red-500">Train Tickets</Link>
          <Link to="/" className="hover:text-red-500">Offers</Link>
        </div>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="hidden md:flex gap-6 items-center">
          <span className="cursor-pointer hover:text-red-500">Help</span>
          <span className="cursor-pointer hover:text-red-500">Bookings</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t">

          <Link to="/" className="block hover:text-red-500">
            Bus Tickets
          </Link>

          <Link to="/" className="block hover:text-red-500">
            Train Tickets
          </Link>

          <Link to="/" className="block hover:text-red-500">
            Offers
          </Link>

          <hr />

          <span className="block cursor-pointer hover:text-red-500">
            Help
          </span>

          <span className="block cursor-pointer hover:text-red-500">
            Bookings
          </span>

          <button className="w-full bg-red-500 text-white py-2 rounded">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;