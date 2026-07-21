import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="NHDTS Logo" />
          <span className="navbar-logo-text">NHDTS</span>
        </NavLink>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu} end>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

          <div className="navbar-icons-mobile">
            <a href="tel:+919110344543" title="Call Us"><FaPhoneAlt /></a>
            <a href="mailto:contact@nhdts.com" title="Email Us"><FaEnvelope /></a>
          </div>
        </nav>

        <div className="navbar-actions">

          <div className="navbar-icons">
            <a href="tel:+919110344543" title="Call Us"><FaPhoneAlt /></a>
            <a href="mailto:contact@nhdts.com" title="Email Us"><FaEnvelope /></a>
          </div>

          <NavLink to="/contact" className="navbar-cta">
            Request Consultation
          </NavLink>

          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;