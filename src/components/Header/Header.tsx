import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";
// Menu burger en Unicode pour remplacer HiMenu/HiX
const MenuIcon = ({ open }: { open: boolean }) => (
  <span style={{ fontSize: "24px", cursor: "pointer" }}>{open ? "✖" : "☰"}</span>
);

const isLoggedIn = false; // Remplace par ton contexte utilisateur

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    console.log("Déconnexion");
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="header">
      <div className="header-container">
        <h1 className="logo">IMC App</h1>

        <ul className="menu desktop-menu">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/imc">Calcul IMC</Link>
          </li>
          <li>
            <Link to="/history">Historique</Link>
          </li>
        </ul>

        <div className="user-section desktop-menu">
          <FaUserCircle className="user-icon" />
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn">
              Déconnexion
            </button>
          ) : (
            <Link to="/login" className="btn">
              Connexion
            </Link>
          )}
        </div>

        {/* Menu burger mobile */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <MenuIcon open={menuOpen} />
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <ul className="menu mobile-menu">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
          </li>
          <li>
            <Link to="/imc" onClick={() => setMenuOpen(false)}>Calcul IMC</Link>
          </li>
          <li>
            <Link to="/history" onClick={() => setMenuOpen(false)}>Historique</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="btn mobile-btn">
                Déconnexion
              </button>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)} className="mobile-btn">
                Connexion
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
