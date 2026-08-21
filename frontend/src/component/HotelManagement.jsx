import React from "react";
import { Link } from "react-router-dom";
import "../style/HotelManagement.css";

import HotelManager from "../assets/Hotel-Manager.png";
import Chef from "../assets/Chef.png";
import EventManager from "../assets/Event-Manager.png";
import CateringManager from "../assets/Catering-Manager.png";
import hotelhero from "../assets/hotel-hero.png";
function HotelManagement() {
  const careers = [
    {
      id: "hotel-manager",
      title: "Hotel Manager",
      icon: HotelManager,
      description:
        "Hotel managers oversee daily hotel operations, staff, guest services and overall business performance.",
    },
    {
      id: "chef",
      title: "Chef",
      icon: Chef,
      description:
        "Chefs prepare delicious meals, create menus and maintain food quality and kitchen hygiene.",
    },
    {
      id: "event-manager",
      title: "Event Manager",
      icon: EventManager,
      description:
        "Event managers plan, organize and manage weddings, conferences and corporate events.",
    },
    {
      id: "catering-manager",
      title: "Catering Manager",
      icon: CateringManager,
      description:
        "Catering managers supervise food services, event catering operations and customer satisfaction.",
    },
  ];

  return (
    <div className="hotel-page">
      <header className="hotel-page-header">
        <Link to="/home" className="hotel-back-btn">Back</Link>
        <h2>Hotel Management</h2>
        <button className="hotel-wishlist-btn">Wishlist ❤️</button>
      </header>

      <section className="hotel-hero-section">
        <div className="hotel-hero-left">
          <h1>Hotel Management</h1>

          <p>
            Explore exciting careers in hotel management, hospitality,
            food services and event planning with excellent career growth.
          </p>

          <button>Start Exploring</button>
        </div>

        <div className="hotel-hero-right">
          <img src={hotelhero} alt="Hotel Management Careers" />
        </div>
      </section>

      <section className="hotel-career-section">
        <h2>Explore Hotel Management Careers</h2>

        <p>
          Click on any field to view complete details about that career.
        </p>

        <div className="hotel-career-grid">
          {careers.map((career) => (
            <div className="hotel-career-card" key={career.id}>
              <div className="hotel-career-icon">
                <img src={career.icon} alt={career.title} />
              </div>

              <h3>{career.title}</h3>

              <p>{career.description}</p>
           <Link to={`/hotel-management/${career.id}`}>
  <button>Explore Career →</button>
</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="hotel-why-section">
        <h2>Why Choose Hotel Management?</h2>

        <div className="hotel-why-grid">
          <div className="hotel-why-card">
            <span>🏨</span>
            <h3>Hospitality</h3>
            <p>Provide excellent guest experiences and customer service.</p>
          </div>

          <div className="hotel-why-card">
            <span>🌍</span>
            <h3>Global Career</h3>
            <p>Work in hotels, resorts and hospitality industries worldwide.</p>
          </div>

          <div className="hotel-why-card">
            <span>🍽️</span>
            <h3>Creative Work</h3>
            <p>Build exciting careers in food, events and hospitality.</p>
          </div>

          <div className="hotel-why-card">
            <span>📈</span>
            <h3>Career Growth</h3>
            <p>Excellent promotion opportunities and leadership roles.</p>
          </div>

          <div className="hotel-why-card">
            <span>💼</span>
            <h3>High Demand</h3>
            <p>Hospitality professionals are needed across many industries.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelManagement;