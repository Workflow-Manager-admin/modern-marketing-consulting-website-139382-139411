import React from "react";
import "./App.css";
import HeroImage from "./assets/20250729_141349_KAVIA_Static_for_video4.png";

// PUBLIC_INTERFACE
function App() {
  // PUBLIC_INTERFACE
  const sections = [
    { id: "about", label: "About" },
    { id: "whyus", label: "Why Us" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  // PUBLIC_INTERFACE
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-wrapper">
      <nav className="navbar">
        <div className="navbar__brand">KAVIA Marketing Consulting</div>
        <div className="navbar__links">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="nav-link"
              aria-label={section.label}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-image-wrap">
            <img
              src={HeroImage}
              alt="Marketing Concept"
              className="hero-image"
            />
          </div>
          <div className="video-placeholder" tabIndex="0" aria-label="Main Video placeholder">
            <div className="play-button">&#9658;</div>
            <span className="video-text">Video Coming Soon</span>
          </div>
        </section>

        <section className="section" id="about">
          <h2>About</h2>
          <p>
            We are a modern marketing consulting firm helping forward-thinking brands realize their potential through data-driven strategy, creative innovation, and actionable insights. Our team is passionate about your growth and delivering lasting business value.
          </p>
        </section>

        <section className="section" id="whyus">
          <h2>Why Us</h2>
          <p>
            Our unique mix of industry experience, rigorous analytics, and creative thinking allows us to solve your toughest marketing challenges. We deliver real, measurable results—not just reports—with transparent communication every step of the way.
          </p>
        </section>

        <section className="section" id="work">
          <h2>Work</h2>
          <p>
            (Insert portfolio/gallery here.) We partner with clients across industries, from disruptive startups to established enterprises. Explore examples of our recent success stories and the impact we've created for our partners.
          </p>
        </section>

        <section className="section" id="contact">
          <h2>Contact</h2>
          <p>
            Ready to elevate your marketing? Reach out for a free consultation and discover how KAVIA can help you achieve your goals.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Name" className="contact-input" disabled />
            <input type="email" placeholder="Email" className="contact-input" disabled />
            <textarea placeholder="How can we help you?" rows={3} className="contact-input" disabled />
            <button className="contact-submit" disabled>
              Send (Coming Soon)
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} KAVIA Marketing Consulting. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
