import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="w-full h-14 flex items-center justify-between px-6 md:px-20 shadow">
      {/* Logo */}

      <NavLink to="/" className="text-blue-800 font-semibold cursor-pointer">
        Electronic Store
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-12 font-medium">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `cursor-pointer hover:text-blue-800 ${
                  isActive ? "text-blue-800" : "text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <button className="hidden md:block cursor-pointer bg-black text-white px-4 py-1 rounded hover:bg-blue-600 transition">
        Contact
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `cursor-pointer ${
                      isActive ? "text-blue-800" : "text-black"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <button className="bg-black cursor-pointer text-white px-4 py-1 rounded hover:bg-blue-600 transition">
              Contact
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
