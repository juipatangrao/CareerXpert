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

  /* =========================================
     CHECK DATA
  ========================================= */

  if (!studentData || !aptitude) {
    return (
      <div className="result-page">

        <div className="result-card">

          <h1>No Recommendation Found</h1>

          <button
            className="result-btn"
            onClick={() =>
              navigate("/career-recommendation")
            }
          >
            Start Again
          </button>

        </div>

      </div>
    );
  }

  /* =========================================
     RULE-BASED RECOMMENDATION
     
     Student Data + Aptitude
             ↓
        Matching Logic
             ↓
          Score
             ↓
       Top 3 Careers
  ========================================= */

  const recommendations =
    calculateRecommendations(
      studentData,
      aptitude
    );

  return (
    <div className="result-page">
<button
        className="back-btn"
        onClick={() =>
          navigate("/home")
        }
      >
        ← Back to Home
      </button>
      <div className="result-card">

        {/* ================= HEADER ================= */}

        <div className="result-header">

          <div className="brain-box">
            <FaBrain />
          </div>

          <h1>
            Career Recommendation
          </h1>

          <p>
            Congratulations
            <span>
              {" "}
              {studentData.fullName}
            </span>
          </p>

          <h3>
            Your Career Analysis is Complete
          </h3>

        </div>

        {/* ================= SUMMARY ================= */}

        <div className="summary-box">

          <div className="summary-item">

            <FaUserGraduate />

            <h4>
              {studentData.studentClass}
            </h4>

            <span>
              Class
            </span>

          </div>

          <div className="summary-item">

            <FaChartLine />

            <h4>
              {studentData.marks}%
            </h4>

            <span>
              Marks
            </span>

          </div>

          <div className="summary-item">

            <FaBrain />

            <h4>
              {aptitude.totalScore}
            </h4>

            <span>
              Aptitude Score
            </span>

          </div>

        </div>

        {/* ================= TOP 3 CAREERS ================= */}

        <h2 className="recommend-title">
          Top Career Recommendations
        </h2>

        <div className="career-grid">

          {recommendations.map(
            (career, index) => (

              <div
                className="career-result-card"
                key={career.id}
              >

                {/* RANK */}

                <div className="rank">

                  {index === 0 && "🥇"}

                  {index === 1 && "🥈"}

                  {index === 2 && "🥉"}

                </div>

                {/* CAREER NAME */}

                <h2>
                  {career.name}
                </h2>

                {/* CATEGORY */}

                <p>
                  {career.category}
                </p>

                {/* MATCH PERCENTAGE */}

                <div className="match-circle">

                  <h1>
                    {career.percentage}%
                  </h1>

                  <span>
                    Match
                  </span>

                </div>

                {/* REASONS */}

                <div className="reason-title">
                  Why Recommended?
                </div>

                <div className="reason-list">

                  {career.reasons.map(
                    (reason, i) => (

                      <div
                        className="reason-chip"
                        key={i}
                      >

                        <FaCheckCircle />

                        {reason}

                      </div>

                    )
                  )}

                </div>

                {/* RATING */}

                <div className="rating">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                {/* EXPLORE */}

                <button
                  className="explore-btn"
                  onClick={() =>
                    navigate(
                      career.route
                    )
                  }
                >

                  Explore Career

                  <FaArrowRight />

                </button>

              </div>

            )
          )}

        </div>

        {/* ================= FOOTER ================= */}

        <div className="ai-footer">

          <h3>
            Career Recommendation Completed Successfully
          </h3>

          <p>
            These recommendations are generated based on your
            academic performance, interests, personality,
            skills and aptitude test using a
            rule-based matching system.
          </p>

        </div>

      </div>

    </div>
  );
};

export default CareerResult;