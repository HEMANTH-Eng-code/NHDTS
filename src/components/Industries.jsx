import "../styles/Industries.css";

import {
  FaHeartbeat,
  FaGraduationCap,
  FaUniversity,
  FaShoppingCart,
  FaTruck,
  FaIndustry,
  FaBuilding,
  FaPlaneDeparture,
  FaRocket,
  FaLandmark
} from "react-icons/fa";

const industries = [
  {
    icon: <FaHeartbeat />,
    title: "Healthcare",
    description:
      "Secure healthcare applications, hospital management systems, patient portals, and telemedicine platforms."
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description:
      "Learning Management Systems, e-learning platforms, student portals, and digital classrooms."
  },
  {
    icon: <FaUniversity />,
    title: "Banking & Finance",
    description:
      "Secure fintech applications, digital banking solutions, payment systems, and financial analytics."
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    description:
      "Scalable online stores, B2B marketplaces, inventory management, and payment integrations."
  },
  {
    icon: <FaTruck />,
    title: "Logistics",
    description:
      "Fleet management, shipment tracking, warehouse automation, and logistics software."
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing",
    description:
      "ERP solutions, production monitoring, automation, and industrial software."
  },
  {
    icon: <FaBuilding />,
    title: "Real Estate",
    description:
      "Property management systems, CRM platforms, and real estate marketplaces."
  },
  {
    icon: <FaPlaneDeparture />,
    title: "Travel & Hospitality",
    description:
      "Booking platforms, hotel management systems, tourism portals, and travel applications."
  },
  {
    icon: <FaRocket />,
    title: "Startups",
    description:
      "MVP development, scalable cloud applications, AI integration, and rapid product development."
  },
  {
    icon: <FaLandmark />,
    title: "Government",
    description:
      "Secure citizen services, e-governance platforms, workflow automation, and digital transformation."
  }
];

const Industries = () => {
  return (
    <section className="industries">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            INDUSTRIES WE SERVE
          </span>

          <h2>
            Technology Solutions for
            <span> Every Industry</span>
          </h2>

          <p>
            We help organizations across multiple industries accelerate
            digital transformation with secure, scalable, and future-ready
            software solutions.
          </p>

        </div>

        <div className="industries-grid">

          {industries.map((industry, index) => (

            <div
              className="industry-card"
              key={index}
            >

              <div className="industry-icon">
                {industry.icon}
              </div>

              <h3>
                {industry.title}
              </h3>

              <p>
                {industry.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Industries;