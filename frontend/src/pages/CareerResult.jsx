import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaStar,
  FaArrowRight,
  FaUserGraduate,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

import calculateRecommendations from "../utils/recommendationEngine";
import "../style/CareerResult.css";

const CareerResult = () => {
  const navigate = useNavigate();

  const studentData = JSON.parse(
    localStorage.getItem("studentData")
  );

  const aptitude = JSON.parse(
    localStorage.getItem("aptitudeResult")
  );

  if (!studentData || !aptitude) {
    return (
      <div className="cr-page">
        <div className="cr-card" style={{ textAlign: "center" }}>
          <h1>No Recommendation Found</h1>

          <button
            className="cr-result-btn"
            onClick={() => navigate("/career-recommendation")}
          >
            Start Again
          </button>
        </div>
      </div>
    );
  }

  const recommendations = calculateRecommendations(
    studentData,
    aptitude
  );

  return (
    <div className="cr-page">
      <div className="cr-card">
        {/* ================= HEADER ================= */}

        <div className="cr-header">
          <div className="cr-brain-box">
            <FaBrain />
          </div>

          <h1>AI Career Recommendation</h1>

          <p>
            Congratulations
            <span> {studentData.fullName}</span>
          </p>

          <h3>Your Career Analysis is Complete</h3>
        </div>

        {/* ================= SUMMARY ================= */}

        <div className="cr-summary-box">
          <div className="cr-summary-item">
            <FaUserGraduate />

            <h4>{studentData.studentClass}</h4>

            <span>Class</span>
          </div>

          <div className="cr-summary-item">
            <FaChartLine />

            <h4>{studentData.marks}%</h4>

            <span>Marks</span>
          </div>

          <div className="cr-summary-item">
            <FaBrain />

            <h4>{aptitude.totalScore}</h4>

            <span>Aptitude Score</span>
          </div>
        </div>

        {/* ================= TOP CAREERS ================= */}

        <h2 className="cr-recommend-title">
          Top Career Recommendations
        </h2>

        <div className="cr-career-grid">
          {recommendations.map((career, index) => (
            <div
              className="cr-career-card"
              key={career.id}
            >
              <div className="cr-rank">
                {index === 0 && "🥇"}
                {index === 1 && "🥈"}
                {index === 2 && "🥉"}
              </div>

              <h2>{career.name}</h2>

              <p>{career.category}</p>

              <div className="cr-match-circle">
                <h1>{career.percentage}%</h1>
                <span>Match</span>
              </div>

              <div className="cr-reason-title">
                Why Recommended?
              </div>

              <div className="cr-reason-list">
                {career.reasons.map((reason, i) => (
                  <div
                    className="cr-reason-chip"
                    key={i}
                  >
                    <FaCheckCircle />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>

              <div className="cr-rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <button
                className="cr-explore-btn"
                onClick={() => navigate(career.route)}
              >
                Explore Career
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        {/* ================= FOOTER ================= */}

        <div className="cr-footer">
          <h3>
            AI Recommendation Completed Successfully
          </h3>

          <p>
            These recommendations are generated based on your
            academic performance, interests, personality,
            skills and aptitude test.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerResult;