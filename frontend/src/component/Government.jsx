import React from "react";
import { Link } from "react-router-dom";
import "../style/Government.css";

import IASIcon from "../assets/IAS-Officer.png";
import IPSIcon from "../assets/IPS-Officer.png";
import PoliceIcon from "../assets/PoliceOfficer.png";
import ArmyIcon from "../assets/Army-Officer.png";
import IncomeTaxIcon from "../assets/Income-tax-Officer.png";
import RailwayIcon from "../assets/Railway-Officer.png";
import ForestIcon from "../assets/ForestOfficer.png";
import FoodIcon from "../assets/FoodInspector.png";
import TalathiIcon from "../assets/Talathi.png";
import governmentbanner from "../assets/govermentbanner.png";
function Government() {
  const careers = [
    {
      id: "ias",
      title: "IAS Officer",
      icon: IASIcon,
      description:
        "IAS officers manage government administration, implement policies, and work for development of the nation.",
    },
    {
      id: "ips",
      title: "IPS Officer",
      icon: IPSIcon,
      description:
        "IPS officers maintain law and order, prevent crime, and ensure citizen safety.",
    },
    {
      id: "police",
      title: "Police Officer",
      icon: PoliceIcon,
      description:
        "Police officers protect people and maintain peace in society.",
    },
    {
      id: "army",
      title: "Army Officer",
      icon: ArmyIcon,
      description:
        "Army officers defend the country and ensure national security.",
    },
    {
      id: "income-tax",
      title: "Income Tax Officer",
      icon: IncomeTaxIcon,
      description: "They handle tax collection and prevent tax evasion.",
    },
    {
      id: "railway",
      title: "Railway Officer",
      icon: RailwayIcon,
      description: "They manage railway operations and passenger safety.",
    },
    {
      id: "forest",
      title: "Forest Officer",
      icon: ForestIcon,
      description: "They protect forests and wildlife.",
    },
    {
      id: "food",
      title: "Food Inspector",
      icon: FoodIcon,
      description: "They ensure food safety and hygiene standards.",
    },
    {
      id: "talathi",
      title: "Talathi",
      icon: TalathiIcon,
      description: "They maintain land records and village administration.",
    },
  ];

  return (
    <div className="gov-page">
      {/* HEADER */}
      <header className="gov-header">
        <button className="av-back-btn">
          <Link to="/home">Back</Link>
        </button>
        <h2 className="gov-title">Government Services</h2>
        <button className="gov-wishlist-btn">Wishlist ❤️</button>
      </header>


     

     
      
      {/* HERO */}
<section className="gov-hero">
  <div className="gov-hero-left">
    <h1>Government Services</h1>

    <p>
      Explore prestigious government career opportunities that offer
      stability, respect, attractive salary and the opportunity to serve
      the nation.
    </p>

    <button className="gov-hero-btn">Start Exploring</button>
  </div>

  <div className="gov-hero-right">
    <img
                src={governmentbanner}
                alt="Government Careers"
              />
    
  </div>
</section>
      {/* CAREERS */}
      <section className="gov-career-section">
        <h2>Explore Government Services</h2>
        <p>Click on any field to view complete details.</p>

        <div className="gov-career-grid">
          {careers.map((career) => (
            <div className="gov-career-card" key={career.id}>
              <div className="gov-career-icon">
                <img src={career.icon} alt={career.title} />
              </div>

              <h3>{career.title}</h3>
              <p>{career.description}</p>

              
                <Link to={`/${career.id}`}>
  <button>Explore Career →</button>
</Link>
              

              
            </div>
          ))}
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="gov-why-section">
        <h2>Why Choose Government Service?</h2>

        <div className="gov-why-grid">
          <div className="gov-why-card">
            <span>🔒</span>
            <h3>Job Security</h3>
            <p>Stable career with long-term employment.</p>
          </div>

          <div className="gov-why-card">
            <span>💰</span>
            <h3>Good Salary</h3>
            <p>Competitive pay with allowances and pension.</p>
          </div>

          <div className="gov-why-card">
            <span>⭐</span>
            <h3>Respect</h3>
            <p>Highly respected positions in society.</p>
          </div>

          <div className="gov-why-card">
            <span>⚖️</span>
            <h3>Work-Life Balance</h3>
            <p>Fixed working hours and holidays.</p>
          </div>

          <div className="gov-why-card">
            <span>🇮🇳</span>
            <h3>Serve Nation</h3>
            <p>Contribute directly to country's development.</p>
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default Government;
