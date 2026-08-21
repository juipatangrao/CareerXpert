import React from "react";
import { Link } from "react-router-dom";
import "../style/BankingANDFinance.css";
import CAIcon from "../assets/CA.png";
import CSIcon from "../assets/CS.png";
import TAXIcon from "../assets/TAX.png";
import IBIcon from "../assets/IB.png";
import CreditAnalystIcon from "../assets/Credit-Analyst.png";
import BMIcon from "../assets/BM.png";
import bankingfinancehero from "../assets/bankingfinancehero.png";

function BankingANDFinance() {
  const careers = [
    {
      id: "ca",
      title: "Chartered Accountant",
      icon: CAIcon,
      description:
        "Chartered Accountants provide financial advice, auditing, and taxation services.",
    },
    {
      id: "cs",
      title: "Central Secretariat Officer",
      icon: CSIcon,
      description:
        "Central Secretariat officers work in the central government offices and support administrative functions.",
    },
    {
      id: "tax",
      title: "TAX Consultant",
      icon: TAXIcon,
      description:
        "TAX consultants provide expert advice on tax planning, compliance, and strategy.",
    },
    {
      id: "ib",
      title: "Investment Banker",
      icon: IBIcon,
      description:
        "Investment bankers provide financial advice and facilitate mergers, acquisitions, and other complex financial transactions.",
    },
    {
      id: "credit-analyst",
      title: "Credit Analyst",
      icon: CreditAnalystIcon,
      description:
        "Credit analysts evaluate the creditworthiness of individuals and businesses.",
    },
    {
      id: "bm",
      title: "Bank Manager",
      icon: BMIcon,
      description:
        "Bank managers oversee daily operations, manage staff, and ensure compliance with regulations.",
    },
  ];

  return (
    <div className="banking-finance-page">
      <header className="bf-page-header">
        <Link to="/home" className="bf-back-btn">Back</Link>
        <h2>Banking & Finance</h2>
        <button className="bf-wishlist-btn">Wishlist ❤️</button>
      </header>

      <section className="bf-hero-section">
        <div className="bf-hero-left">
          <h1>Banking & Finance</h1>

          <p>
            Discover exciting career opportunities in the banking and finance
            sector, offering stability, growth, and the chance to work with
            leading financial institutions.
          </p>

          <button>Start Exploring</button>
        </div>

        <div className="bf-hero-right">
          <img src={bankingfinancehero} alt="Banking & Finance" />
        </div>
      </section>

      <section className="banking-career-section">
        <h2>Explore Banking & Finance Careers</h2>
        <p>Click on any field to view complete details about that career.</p>
        <div className="bf-career-grid">
          {careers.map((career) => (
            <div className="bf-career-card" key={career.id}>
              <div className="bf-career-icon">
                <img src={career.icon} alt={career.title} />
              </div>
              <h3>{career.title}</h3>
              <p>{career.description}</p>
              <Link to={`/banking-finance/${career.id}`}>
                <button>Explore Career →</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bf-why-section">
        <h2>Why Choose Banking & Finance?</h2>

        <div className="bf-why-grid">
          <div className="bf-why-card">
            <span>🔒</span>
            <h3>Job Security</h3>
            <p>Stable career with long-term employment.</p>
          </div>

          <div className="bf-why-card">
            <span>💰</span>
            <h3>Good Salary</h3>
            <p>Competitive pay with allowances and pension.</p>
          </div>

          <div className="bf-why-card">
            <span>⭐</span>
            <h3>Respect</h3>
            <p>Highly respected positions in society.</p>
          </div>

          <div className="bf-why-card">
            <span>⚖️</span>
            <h3>Work-Life Balance</h3>
            <p>Fixed working hours and holidays.</p>
          </div>

          <div className="bf-why-card">
            <span>🇮🇳</span>
            <h3>Serve Nation</h3>
            <p>Contribute directly to the country's development.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BankingANDFinance;
