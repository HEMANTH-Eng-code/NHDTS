import { Link } from "react-router-dom";
import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaBuilding,
  FaCloud,
  FaRobot,
  FaCheck,
} from "react-icons/fa";
import "../styles/Services.css";

const services = [
  {
    icon: <FaCode />,
    title: "Custom Software Development",
    desc: "We design and build software tailored precisely to how your business actually works, not the other way around.",
    features: [
      "Requirement analysis & system design",
      "Scalable architecture from day one",
      "Ongoing maintenance & support",
    ],
  },
  {
    icon: <FaGlobe />,
    title: "Web Development",
    desc: "Fast, secure, responsive websites and web applications built for performance, SEO, and conversions.",
    features: [
      "Responsive, mobile-first design",
      "SEO & performance optimization",
      "Custom CMS & admin dashboards",
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    desc: "Native-quality Android and iOS apps with clean, modern interfaces your users will actually enjoy using.",
    features: [
      "Cross-platform & native development",
      "Intuitive UI/UX design",
      "App Store & Play Store deployment",
    ],
  },
  {
    icon: <FaBuilding />,
    title: "Enterprise Solutions",
    desc: "Business systems that automate operations, connect departments, and scale as your company grows.",
    features: [
      "Workflow automation",
      "Systems integration & APIs",
      "Role-based access & security",
    ],
  },
  {
    icon: <FaCloud />,
    title: "Cloud Services",
    desc: "Reliable cloud architecture, migration, and infrastructure management so your systems stay fast and available.",
    features: [
      "Cloud migration & deployment",
      "Infrastructure as code",
      "Monitoring & 24/7 uptime support",
    ],
  },
  {
    icon: <FaRobot />,
    title: "AI Solutions",
    desc: "Practical, intelligent automation that reduces manual work and gives your business a genuine edge.",
    features: [
      "AI-powered automation tools",
      "Data-driven insights & dashboards",
      "Custom AI integrations",
    ],
  },
];

const Services = () => {
  return (
    <>
      <section className="services-hero">
        <div className="container">
          <span className="section-tag">OUR SERVICES</span>
          <h1 className="services-hero-title">
            Technology Solutions Built Around Your Business
          </h1>
          <p className="services-hero-subtitle">
            From custom software to AI-powered automation, we deliver
            end-to-end solutions that help businesses grow faster and
            operate smarter.
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">

          {services.map((service, index) => (
            <div className="service-row" key={index}>

              <div className="service-icon-large">{service.icon}</div>

              <div className="service-details">
                <h2>{service.title}</h2>
                <p>{service.desc}</p>

                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheck className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Not Sure Which Service You Need?</h2>
          <p>
            Tell us about your business and we'll recommend the right
            solution — no pressure, no jargon.
          </p>
          <Link to="/contact" className="primary-btn">
            Talk To Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;