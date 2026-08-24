import React, { useState } from "react";
import "../style/CoverLetter.css";

import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaFolderOpen,
  FaClipboardCheck,
  FaFileAlt,
} from "react-icons/fa";

import PersonalInfo from "../component/PersonalInfo";
import JobDetails from "../component/JobDetails";
import Education from "../component/Education";
import Skills from "../component/Skills";
import Experience from "../component/Experience";
import Projects from "../component/Projects";
import Review from "../component/Review";
import GeneratedLetter from "../component/GeneratedLetter";

const CoverLetter = () => {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({

    // Personal Info
    fullName: "",
    email: "",
    phone: "",
    city: "",
    linkedin: "",

    // Job Details
    company: "",
    role: "",
    hiringManager: "",
    companyLocation: "",
    jobDescription: "",

    // Education
    degree: "",
    college: "",
    university: "",
    passingYear: "",
    cgpa: "",

    // Skills
    technicalSkills: "",
    softSkills: "",
    tone: "Professional",

    // Experience
    experience: "Fresher",
    internship: "",
    workExperience: "",
    achievements: "",
    certifications: "",

    // Projects
    projectTitle: "",
    projectDescription: "",
    technologies: "",
    github: "",
    liveDemo: "",

    // Generated Letter
    generatedLetter: "",
  });

  // ==========================
  // Validation
  // ==========================

  const validateStep = () => {

    switch (step) {

      case 1:

        if (
          !formData.fullName.trim() ||
          !formData.email.trim() ||
          !formData.phone.trim() ||
          !formData.city.trim() ||
          !formData.linkedin.trim()
        ) {

          alert("⚠ Please fill all Personal Information.");

          return false;
        }

        break;

      case 2:

        if (
          !formData.company.trim() ||
          !formData.role.trim() ||
          !formData.hiringManager.trim() ||
          !formData.companyLocation.trim() ||
          !formData.jobDescription.trim()
        ) {

          alert("⚠ Please fill all Job Details.");

          return false;
        }

        break;

      case 3:

        if (
          !formData.degree.trim() ||
          !formData.college.trim() ||
          !formData.university.trim() ||
          !formData.passingYear.trim() ||
          !formData.cgpa.trim()
        ) {

          alert("⚠ Please fill all Education Details.");

          return false;
        }

        break;

      case 4:

        if (
          !formData.technicalSkills.trim() ||
          !formData.softSkills.trim()
        ) {

          alert("⚠ Please fill all Skills.");

          return false;
        }

        break;

      case 5:

        if (
          !formData.internship.trim() ||
          !formData.workExperience.trim() ||
          !formData.achievements.trim() ||
          !formData.certifications.trim()
        ) {

          alert("⚠ Please fill all Experience Details.");

          return false;
        }

        break;

      case 6:

        if (
          !formData.projectTitle.trim() ||
          !formData.projectDescription.trim() ||
          !formData.technologies.trim() ||
          !formData.github.trim() ||
          !formData.liveDemo.trim()
        ) {

          alert("⚠ Please fill all Project Details.");

          return false;
        }

        break;

      default:
        break;

    }

    return true;

  };

  // ==========================
  // Next Step
  // ==========================

  const nextStep = () => {

    if (!validateStep()) {
      return;
    }

    if (step < 8) {
      setStep(step + 1);
    }

  };

  // ==========================
  // Previous Step
  // ==========================

  const prevStep = () => {

    if (step > 1) {
      setStep(step - 1);
    }

  };

  // ==========================
  // Update Form
  // ==========================

  const updateField = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };
    // ==========================
  // Sidebar Steps
  // ==========================

  const steps = [
    {
      id: 1,
      title: "Personal Info",
      icon: <FaUser />,
    },
    {
      id: 2,
      title: "Job Details",
      icon: <FaBriefcase />,
    },
    {
      id: 3,
      title: "Education",
      icon: <FaGraduationCap />,
    },
    {
      id: 4,
      title: "Skills",
      icon: <FaCode />,
    },
    {
      id: 5,
      title: "Experience",
      icon: <FaLaptopCode />,
    },
    {
      id: 6,
      title: "Projects",
      icon: <FaFolderOpen />,
    },
    {
      id: 7,
      title: "Review",
      icon: <FaClipboardCheck />,
    },
    {
      id: 8,
      title: "Generated",
      icon: <FaFileAlt />,
    },
  ];

  // ==========================
  // Render Current Step
  // ==========================

  const renderStep = () => {
    switch (step) {

      case 1:
        return (
          <PersonalInfo
            formData={formData}
            updateField={updateField}
          />
        );

      case 2:
        return (
          <JobDetails
            formData={formData}
            updateField={updateField}
          />
        );

      case 3:
        return (
          <Education
            formData={formData}
            updateField={updateField}
          />
        );

      case 4:
        return (
          <Skills
            formData={formData}
            updateField={updateField}
          />
        );

      case 5:
        return (
          <Experience
            formData={formData}
            updateField={updateField}
          />
        );

      case 6:
        return (
          <Projects
            formData={formData}
            updateField={updateField}
          />
        );

      case 7:
        return (
          <Review
            formData={formData}
          />
        );

      case 8:
        return (
          <GeneratedLetter
            formData={formData}
            setFormData={setFormData}
          />
        );

      default:
        return null;
    }
  };
    return (
    <div className="cover-page">

      {/* Floating Background */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>

      <div className="dashboard">

        {/* Sidebar */}
        <aside className="sidebar">

          <div className="logo-section">
            <h2 className="logo">
              Career<span>Xpert</span>
            </h2>

            <p className="sidebar-subtitle">
              AI Powered Cover Letter Generator
            </p>
          </div>

          <div className="step-list">

            {steps.map((item) => (

              <div
                key={item.id}
                className={`step-card ${
                  step === item.id ? "active" : ""
                }`}
              >

                <div className="step-icon">
                  {item.icon}
                </div>

                <div className="step-text">

                  <h4>{item.title}</h4>

                  <small>
                    Step {item.id}
                  </small>

                </div>

              </div>

            ))}

          </div>

        </aside>

        {/* Main Section */}

        <main className="main-content">

          {/* Header */}

          <div className="header">

            <h1>
              AI Cover Letter Generator
            </h1>

            <p>
              Build an ATS Friendly Professional Cover Letter in Minutes.
            </p>

          </div>

          {/* Progress */}

          <div className="progress-box">

            <div className="progress-top">

              <span>
                Step {step} of 8
              </span>

              <span>
                {Math.round((step / 8) * 100)}%
              </span>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${(step / 8) * 100}%`,
                }}
              ></div>

            </div>

          </div>

          {/* Form */}

          <div className="form-card">

            {renderStep()}

          </div>

          {/* Buttons */}

          {step < 8 && (

            <div className="button-group">

              {step > 1 && (

                <button
                  className="prev-btn"
                  onClick={prevStep}
                >
                  ← Previous
                </button>

              )}

              {step < 7 && (

                <button
                  className="next-btn"
                  onClick={nextStep}
                >
                  Next →
                </button>

              )}

              {step === 7 && (

                <button
                  className="generate-btn"
                  onClick={nextStep}
                >
                  ✨ Generate Cover Letter
                </button>

              )}

            </div>

          )}

        </main>

      </div>

    </div>
  );
};

export default CoverLetter;