import { useState } from "react";
import axios from "axios";
import "../style/CollegeRecommendation.css";
import { useNavigate } from "react-router-dom";
function CollegeRecommendation() {
  const [career, setCareer] = useState("");
  const [state, setState] = useState("");
  const [collegeType, setCollegeType] = useState("Any");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

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
    "Architecture"
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
    "Uttar Pradesh"
  ];

  const generateRecommendation = async () => {
    if (!career || !state) {
      alert("Please select Career and State");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/college/recommend",
        {
          career,
          state,
          collegeType,
        }
      );

      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      alert("Failed to generate recommendation");
    }

    setLoading(false);
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

      <h1>AI College Recommendation</h1>

      <div className="college-form">

        <select
          value={career}
          onChange={(e) => setCareer(e.target.value)}
        >
          <option>Select Career</option>

          {careers.map((item) => (
            <option key={item}>{item}</option>
          ))}

        </select>

        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option>Select State</option>

          {states.map((item) => (
            <option key={item}>{item}</option>
          ))}

        </select>

        <select
          value={collegeType}
          onChange={(e) => setCollegeType(e.target.value)}
        >
          <option>Government</option>
          <option>Private</option>
          <option>Any</option>
        </select>

        <button onClick={generateRecommendation}>
          Generate AI Recommendation
        </button>

      </div>

    {loading && (
<div className="loading-box">

<div className="spinner"></div>

<p>AI is analyzing colleges...</p>

</div>
)}

      {result && (

        <div
          className="college-result"
          dangerouslySetInnerHTML={{
            __html: result,
          }}
        />

      )}

    </div>
    </>
  );
}

export default CollegeRecommendation;