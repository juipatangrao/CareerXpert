import React, { useState } from "react";
import "../style/CareerComparison.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const careerList = [
  "Software Engineer",
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "Data Analyst",
  "Cyber Security Engineer",
  "Civil Engineer",
  "Mechanical Engineer",
  "Computer Engineer",
  "Doctor",
  "Dentist",
  "Cardiologist",
  "Lawyer",
  "Judge",
  "IAS Officer",
  "IPS Officer",
  "Commercial Pilot",
  "Graphic Designer",
  "UI/UX Designer",
  "Hotel Manager",
  "Scientist",
  "Astronaut"
];

function CareerComparison() {
  const navigate = useNavigate();
  const [career1, setCareer1] = useState("");
  const [career2, setCareer2] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const handleCompare = async () => {

  if (!career1 || !career2) {
    alert("Please select both careers.");
    return;
  }

  if (career1 === career2) {
    alert("Please select different careers.");
    return;
  }

  try {

    setLoading(true);

    setResult("");

    const res = await axios.post(
      "http://localhost:5000/api/career-comparison",
      {
        career1,
        career2,
        userId: localStorage.getItem("userId"),
      }
    );

setResult(res.data.comparison);
  } catch (err) {

    console.log(err);

    alert("Comparison failed.");

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
    <div className="comparison-page">
   
      <div className="comparison-card">
    
<h1>Career Comparison Dashboard</h1>
        <p>
          Compare two careers and discover which one suits you better.
        </p>

        <div className="dropdown-group">

          <div className="dropdown-box">

            <label>Career 1</label>

            <select
              value={career1}
              onChange={(e) => setCareer1(e.target.value)}
            >
              <option value="">Select Career</option>

              {careerList.map((career) => (
                <option key={career}>{career}</option>
              ))}
            </select>

          </div>

          <div className="vs-text">

            VS

          </div>

          <div className="dropdown-box">

            <label>Career 2</label>

            <select
              value={career2}
              onChange={(e) => setCareer2(e.target.value)}
            >
              <option value="">Select Career</option>

              {careerList.map((career) => (
                <option key={career}>{career}</option>
              ))}
            </select>

          </div>

        </div>

       <button
  className="compare-btn"
  onClick={handleCompare}
>
  Compare Careers
</button>

{loading && (
  <div className="loading">
Generating Career Comparison Report  </div>
)}

{result && (
  <div className="comparison-result">
    <div
      dangerouslySetInnerHTML={{
        __html: result,
      }}
    />
  </div>
)}
      </div>

    </div>
    </>
  );
}

export default CareerComparison;