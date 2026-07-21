import { Link } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow"></div>

      <div className="container hero-container">

        <span className="hero-tag">NEXT GENERATION SOFTWARE COMPANY</span>

        <h1 className="hero-title">
          Building Digital <span className="highlight">Products</span> For
          The Future
        </h1>

        <p className="hero-description">
          NHDTS delivers custom software, websites, mobile apps, enterprise
          systems, cloud infrastructure and AI-powered solutions that help
          businesses grow faster and operate smarter.
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="primary-btn">
            Request Consultation
          </Link>
          <Link to="/services" className="secondary-btn">
            Explore Services
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h3>150+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>99%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;