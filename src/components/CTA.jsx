import { Link } from "react-router-dom";
import "../styles/CTA.css";

const CTA = () => {
  return (
    <section className="cta">

      <div className="cta-glow glow-one"></div>
      <div className="cta-glow glow-two"></div>

      <div className="container">

        <div className="cta-box">

          <span className="cta-tag">
            LET'S BUILD TOGETHER
          </span>

          <h2>
            Transform Your Ideas Into
            <span> Powerful Digital Solutions</span>
          </h2>

          <p>
            Whether you're a startup, enterprise, or growing business,
            NHDTS helps you build modern software, scalable applications,
            AI-powered solutions, and digital experiences that drive
            measurable results.
          </p>

          <div className="cta-buttons">

            <Link
              to="/contact"
              className="cta-primary"
            >
              Start Your Project
            </Link>

            <Link
              to="/about"
              className="cta-secondary"
            >
              Learn More
            </Link>

          </div>

          <div className="cta-features">

            <div>
              ✅ Free Consultation
            </div>

            <div>
              ✅ Custom Solutions
            </div>

            <div>
              ✅ Enterprise Security
            </div>

            <div>
              ✅ Dedicated Support
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;