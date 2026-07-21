import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import "../styles/About.css";

const values = [
  {
    title: "Quality First",
    desc: "We don't ship shortcuts. Every solution is built to last, not just to launch.",
  },
  {
    title: "Real Partnership",
    desc: "We work as an extension of your team, not just an outside vendor.",
  },
  {
    title: "Honest Communication",
    desc: "Clear timelines, clear pricing, clear updates — no surprises.",
  },
];

const About = () => {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <span className="section-tag">ABOUT NHDTS</span>
          <h1 className="about-hero-title">
            Building Digital Solutions That Drive Business Growth
          </h1>
          <p className="about-hero-subtitle">
            NHDTS is a technology-driven software company dedicated to
            helping businesses turn ideas into powerful digital products.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid">

          <div className="about-story-content">
            <span className="section-tag">OUR STORY</span>
            <h2>Founded to Solve Real Business Problems</h2>
            <p>
              NHDTS started with a simple belief — that great software
              shouldn't be reserved for big companies with big budgets.
              We set out to bring the same level of quality, care, and
              engineering discipline to businesses of every size.
            </p>
            <p>
              Today, we work with founders, startups, and growing teams
              to build software that actually solves their problems,
              not just software that looks good in a pitch deck.
            </p>
          </div>

          <div className="about-cards">

            <div className="about-card">
              <div className="about-card-icon"><FaBullseye /></div>
              <h3>Our Mission</h3>
              <p>
                Deliver innovative digital solutions that empower
                businesses to grow, automate processes, and achieve
                sustainable success.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon"><FaEye /></div>
              <h3>Our Vision</h3>
              <p>
                Become a globally trusted technology partner recognized
                for innovation, reliability, and customer success.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="about-values">
        <div className="container">

          <div className="section-header">
            <span className="section-tag">WHAT WE STAND FOR</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon"><FaHeart /></div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default About;