import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-top">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="NHDTS Logo" />
            <span>NHDTS</span>
          </Link>
          <p>
            Building custom software, websites, mobile apps, and
            AI-powered solutions that help businesses grow faster
            and operate smarter.
          </p>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/gudla-hemanth-3b4257284" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://x.com/nhdtsofficial" target="_blank" rel="noopener noreferrer" title="Twitter / X">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/nhdts.official/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://github.com/HEMANTH-Eng-code" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <Link to="/services">Custom Software</Link>
          <Link to="/services">Web Development</Link>
          <Link to="/services">Mobile Apps</Link>
          <Link to="/services">Cloud Solutions</Link>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>

          <a href="mailto:contact@nhdts.com" className="footer-contact-item">
            <FaEnvelope /> contact@nhdts.com
          </a>

          <a href="tel:+919110344543" className="footer-contact-item">
            <FaPhoneAlt /> +91 9110344543
          </a>

          <div className="footer-contact-item">
            <FaMapMarkerAlt /> Hyderabad, Telangana, India
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} NHDTS. All rights reserved.</p>
          <p>Next Horizon Digital Technology Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;