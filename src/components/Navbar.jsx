import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-semibold">
            YourLogo
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/tv" className="hover:text-gray-400">TV</Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-xl text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900">
          <ul className="text-center py-4">
            <li>
              <Link to="/" className="block py-3 hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/movie" className="block py-3 hover:text-gray-400">Movies</Link>
            </li>
            <li>
              <Link to="/tv" className="block py-3 hover:text-gray-400">TV</Link>
            </li>
           
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;