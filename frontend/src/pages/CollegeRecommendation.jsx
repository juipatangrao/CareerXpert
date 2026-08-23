import { useState } from "react";
import axios from "axios";
import "../style/CollegeRecommendation.css";
import { useNavigate } from "react-router-dom";

function CollegeRecommendation() {
  const [career, setCareer] = useState("");
  const [state, setState] = useState("");
  const [collegeType, setCollegeType] = useState("Any");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const careers = [
    "Computer Engineering",
    "Information Technology",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electronics Engineering",
    "Artificial Intelligence",
    "Data Science",
    "Cyber Security",
    "Doctor",
    "Law",
    "MBA",
    "CA",
    "Architecture",
  ];

  const states = [
    "Maharashtra",
    "Gujarat",
    "Delhi",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
    "Punjab",
    "Rajasthan",
    "Madhya Pradesh",
    "Uttar Pradesh",
  ];

  const generateRecommendation = async () => {
    if (!career || !state) {
      alert("Please select Career and State");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      const res = await axios.post(
        "http://localhost:5000/api/college/recommend",
        {
          career,
          state,
          collegeType,
        }
      );

      setResult(res.data.result);
    } catch (error) {
      console.error("College Recommendation Error:", error);
      alert("Failed to find recommended colleges.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="back-btn"
        onClick={() => navigate("/home")}
      >
        ← Back to Home
      </button>

      <div className="college-page">

        <div className="college-hero">
          <span className="hero-badge">COLLEGE FINDER</span>

          <h1>Smart College Recommendation</h1>

          <p>
            Find colleges based on your career interest,
            preferred location and college type.
          </p>
        </div>

        <div className="college-form">

          <div className="form-group">
            <label>Career / Course</label>

            <select
              value={career}
              onChange={(e) => setCareer(e.target.value)}
            >
              <option value="">
                Select Career
              </option>

              {careers.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Preferred State</label>

            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">
                Select State
              </option>

              {states.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>College Type</label>

            <select
              value={collegeType}
              onChange={(e) =>
                setCollegeType(e.target.value)
              }
            >
              <option value="Any">Any</option>
              <option value="Government">
                Government
              </option>
              <option value="Private">
                Private
              </option>
            </select>
          </div>

          <button
            className="recommend-btn"
            onClick={generateRecommendation}
            disabled={loading}
          >
            {loading
              ? "Finding Colleges..."
              : "Find Recommended Colleges"}
          </button>

        </div>

        {loading && (
          <div className="loading-box">

            <div className="spinner"></div>

            <h3>Finding suitable colleges</h3>

            <p>
              Checking colleges based on your
              selected preferences...
            </p>

          </div>
        )}

        {result && !loading && (
          <div className="college-result">

            <div className="result-header">

              <div>
                <span className="result-label">
                  RECOMMENDATIONS
                </span>

                <h2>
                  Recommended Colleges
                </h2>

                <p>
                  Colleges matching{" "}
                  <strong>{result.career}</strong>{" "}
                  in{" "}
                  <strong>{result.state}</strong>
                </p>
              </div>

              <div className="result-count">
                <strong>
                  {result.totalResults}
                </strong>

                <span>
                  {result.totalResults === 1
                    ? "College Found"
                    : "Colleges Found"}
                </span>
              </div>

            </div>

            {result.colleges.length === 0 ? (
              <div className="no-result">

                <div className="no-result-icon">
                  !
                </div>

                <h3>
                  No matching colleges found
                </h3>

                <p>
                  We couldn't find colleges matching
                  your selected career, state and
                  college type.
                </p>

                <p>
                  Try selecting <strong>Any</strong>{" "}
                  as the college type or choosing
                  another state.
                </p>

              </div>
            ) : (
              <div className="college-list">

                {result.colleges.map((college) => (

                  <div
                    className="college-card"
                    key={college._id}
                  >

                    <div className="college-card-header">

                      <div className="college-title">

                        <h3>
                          {college.name}
                        </h3>

                        {college.shortName && (
                          <span className="college-short-name">
                            {college.shortName}
                          </span>
                        )}

                      </div>

                      <div className="match-score">

                        <strong>
                          {college.recommendationScore}%
                        </strong>

                        <span>
                          Match
                        </span>

                      </div>

                    </div>

                    <div className="college-basic-info">

                      <span>
                        <span className="info-icon">
                          📍
                        </span>

                        {college.location.city},{" "}
                        {college.location.state}
                      </span>

                      <span className="college-type">
                        {college.type}
                      </span>

                      {college.rating > 0 && (
                        <span>
                          <span className="info-icon">
                            ★
                          </span>

                          {college.rating}/5
                        </span>
                      )}

                    </div>

                    {college.selectedProgram && (
                      <div className="course-section">

                        <div className="section-title">
                          Course Information
                        </div>

                        <h4>
                          {college.selectedProgram.name}
                        </h4>

                        <div className="course-details">

                          {college.selectedProgram
                            .entranceExams?.length > 0 && (
                            <div className="detail-item">

                              <span className="detail-label">
                                Entrance Exams
                              </span>

                              <p>
                                {college.selectedProgram
                                  .entranceExams
                                  .join(" • ")}
                              </p>

                            </div>
                          )}

                          {college.selectedProgram
                            .eligibility && (
                            <div className="detail-item">

                              <span className="detail-label">
                                Eligibility
                              </span>

                              <p>
                                {
                                  college.selectedProgram
                                    .eligibility
                                }
                              </p>

                            </div>
                          )}

                          {college.selectedProgram
                            .cutoff != null && (
                            <div className="detail-item">

                              <span className="detail-label">
                                Cutoff
                              </span>

                              <p>
                                {
                                  college.selectedProgram
                                    .cutoff
                                }
                              </p>

                            </div>
                          )}

                          {college.selectedProgram
                            .annualFees != null && (
                            <div className="detail-item">

                              <span className="detail-label">
                                Annual Fees
                              </span>

                              <p>
                                ₹
                                {college.selectedProgram
                                  .annualFees
                                  .toLocaleString("en-IN")}
                              </p>

                            </div>
                          )}

                        </div>

                      </div>
                    )}

                    <div className="college-details">

                      {college.placement
                        ?.averagePackage != null && (
                        <div className="stat-box">

                          <span>
                            Average Package
                          </span>

                          <strong>
                            ₹
                            {(
                              college.placement
                                .averagePackage /
                              100000
                            ).toFixed(1)}
                            LPA
                          </strong>

                        </div>
                      )}

                      {college.placement
                        ?.highestPackage != null && (
                        <div className="stat-box">

                          <span>
                            Highest Package
                          </span>

                          <strong>
                            ₹
                            {(
                              college.placement
                                .highestPackage /
                              100000
                            ).toFixed(1)}
                            LPA
                          </strong>

                        </div>
                      )}

                      {college.accreditation
                        ?.naacGrade && (
                        <div className="stat-box">

                          <span>
                            NAAC Grade
                          </span>

                          <strong>
                            {
                              college.accreditation
                                .naacGrade
                            }
                          </strong>

                        </div>
                      )}

                      {college.accreditation
                        ?.nirf?.rank && (
                        <div className="stat-box">

                          <span>
                            NIRF Rank
                          </span>

                          <strong>
                            #
                            {
                              college.accreditation
                                .nirf.rank
                            }
                          </strong>

                        </div>
                      )}

                    </div>

                    {college.facilities?.length > 0 && (
                      <div className="facilities">

                        <span className="detail-label">
                          Facilities
                        </span>

                        <div className="facility-list">

                          {college.facilities.map(
                            (facility) => (
                              <span
                                key={facility}
                              >
                                {facility}
                              </span>
                            )
                          )}

                        </div>

                      </div>
                    )}

                    <div className="college-footer">

                      <div className="verification">

                        {college.verified && (
                          <span>
                            ✓ Verified Information
                          </span>
                        )}

                        {college.hostel && (
                          <span>
                            ✓ Hostel Available
                          </span>
                        )}

                        {college.scholarshipAvailable && (
                          <span>
                            ✓ Scholarships
                          </span>
                        )}

                      </div>

                      {college.website && (
                        <a
                          href={college.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="view-college-btn"
                        >
                          Visit College Website →
                        </a>
                      )}

                    </div>

                  </div>

                ))}

              </div>
            )}

          </div>
        )}

      </div>
    </>
  );
}

export default CollegeRecommendation;