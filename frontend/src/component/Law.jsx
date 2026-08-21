import React from "react";
import { Link } from "react-router-dom";
import "../style/Law.css";
import lawHero from "../assets/law-hero.png";
import CLIcon from "../assets/CL.png";
import CorporateIcon from "../assets/corporate.png";
import FLIcon from "../assets/FL.png";
import CyberIcon from "../assets/Cyber.png";
import TaxIcon from "../assets/Tax-lawyer.png";
import JudgeIcon from "../assets/judge.png";

function Law() {
  const careers = [
  {
    id: "criminal-lawyer",
    title: "Criminal Lawyer",
    icon: CLIcon,
    description:
      "Criminal lawyers specialize in defending clients against criminal charges and representing them in court.",
  },
  {
    id: "corporate-lawyer",
    title: "Corporate Lawyer",
    icon: CorporateIcon,
    description:
      "Corporate lawyers provide legal advice and representation to businesses and organizations.",
  },
  {
    id: "family-lawyer",
    title: "Family Lawyer",
    icon: FLIcon,
    description:
      "Family lawyers specialize in handling divorce, child custody, and other family-related legal matters.",
  },
  {
    id: "cyber-lawyer",
    title: "Cyber Lawyer",
    icon: CyberIcon,
    description:
      "Cyber lawyers specialize in legal issues related to cybersecurity, data privacy, and digital rights.",
  },
  {
    id: "tax-lawyer",
    title: "Tax Lawyer",
    icon: TaxIcon,
    description:
      "Tax lawyers specialize in tax law and provide legal advice on tax planning, compliance, and disputes.",
  },
  {
    id: "judge",
    title: "Judge",
    icon: JudgeIcon,
    description:
      "Judges preside over court proceedings, interpret laws, and make decisions in legal cases.",
  },
];

  return (
    <div className="law-page">
      <header className="law-page-header">
        <Link to="/home" className="law-back-btn">Back</Link>
        <h2>Law</h2>
        <button className="law-wishlist-btn">Wishlist ❤️</button>
      </header>

      <section className="law-hero-section">
        <div className="law-hero-left">
          <h1>Law</h1>

          <p>
            Discover exciting career opportunities in the legal sector,
            offering stability, growth, and the chance to work with leading
            law firms and government agencies.
          </p>

          <button>Start Exploring</button>
        </div>

        <div className="law-hero-right">
          <img src={lawHero} alt="Law" />
        </div>
      </section>

      <section className="law-section">
        <h2>Explore Law Careers</h2>
        <p>Click on any field to view complete details about that career.</p>
        <div className="law-career-grid">
          {careers.map((career) => (
            <div className="law-career-card" key={career.id}>
              <div className="law-career-icon">
                <img src={career.icon} alt={career.title} />
              </div>
              <h3>{career.title}</h3>
              <p>{career.description}</p>
              <Link to={`/law/${career.id}`}>
                              <button>Explore Career →</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="law-why-section">
        <h2>Why Choose Law?</h2>

        <div className="law-why-grid">
          <div className="law-why-card">
            <span>🔒</span>
            <h3>Job Security</h3>
            <p>Stable career with long-term employment.</p>
          </div>

          <div className="law-why-card">
            <span>💰</span>
            <h3>Good Salary</h3>
            <p>Competitive pay with allowances and pension.</p>
          </div>

          <div className="law-why-card">
            <span>⭐</span>
            <h3>Respect</h3>
            <p>Highly respected positions in society.</p>
          </div>

          <div className="law-why-card">
            <span>⚖️</span>
            <h3>Work-Life Balance</h3>
            <p>Fixed working hours and holidays.</p>
          </div>

          <div className="law-why-card">
            <span>🇮🇳</span>
            <h3>Serve Nation</h3>
            <p>Contribute directly to the country's development.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Law;