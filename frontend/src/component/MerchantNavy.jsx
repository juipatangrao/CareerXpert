import React from "react";
import "../style/MerchantNavy.css";
import { Link } from "react-router-dom";
import DeckOfficer from "../assets/Deck-Officer.png";
import MarineEngineer from "../assets/Marine-Engineer.png";
import ETO from "../assets/ETO.png";
import Captain from "../assets/Captain.png";
import PortManager from "../assets/Port-Manager.png";
import merchantnavyhero from "../assets/merchant-hero.png";
function MerchantNavy() {
  const careers = [
    {
      id: "deck-officer",
      title: "Deck Officer",
      icon: DeckOfficer,
      description:
        "Deck officers navigate ships, supervise cargo operations and ensure safe voyages.",
    },
    {
      id: "marine-engineer",
      title: "Marine Engineer",
      icon: MarineEngineer,
      description:
        "Marine engineers maintain ship engines, machinery and technical systems onboard.",
    },
    {
    id: "electro-technical-officer",
      title: "Electro-Technical Officer (ETO)",
      icon: ETO,
      description:
        "ETOs manage electrical, electronic and automation systems on ships.",
    },
    {
      id: "captain",
      title: "Captain (Master Mariner)",
      icon: Captain,
      description:
        "Captains command ships, manage crew members and ensure safe maritime operations.",
    },
    {
      id: "port-manager",
      title: "Port Manager",
      icon: PortManager,
      description:
        "Port managers oversee port operations, cargo handling and maritime logistics.",
    },
  ];

  return (
    <div className="merchant-page">

      <header className="merchant-page-header">
        <Link to="/home" className="merchant-back-btn">Back</Link>
        <h2>Merchant Navy</h2>
        <button className="merchant-wishlist-btn">Wishlist ❤️</button>
      </header>

      <section className="merchant-hero-section">
        <div className="merchant-hero-left">

          <h1>Merchant Navy</h1>

          <p>
            Explore exciting careers in the Merchant Navy where you can
            travel across the world, work on advanced ships and build a
            successful maritime career.
          </p>

          <button>Start Exploring</button>

        </div>

        <div className="merchant-hero-right">
                     <img src={merchantnavyhero} alt="Merchant Navy" />         
        </div>
      </section>

      <section className="merchant-career-section">

        <h2>Explore Merchant Navy Careers</h2>

        <p>
          Click on any field to view complete details about that career.
        </p>

        <div className="merchant-career-grid">

          {careers.map((career) => (
            <div className="merchant-career-card" key={career.id}>

              <div className="merchant-career-icon">
                <img src={career.icon} alt={career.title} />
              </div>

              <h3>{career.title}</h3>

              <p>{career.description}</p>

              <Link to={`/merchant-navy/${career.id}`}>
  <button>Explore Career →</button>
</Link>

            </div>
          ))}

        </div>

      </section>

      <section className="merchant-why-section">

        <h2>Why Choose Merchant Navy?</h2>

        <div className="merchant-why-grid">

          <div className="merchant-why-card">
            <span>🌍</span>
            <h3>Travel the World</h3>
            <p>Visit different countries while working on international ships.</p>
          </div>

          <div className="merchant-why-card">
            <span>💰</span>
            <h3>High Salary</h3>
            <p>Earn attractive salaries with additional onboard benefits.</p>
          </div>

          <div className="merchant-why-card">
            <span>🚢</span>
            <h3>Modern Ships</h3>
            <p>Work with advanced maritime technology and equipment.</p>
          </div>

          <div className="merchant-why-card">
            <span>📈</span>
            <h3>Career Growth</h3>
            <p>Excellent promotion opportunities from officer to captain.</p>
          </div>

          <div className="merchant-why-card">
            <span>⚓</span>
            <h3>Adventure</h3>
            <p>Experience an exciting career while exploring the oceans.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default MerchantNavy;