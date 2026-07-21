import {
  FaBolt,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import "../styles/WhyChoose.css";

const reasons = [
  {
    icon: <FaBolt />,
    title: "Fast Delivery",
    desc: "Agile development process that gets your product to market quickly without cutting corners.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliable & Secure",
    desc: "Enterprise-grade security practices built into every solution we deliver.",
  },
  {
    icon: <FaUsers />,
    title: "Dedicated Team",
    desc: "A committed team of engineers who understand your business, not just your brief.",
  },
  {
    icon: <FaChartLine />,
    title: "Built to Scale",
    desc: "Architecture designed to grow with your business, from first users to millions.",
  },
];

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <div className="container">

        <div className="why-grid">

          <div className="why-content">
            <span className="section-tag">WHY NHDTS</span>
            <h2 className="section-title">
              Built On Trust, Delivered With Precision
            </h2>
            <p className="section-subtitle">
              We combine technical expertise with genuine business
              understanding to build software that actually moves your
              company forward.
            </p>
          </div>

          <div className="why-cards">
            {reasons.map((reason, index) => (
              <div className="why-card" key={index}>
                <div className="why-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;