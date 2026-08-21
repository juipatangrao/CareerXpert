import React, { useState, useEffect } from "react";
import "../style/AIJobRecommendation.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AIJobRecommendation() {
  const navigate = useNavigate();

const [loading, setLoading] = useState(false);
const [recommendation, setRecommendation] = useState("");
const [messageIndex, setMessageIndex] = useState(0);

const messages = [
  "Analyzing your profile...",
  "Matching your skills...",
  "Checking your interests...",
  "Finding the best career paths...",
  "Calculating recommendation scores...",
  "Preparing your personalized recommendations..."
];

useEffect(() => {
  if (!loading) return;

  const interval = setInterval(() => {
    setMessageIndex((prev) => (prev + 1) % messages.length);
  }, 450);

  return () => clearInterval(interval);
}, [loading]);

const handleGenerate = async () => {
  try {
    setLoading(true);
    setRecommendation("");

    const start = Date.now();

    const res = await axios.post(
      "http://localhost:5000/api/jobs/recommend",
      {
        userId: localStorage.getItem("userId"),
      }
    );

    // Keep animation visible for at least 2.5 seconds
    const elapsed = Date.now() - start;

    if (elapsed < 2500) {
      await new Promise((resolve) =>
        setTimeout(resolve, 2500 - elapsed)
      );
    }

    setRecommendation(res.data.recommendation);
  } catch (err) {
    console.log(err);
    alert("Failed to generate recommendations.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <button className="back-btn" onClick={() => navigate("/home")}>
        ← Back to Home
      </button>

      <div className="job-page">
        <div className="job-card">
          <h1>🎯 Smart Job Recommendation</h1>
          <p>
            Get personalized AI job recommendations based on your profile,
            skills and interests.
          </p>

          <button className="generate-btn" onClick={handleGenerate}>
            Generate Recommendations
          </button>

        {loading && (
  <div className="loading-overlay">
    <div className="loader"></div>

    <h2>Generating Career Recommendations</h2>

    <p>{messages[messageIndex]}</p>

    <div className="progress">
      <div className="progress-fill"></div>
    </div>
  </div>
)}

          {recommendation && (
            <div
              className="job-result"
              dangerouslySetInnerHTML={{
                __html: recommendation,
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AIJobRecommendation;
