import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import "../style/SkillGapResult.css";

const SkillGapResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state;

  const [progress, setProgress] = useState(0);

  // -----------------------------------------
  // ANIMATED MATCH PERCENTAGE
  // -----------------------------------------

  useEffect(() => {
    if (!result) return;

    const target = parseInt(result.matchPercentage) || 0;

    let current = 0;

    const interval = setInterval(() => {
      current++;

      setProgress(current);

      if (current >= target) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [result]);

  // -----------------------------------------
  // DOWNLOAD PDF
  // -----------------------------------------

  const downloadPDF = () => {
    if (!result) return;

    const doc = new jsPDF();

    let y = 20;

    // Title
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Skill Gap Analysis Report", 20, y);

    y += 18;

    // Career Information
    doc.setFontSize(13);
    doc.setFont("helvetica", "normal");

    doc.text(
      `Dream Career: ${result.career}`,
      20,
      y
    );

    y += 9;

    doc.text(
      `Current Education: ${result.education}`,
      20,
      y
    );

    y += 9;

    doc.text(
      `Experience Level: ${result.experience}`,
      20,
      y
    );

    y += 9;

    doc.text(
      `Available Study Hours: ${result.studyHours}`,
      20,
      y
    );

    y += 14;

    // Match
    doc.setFont("helvetica", "bold");

    doc.text(
      `Skill Match: ${result.matchPercentage}`,
      20,
      y
    );

    y += 15;

    // Current Skills
    doc.text("Current Skills:", 20, y);

    y += 8;

    doc.setFont("helvetica", "normal");

    if (result.currentSkills?.length > 0) {
      result.currentSkills.forEach((skill) => {
        doc.text(`• ${skill}`, 30, y);
        y += 7;

        if (y > 270) {
          doc.addPage();
          y = 20;
        }
      });
    } else {
      doc.text("No skills added.", 30, y);
      y += 8;
    }

    y += 5;

    // Required Skills
    doc.setFont("helvetica", "bold");

    doc.text("Required Skills:", 20, y);

    y += 8;

    doc.setFont("helvetica", "normal");

    result.requiredSkills?.forEach((skill) => {
      doc.text(`• ${skill}`, 30, y);
      y += 7;

      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    y += 5;

    // Missing Skills
    doc.setFont("helvetica", "bold");

    doc.text("Missing Skills:", 20, y);

    y += 8;

    doc.setFont("helvetica", "normal");

    if (result.missingSkills?.length > 0) {
      result.missingSkills.forEach((skill) => {
        doc.text(`• ${skill}`, 30, y);
        y += 7;

        if (y > 270) {
          doc.addPage();
          y = 20;
        }
      });
    } else {
      doc.text(
        "Great! You have all the required skills.",
        30,
        y
      );

      y += 8;
    }

    y += 5;

    // Recommended Next Steps
    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    doc.setFont("helvetica", "bold");

    doc.text(
      "Recommended Next Steps:",
      20,
      y
    );

    y += 8;

    doc.setFont("helvetica", "normal");

    result.recommendedNextSteps?.forEach((step) => {
      const lines = doc.splitTextToSize(
        step,
        165
      );

      doc.text(lines, 25, y);

      y += lines.length * 7 + 3;

      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    y += 5;

    // Study Recommendation
    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    doc.setFont("helvetica", "bold");

    doc.text(
      "Study Recommendation:",
      20,
      y
    );

    y += 8;

    doc.setFont("helvetica", "normal");

    const recommendationLines =
      doc.splitTextToSize(
        result.studyRecommendation || "",
        165
      );

    doc.text(
      recommendationLines,
      20,
      y
    );

    doc.save("SkillGapAnalysisReport.pdf");
  };

  // -----------------------------------------
  // NO RESULT
  // -----------------------------------------

  if (!result) {
    return (
      <div className="result-page">
        <div className="result-card no-data">

          <h2>No Analysis Data Found</h2>

          <p>
            Please complete the Skill Gap Analysis
            first.
          </p>

          <button
            className="back-btn"
            onClick={() =>
              navigate("/skill-gap")
            }
          >
            Go Back
          </button>

        </div>
      </div>
    );
  }

  // -----------------------------------------
  // RESULT UI
  // -----------------------------------------

  return (
    <div className="result-page">

      <div className="result-card">

        {/* HEADER */}

        <div className="result-header">

          <h1>
            Skill Gap Analysis Report
          </h1>

          <p>
            Your personalized career skill overview
          </p>

        </div>

        {/* MATCH */}

        <div className="match-section">

          <div
            className="percentage-box"
            style={{
              background: `conic-gradient(
                #800000 ${progress * 3.6}deg,
                #e5dddd 0deg
              )`,
            }}
          >
            <div className="percentage-inner">

              <h2>
                {progress}%
              </h2>

              <p>
                Skill Match
              </p>

            </div>
          </div>

        </div>

        {/* CAREER DETAILS */}

        <div className="result-section">

          <h3>Career Overview</h3>

          <div className="career-details">

            <div className="detail-box">
              <span>Dream Career</span>
              <strong>
                {result.career}
              </strong>
            </div>

            <div className="detail-box">
              <span>Education</span>
              <strong>
                {result.education}
              </strong>
            </div>

            <div className="detail-box">
              <span>Experience</span>
              <strong>
                {result.experience}
              </strong>
            </div>

            <div className="detail-box">
              <span>Study Hours</span>
              <strong>
                {result.studyHours}
              </strong>
            </div>

          </div>

        </div>

        {/* CURRENT SKILLS */}

        <div className="result-section">

          <h3>Your Current Skills</h3>

          <div className="skills">

            {result.currentSkills?.length > 0 ? (
              result.currentSkills.map(
                (skill, index) => (
                  <span
                    className="skill"
                    key={index}
                  >
                    {skill}
                  </span>
                )
              )
            ) : (
              <p>
                No current skills added.
              </p>
            )}

          </div>

        </div>

        {/* REQUIRED SKILLS */}

        <div className="result-section">

          <h3>Required Skills</h3>

          <div className="skills">

            {result.requiredSkills?.map(
              (skill, index) => (
                <span
                  className="required"
                  key={index}
                >
                  {skill}
                </span>
              )
            )}

          </div>

        </div>

        {/* MISSING SKILLS */}

        <div className="result-section">

          <h3>Skills You Need to Learn</h3>

          {result.missingSkills?.length > 0 ? (

            <div className="skills">

              {result.missingSkills.map(
                (skill, index) => (
                  <span
                    className="missing"
                    key={index}
                  >
                    {skill}
                  </span>
                )
              )}

            </div>

          ) : (

            <div className="success-message">
              ✓ Excellent! You already have
              all the required skills.
            </div>

          )}

        </div>

        {/* NEXT STEPS */}

        <div className="result-section">

          <h3>
            Recommended Next Steps
          </h3>

          <div className="recommendations">

            {result.recommendedNextSteps?.map(
              (step, index) => (
                <div
                  className="recommendation-item"
                  key={index}
                >
                  <div className="step-number">
                    {index + 1}
                  </div>

                  <p>{step}</p>
                </div>
              )
            )}

          </div>

        </div>

        {/* STUDY RECOMMENDATION */}

        <div className="result-section">

          <h3>
            Study Recommendation
          </h3>

          <div className="study-recommendation">

            <p>
              {result.studyRecommendation}
            </p>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="result-buttons">

          <button
            className="download-btn"
            onClick={downloadPDF}
          >
            Download PDF
          </button>

         

        </div>

      </div>

    </div>
  );
};

export default SkillGapResult;