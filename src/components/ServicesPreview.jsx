import { Link } from "react-router-dom";
import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaBuilding,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import "../styles/ServicesPreview.css";

const services = [
  {
    icon: <FaCode />,
    title: "Custom Software",
    desc: "Scalable software solutions tailored precisely to your business workflows.",
  },
  {
    icon: <FaGlobe />,
    title: "Web Development",
    desc: "Fast, secure and responsive websites built for performance and growth.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "Native-quality Android and iOS apps with modern, intuitive interfaces.",
  },
  {
    icon: <FaBuilding />,
    title: "Enterprise Solutions",
    desc: "Robust systems that automate operations and scale with your business.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Services",
    desc: "Reliable cloud architecture, deployment and infrastructure management.",
  },
  {
    icon: <FaRobot />,
    title: "AI Solutions",
    desc: "Intelligent automation and AI-driven tools for modern businesses.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="services-preview">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">WHAT WE DO</span>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            End-to-end technology solutions designed to help your business
            grow faster and operate smarter.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/services" className="services-link">
            View All Services →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;