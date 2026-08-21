import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/AIJobRecommendationSection.css";

function AIJobRecommendationSection() {
  const navigate = useNavigate();

  return (
    <section className="ai-job-section">
      <div className="ai-job-left">
        <span className="ai-badge">🎯 Smart Match</span>
        <h2>
          Smart Job <span>Recommendation</span>
        </h2>

        <p>
          Discover the best career opportunities based on your skills,
          interests, education and career goals.
        </p>

        <div className="feature-list">
          <div>✅ Personalized Job Suggestions</div>

          <div>📊 Match Percentage</div>

          <div>💰 Salary Insights</div>

          <div>📚 Learning Roadmap</div>

          <div>🚀 Skill Gap Analysis</div>
        </div>

        <button
          className="generate-btn"
          onClick={() => navigate("/job-recommendation")}
        >
          Generate Recommendations →
        </button>
      </div>

      <div className="ai-job-right">
        <div className="preview-card">
          <h3>Recommended Jobs</h3>

          <div className="job-item">
            <span>💻 Software Engineer</span>
            <span className="match">95%</span>
          </div>

          <div className="job-item">
            <span>🤖 AI Engineer</span>
            <span className="match">92%</span>
          </div>

          <div className="job-item">
            <span>🌐 Full Stack Developer</span>
            <span className="match">90%</span>
          </div>

          <div className="job-item">
            <span>☁ Cloud Engineer</span>
            <span className="match">87%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIJobRecommendationSection;
