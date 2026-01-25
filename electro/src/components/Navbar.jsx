import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <NavLink to="/" className="text-blue-800 font-bold text-lg md:text-xl">
          ShopEase
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-blue-800 transition ${
                    isActive ? "text-blue-800" : "text-black"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Profile Button - Desktop */}
        <Link
          to="/profile"
          className="hidden md:block bg-black text-white px-4 py-1 rounded hover:bg-blue-600 transition"
        >
          Profile
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl cursor-pointer focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `cursor-pointer hover:text-blue-800 transition ${
                      isActive ? "text-blue-800" : "text-black"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            {/* Mobile Profile Button */}
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="bg-black text-white px-4 py-1 rounded hover:bg-blue-600 transition"
            >
              Profile
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
