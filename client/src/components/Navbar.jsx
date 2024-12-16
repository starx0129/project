import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    // Placeholder logic for login
    setAuthenticated(true);
  };

  const logout = () => {
    // Placeholder logic for logout
    setAuthenticated(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold"
          >
            <FaPencilAlt className="text-2xl" /> {/* Logo icon */}
            <span>AI Writing Assistant</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            {authenticated && <NavLink to="/write">Write</NavLink>}
          </div>
        </div>
        <div>
          {/* {authenticated ? (
            <button
              onClick={logout}
              className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
            >
              Login
            </button>
          )} */}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-blue-200 transition duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
