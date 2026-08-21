import React from "react";
import { Link } from "react-router-dom";
import "../style/Doctor.css";
import CardiologistIcon from "../assets/Cardiologist.jpeg";
import NeurologistIcon from "../assets/Neurologist.jpeg";
import MBBSDoctorIcon from "../assets/MBBS-Doctor.jpeg";
import GynecologistIcon from "../assets/Gynecologist.jpeg";
import DermatologistIcon from "../assets/Dermatologist.jpeg";
import PsychiatristIcon from "../assets/Psychiatrist.jpeg";
import DentistIcon from "../assets/Dentist.jpeg";
import UrologistIcon from "../assets/Urologist.jpeg";
import RadiologistIcon from "../assets/Radiologist.jpeg";
import doctorHero from "../assets/doctor-hero.jpeg";
function Doctor() {
  const careers = [
    {
      id: "Cardiologist",
      title: "Cardiologist",
      icon: CardiologistIcon,
      description:
        "Cardiologists diagnose and treat heart diseases and help patients maintain a healthy cardiovascular system.",
    },
    {
      id: "Neurologist",
      title: "Neurologist",
      icon: NeurologistIcon,
      description:
        "Neurologists diagnose and treat disorders of the brain, spinal cord and nervous system.",
    },
    {
      id: "MBBS",
      title: "MBBS Doctor",
      icon: MBBSDoctorIcon,
      description:
        "MBBS Doctors provide general medical care, diagnose illnesses and prescribe treatments for patients.",
    },
    {
      id: "Gynecologist",
      title: "Gynecologist",
      icon: GynecologistIcon,
      description:
        "Gynecologists specialize in women's reproductive health, pregnancy and childbirth care.",
    },
    {
      id: "Dermatologist",
      title: "Dermatologist",
      icon: DermatologistIcon,
      description:
        "Dermatologists diagnose and treat diseases related to the skin, hair and nails.",
    },
    {
      id: "Psychiatrist",
      title: "Psychiatrist",
      icon: PsychiatristIcon,
      description:
        "Psychiatrists diagnose and treat mental health conditions through therapy and medication.",
    },
    {
      id: "Dentist",
      title: "Dentist (BDS)",
      icon: DentistIcon,
      description:
        "Dentists diagnose and treat dental problems while helping patients maintain healthy teeth and gums.",
    },
    {
      id: "Urologist",
      title: "Urologist",
      icon: UrologistIcon,
      description:
        "Urologists diagnose and treat disorders of the urinary tract and male reproductive system.",
    },
    {
      id: "Radiologist",
      title: "Radiologist",
      icon: RadiologistIcon,
      description:
        "Radiologists use X-rays, CT scans and MRI to diagnose and monitor diseases.",
    },
  ];

  return (
    <div className="doctor-page">
      <header className="doctor-page-header">
        <Link to="/home" className="doctor-back-btn">Back</Link>
        <h2>Medical</h2>
        <button className="doctor-wishlist-btn">Wishlist ❤️</button>
      </header>

      <section className="doctor-hero-section">
        <div className="doctor-hero-left">
          <h1>Medical Careers</h1>

          <p>
            Explore rewarding medical careers dedicated to improving health,
            saving lives and providing quality healthcare services to society.
          </p>

          <button>Start Exploring</button>
        </div>

        <div className="doctor-hero-right">
           <img src={doctorHero} alt="Doctor hero" />
        </div>
      </section>

      <section className="doctor-career-section">
        <h2>Explore Medical Careers</h2>

        <p>
          Click on any medical field to view complete details about that
          career.
        </p>

        <div className="doctor-career-grid">
          {careers.map((career) => (
            <div className="doctor-career-card" key={career.id}>
              <div className="doctor-career-icon">
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
      <section className="doctor-why-section">
        <h2>Why Choose Medical?</h2>

        <div className="doctor-why-grid">
          <div className="doctor-why-card">
            <span>❤️</span>
            <h3>Save Lives</h3>
            <p>Help people recover from illnesses and improve their quality of life.</p>
          </div>

          <div className="doctor-why-card">
            <span>🩺</span>
            <h3>Respect</h3>
            <p>Doctors are highly respected professionals who serve society.</p>
          </div>

          <div className="doctor-why-card">
            <span>💰</span>
            <h3>Excellent Salary</h3>
            <p>Medical professionals receive attractive salaries and career growth.</p>
          </div>

          <div className="doctor-why-card">
            <span>🌍</span>
            <h3>Global Opportunities</h3>
            <p>Medical careers provide opportunities to work in hospitals and healthcare organizations worldwide.</p>
          </div>

          <div className="doctor-why-card">
            <span>📚</span>
            <h3>Continuous Learning</h3>
            <p>Keep learning new treatments, technologies and medical advancements throughout your career.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doctor;