// Header.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Calcul IMC", path: "/imc" },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">IMC App</h1>

        {/* Menu desktop */}
        <nav className="desktop-menu">
          <ul>
            {navItems.map((item) => (
              <li
                key={item.name}
                className={location.pathname === item.path ? "active" : ""}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile burger */}
        <div className="mobile-burger" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Menu mobile */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.name} onClick={() => setMenuOpen(false)}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
