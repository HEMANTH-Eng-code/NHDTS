import { useState } from "react";
import "../styles/Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: string }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(
        "https://nhdts.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Message sent successfully! We'll be in touch soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please check your connection and try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section className="contact">
      <div className="container">

        <div className="contact-heading">
          <span className="section-tag">CONTACT NHDTS</span>
          <h2>
            Let's Build Something<span> Amazing Together</span>
          </h2>
          <p>
            Tell us about your idea and our team will contact you as
            soon as possible.
          </p>
        </div>

        <div className="contact-wrapper">

          <div className="contact-info">

            <div className="info-card">
              <div className="info-icon"><FaEnvelope /></div>
              <div>
                <h3>Email</h3>
                <p>contact@nhdts.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div>
                <h3>Phone</h3>
                <p>+91 9110344543</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaWhatsapp /></div>
              <div>
                <h3>WhatsApp</h3>
                <p>+91 9110344543</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div>
                <h3>Office</h3>
                <p>Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaClock /></div>
              <div>
                <h3>Business Hours</h3>
                <p>Mon - Sat | 9:00 AM - 7:00 PM</p>
              </div>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className={`form-status ${status.type}`}>
                {status.message}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;