import React from "react";
import { Link } from "react-router-dom";
import "../style/Environmental.css";

import EnvironmentalScientist from "../assets/Environmental-Scientist.png";
import WildlifeBiologist from "../assets/Wildlife-Biologist.png";
import ForestOfficer from "../assets/Forest-Officer.png";
import EnvironmentalHero from "../assets/Environmental-hero.jpeg";

function Environmental() {
  const careers = [
    {
      id: "environmentalscientist",
      title: "Environmental Scientist",
      icon: EnvironmentalScientist,
      description:
        "Environmental scientists study ecosystems, pollution and natural resources to protect the environment.",
    },
    {
      id: "wildlifebiologist",
      title: "Wildlife Biologist",
      icon: WildlifeBiologist,
      description:
        "Wildlife biologists research animals, habitats and biodiversity for conservation.",
    },
    {
      id: "forestofficer",
      title: "Forest Officer",
      icon: ForestOfficer,
      description:
        "Forest officers protect forests, wildlife reserves and enforce environmental laws.",
    },
  ];

  return (
    <div className="environment-page">
      {/* Header */}

      <header className="environment-page-header">
        <Link to="/home" className="environment-back-btn">Back</Link>

        <h2>Environmental</h2>

        <button className="environment-wishlist-btn">Wishlist ❤️</button>
      </header>

      {/* Hero Section */}

      <section className="environment-hero-section">
        <div className="environment-hero-left">
          <h1>Environmental Careers</h1>

          <p>
            Explore rewarding careers dedicated to protecting nature, conserving
            wildlife and creating a sustainable future for our planet.
          </p>

          <button>Start Exploring</button>
        </div>

        <div className="environment-hero-right">
          <img src={EnvironmentalHero} alt="Environmental Careers" />
        </div>
      </section>

      {/* Career Section */}

      <section className="environment-career-section">
        <h2>Explore Environmental Careers</h2>

        <p>Click on any field to view complete details about that career.</p>

        <div className="environment-career-grid">
          {careers.map((career) => (
            <div className="environment-career-card" key={career.id}>
              <div className="environment-career-icon">
                <img src={career.icon} alt={career.title} />
              </div>

              <h3>{career.title}</h3>

              <p>{career.description}</p>

              <Link to={`/environmental/${career.id}`}>
                <button>Explore Career →</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}

      <section className="environment-why-section">
        <h2>Why Choose Environmental Careers?</h2>

        <div className="environment-why-grid">
          <div className="environment-why-card">
            <span>🌿</span>
            <h3>Protect Nature</h3>
            <p>Help conserve forests, wildlife and natural ecosystems.</p>
          </div>

          <div className="environment-why-card">
            <span>🌍</span>
            <h3>Save the Planet</h3>
            <p>Work towards solving environmental challenges.</p>
          </div>

          <div className="environment-why-card">
            <span>🦁</span>
            <h3>Wildlife Conservation</h3>
            <p>Protect endangered species and preserve biodiversity.</p>
          </div>

          <div className="environment-why-card">
            <span>📈</span>
            <h3>Career Growth</h3>
            <p>Excellent opportunities in government and private sectors.</p>
          </div>

          <div className="environment-why-card">
            <span>💚</span>
            <h3>Meaningful Work</h3>
            <p>Make a positive impact on the environment and society.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Environmental;
