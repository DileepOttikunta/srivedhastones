import React, { useRef } from 'react';
import './NavigationBar.css';
import { useNavigate } from "react-router-dom";
import Cards from './Cards';
import ContactUs from './ContactUs';
import Footer from './Footer';

function NavigationBar() {
  const navigate = useNavigate();

  // 🔥 REFS
  const cardsRef = useRef(null);
  const contactRef = useRef(null);

  // 🔥 ROUTE
  function marbelStudio() {
    navigate("/studio");
  }

  // 🔥 SCROLL FUNCTIONS
  const scrollToCards = (e) => {
    e.preventDefault();
    cardsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>

      {/* 🔥 NAVBAR */}
      <nav className="navbar">
        <div className="logo">Srivedha Stones</div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#">About</a></li>

          {/* 🔥 SCROLL TO COLLECTIONS */}
          <li>
            <a href="#" onClick={scrollToCards}>
              Collections
            </a>
          </li>

          <li><a href="#">Visualizer</a></li>
          <li><a href="#">Gallery</a></li>

          {/* 🔥 SCROLL TO CONTACT */}
          <li>
            <a href="#" onClick={scrollToContact}>
              Contact
            </a>
          </li>
        </ul>

        <button className="btn">Get Quote</button>
      </nav>

      {/* 🔥 HERO */}
      <section className="hero">
        <div className="overlay">
          <div className="content">
            <h1>Welcome to Sri Vedha Stones</h1>
            <h3>Premium Granite Solutions</h3>

            <button className="hero-btn" onClick={marbelStudio}>
              Marble Studio
            </button>
          </div>
        </div>
      </section>

      {/* 🔥 CARDS SECTION */}
      <div ref={cardsRef}>
        <Cards />
      </div>

      {/* 🔥 CONTACT SECTION */}
      <div ref={contactRef}>
        <ContactUs />
      </div>

      {/* 🔥 FOOTER */}
      <Footer />

    </div>
  );
}

export default NavigationBar;