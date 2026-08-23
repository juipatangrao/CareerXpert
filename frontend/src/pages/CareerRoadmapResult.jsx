import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/CareerRoadmapResult.css";
import careerRoadmapData from "../data/careerRoadmapData";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function CareerRoadmapResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const { education, career } = location.state || {};

  // Directly page open केल्यास input page वर पाठवेल
  if (!education || !career) {
    return (
      <div className="roadmap-result-page">
        <div className="roadmap-result-card empty-result">
          <h2>Career Roadmap Not Found</h2>
          <p>Please enter your career details first.</p>

          <button
            className="result-back-btn"
            onClick={() => navigate("/career-roadmap")}
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

const genericRoadmap = [
  {
    number: "01",
    title: "Understand Your Career",
    description:
      `Start by understanding the role, responsibilities, educational requirements and opportunities available in ${career}.`,
    skills: [
      "Career Research",
      "Industry Knowledge",
      "Role Understanding",
    ],
    duration: "1–2 Months",
  },

  {
    number: "02",
    title: "Build Required Skills",
    description:
      `Identify and develop the technical, practical and soft skills required to become a successful ${career}.`,
    skills: [
      "Core Skills",
      "Technical Skills",
      "Communication",
      "Problem Solving",
    ],
    duration: "2–4 Months",
  },

  {
    number: "03",
    title: "Learn & Practice",
    description:
      `Apply your knowledge through courses, practice activities and hands-on work related to ${career}.`,
    skills: [
      "Learning Resources",
      "Practice",
      "Hands-on Experience",
      "Real-world Tasks",
    ],
    duration: "3–4 Months",
  },

  {
    number: "04",
    title: "Build Your Portfolio",
    description:
      `Create projects and work samples that demonstrate your abilities and interest in ${career}.`,
    skills: [
      "Projects",
      "Portfolio",
      "GitHub / Work Samples",
      "Practical Experience",
    ],
    duration: "2–3 Months",
  },

  {
    number: "05",
    title: "Become Career Ready",
    description:
      `Prepare for internships, jobs, interviews and professional opportunities in ${career}.`,
    skills: [
      "Resume",
      "Interview Preparation",
      "Networking",
      "Job Applications",
    ],
    duration: "1–2 Months",
  },
];

const roadmapSteps =
  careerRoadmapData[career] || genericRoadmap;
  return (
    <div className="roadmap-result-page">

      <div className="roadmap-result-container">

        {/* TOP BAR */}

        <div className="result-top-bar">
          <button
            className="result-back-btn"
            onClick={() => navigate("/career-roadmap")}
          >
            ← Back
          </button>
        </div>


        {/* HEADER */}

        <div className="result-header">

          <div className="result-icon">
            <FaMapMarkedAlt />
          </div>

          <p className="result-small-title">
            YOUR PERSONAL CAREER ROADMAP
          </p>

          <h1>{career}</h1>

          <p className="result-subtitle">
            A step-by-step path from your current education
            to your target career.
          </p>

        </div>


        {/* USER SUMMARY */}

        <div className="career-summary">

          <div className="summary-box">
            <span>Current Education</span>
            <strong>{education}</strong>
          </div>

          <div className="summary-line"></div>

          <div className="summary-box">
            <span>Target Career</span>
            <strong>{career}</strong>
          </div>

        </div>


        {/* ROADMAP TITLE */}

        <div className="roadmap-section-heading">

          <h2>Your Career Path</h2>

          <p>
            Follow these stages to move closer to your career goal.
          </p>

        </div>


        {/* ROADMAP */}

        <div className="career-timeline">

          {roadmapSteps.map((step, index) => (

            <div
              className="timeline-item"
              key={step.number}
            >

              {/* NUMBER */}

              <div className="timeline-left">

                <div className="timeline-number">
                  {step.number}
                </div>

                {index !== roadmapSteps.length - 1 && (
                  <div className="timeline-line"></div>
                )}

              </div>


              {/* CONTENT */}

              <div className="timeline-card">

                <div className="timeline-card-top">

                  <div>
                    <span className="stage-label">
                      STAGE {index + 1}
                    </span>

                    <h3>{step.title}</h3>
                  </div>

                  <span className="duration">
                    {step.duration}
                  </span>

                </div>


                <p className="step-description">
                  {step.description}
                </p>


                <div className="skill-list">

                  {step.skills.map((skill) => (
                    <span
                      className="skill-tag"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}

                </div>


                <button className="start-step-btn">
                  Start Stage →
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* BOTTOM ACTION */}

        <div className="roadmap-bottom">

          <h2>Ready to start your journey?</h2>

          <p>
            Turn this roadmap into a structured study plan
            and start learning step by step.
          </p>

          <button
            className="study-plan-btn"
            onClick={() => navigate("/study-planner")}
          >
            Create Study Plan →
          </button>

        </div>

      </div>

    </div>
  );
}