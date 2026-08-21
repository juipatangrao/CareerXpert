import React from 'react'
import { Link } from "react-router-dom";
import "../style/IT.css";
import WebIcon from "../assets/web-Developer.png";
import MobileAppIcon from "../assets/Mobile-App-Developer.png";
import FrontendIcon from "../assets/Frontend-Developer.png";
import BackendIcon from "../assets/Backend-Developer.png";
import FullStackIcon from "../assets/FullStack-Developer.png";
import UIUXIcon from "../assets/UKUV-Designer.png";
import CyberSecurityIcon from "../assets/Cyber-Security.png";
import DataAnalystIcon from "../assets/Data-Anlyst.png";
import GameDeveloperIcon from "../assets/GameDeveloper.png";
import ITbanner from "../assets/ITbanner.png";

function IT() {
  const careers = [
    {
      id: "web-developer",
      title: "Web Developer",
      icon: WebIcon,
      description:
        "Web Developers design and build responsive websites using modern web technologies to create engaging user experiences.",
    },
    {
      id: "mobile-app",
      title: "Mobile App Developer",
      icon: MobileAppIcon,
      description:
        "Mobile App Developers create Android and iOS applications that provide users with fast, reliable, and interactive experiences.",
    },
    {
      id: "frontend",
      title: "Frontend Developer",
      icon: FrontendIcon,
      description:
        "Frontend Developers build attractive and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      id: "backend",
      title: "Backend Developer",
      icon: BackendIcon,
      description:
        "Backend Developers develop server-side applications, manage databases, and ensure smooth communication between systems.",
    },
    {
      id: "full-stack",
      title: "Full Stack Developer",
      icon: FullStackIcon,
      description:
        "Full Stack Developers work on both frontend and backend technologies to build complete web applications.",
    },
    {
      id: "uiux",
      title: "UI/UX Designer",
      icon: UIUXIcon,
      description:
        "UI/UX Designers create visually appealing and user-friendly interfaces that enhance the overall user experience.",
    },
    {
      id: "cyber-security",
      title: "Cyber Security Analyst",
      icon: CyberSecurityIcon,
      description:
        "Cyber Security Analysts protect computer systems and networks by identifying threats and preventing cyber attacks.",
    },
    {
      id: "data-analyst",
      title: "Data Analyst",
      icon: DataAnalystIcon,
      description:
        "Data Analysts collect, organize, and analyze data to help organizations make informed business decisions.",
    },
    {
      id: "game-developer",
      title: "Game Developer",
      icon: GameDeveloperIcon,
      description:
        "Game Developers design and develop interactive video games using programming, graphics, and game development tools.",
    },
  ];

  return (
    <div className="it-page">
      <header className="it-page-header">
        <Link to="/home" className="it-back-btn">Back</Link>
        <h2>Information Technology (IT)</h2>
        <button className="it-wishlist-btn">Wishlist ❤️</button>
      </header>

      <section className="ithero-section">
        <div className="ithero-left">
          <h1>Information Technology (IT)</h1>

          <p>
            Explore exciting Information Technology careers that offer
            innovation, creativity, high salary opportunities, and the
            chance to build the digital future.
          </p>

          <button>Start Exploring</button>
        </div>

        <div className="ithero-right">
          <img
                      src={ITbanner}
                      alt="Information Technology Careers"
                    />
          
        </div>
      </section>

      <section className="it-career-section">
        <h2>Explore IT Careers</h2>
        <p>Click on any field to view complete details about that career.</p>

        <div className="it-career-grid">
          {careers.map((career) => (
            <div className="it-career-card" key={career.id}>
              <div className="it-career-icon">
                <img src={career.icon} alt={career.title} />
              </div>

              <h3>{career.title}</h3>

              <p>{career.description}</p>

              <Link to={`/it/${career.id}`}>
  <button>Explore Career →</button>
</Link> 
            </div>
          ))}
        </div>
      </section>

      <section className="it-why-section">
        <h2>Why Choose Information Technology?</h2>

        <div className="it-why-grid">
          <div className="it-why-card">
            <span>💼</span>
            <h3>High Demand</h3>
            <p>IT professionals are needed across almost every industry.</p>
          </div>

          <div className="it-why-card">
            <span>💰</span>
            <h3>Excellent Salary</h3>
            <p>Enjoy competitive salaries and strong career growth opportunities.</p>
          </div>

          <div className="it-why-card">
            <span>🚀</span>
            <h3>Career Growth</h3>
            <p>Continuous learning and promotions with emerging technologies.</p>
          </div>


          

          <div className="it-why-card">
            <span>🌍</span>
            <h3>Global Opportunities</h3>
            <p>Work with international companies or remotely from anywhere.</p>
          </div>

          <div className="it-why-card">
            <span>💡</span>
            <h3>Innovation</h3>
            <p>Create modern solutions and contribute to the digital world.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IT;