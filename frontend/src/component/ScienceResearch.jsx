import React from "react";
import { Link } from "react-router-dom";
import "../style/ScienceResearch.css";

import Scientist from "../assets/scientist.png";
import Physicist from "../assets/Physicist.png";
import Chemist from "../assets/Chemist.png";
import Biologist from "../assets/Biologist.png";
import Microbiologist from "../assets/Microbiologist.png";
import Biotechnologist from "../assets/Biotechnologist.png";
import ScienceHero from "../assets/sciencereasearch-hero.png";

function ScienceResearch() {
  const careers = [
    { id: "scientist", title: "Scientist", icon: Scientist, description: "Scientists conduct research, perform experiments, and develop innovative solutions to advance scientific knowledge." },
    { id: "physicist", title: "Physicist", icon: Physicist, description: "Physicists study matter, energy, motion, and the laws of nature through research and experimentation." },
    { id: "chemist", title: "Chemist", icon: Chemist, description: "Chemists analyze substances, develop new materials, medicines, and chemical processes for various industries." },
    { id: "biologist", title: "Biologist", icon: Biologist, description: "Biologists study living organisms, ecosystems, genetics, and contribute to environmental and medical research." },
    { id: "microbiologist", title: "Microbiologist", icon: Microbiologist, description: "Microbiologists study microorganisms such as bacteria, viruses, fungi, and their impact on health and the environment." },
    { id: "biotechnologist", title: "Biotechnologist", icon: Biotechnologist, description: "Biotechnologists use biology and technology to develop medicines, improve agriculture, and create innovative products." },
  ];

  return (
    <div className="science-page">
      <header className="science-page-header">
        <Link to="/home" className="science-back-btn">Back</Link>
        <h2>Science & Research</h2>
        <button className="science-wishlist-btn">Wishlist ❤️</button>
      </header>

      <section className="science-hero-section">
        <div className="science-hero-left">
          <h1>Science & Research</h1>
          <p>
            Explore exciting careers in scientific discovery, innovation,
            research, biotechnology, healthcare, and advanced technologies
            that shape the future of the world.
          </p>
          <button>Start Exploring</button>
        </div>

        <div className="science-hero-right">
          <img src={ScienceHero} alt="Science & Research" />
        </div>
      </section>

      <section className="science-career-section">
        <h2>Explore Science & Research Careers</h2>
        <p>Click on any field to view complete details about that career.</p>

        <div className="science-career-grid">
          {careers.map((career) => (
            <div className="science-career-card" key={career.id}>
              <div className="science-career-icon">
                <img src={career.icon} alt={career.title} />
              </div>
              <h3>{career.title}</h3>
              <p>{career.description}</p>
              <Link to={`/science-research/${career.id}`}>
                <button>Explore Career →</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="science-why-section">
        <h2>Why Choose Science & Research?</h2>
        <div className="science-why-grid">
          <div className="science-why-card"><span>🔬</span><h3>Innovation</h3><p>Discover new technologies and scientific breakthroughs.</p></div>
          <div className="science-why-card"><span>🧪</span><h3>Research</h3><p>Conduct experiments that improve lives and industries.</p></div>
          <div className="science-why-card"><span>🌍</span><h3>Global Impact</h3><p>Contribute to healthcare, environment, and technology.</p></div>
          <div className="science-why-card"><span>📈</span><h3>Career Growth</h3><p>Excellent opportunities in research institutes and industries.</p></div>
          <div className="science-why-card"><span>💡</span><h3>Continuous Learning</h3><p>Stay at the forefront of scientific discoveries and innovation.</p></div>
        </div>
      </section>
    </div>
  );
}

export default ScienceResearch;
