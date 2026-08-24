import { useState, useEffect } from "react";
import axios from "axios";
import "../style/CoachingRecommendation.css";
import { useNavigate } from "react-router-dom";

function CoachingRecommendation() {
  const [exam, setExam] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [mode, setMode] = useState("Any");
  const navigate = useNavigate();

  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const exams = [
    "JEE (Engineering)", "NEET (Medical)", "UPSC (Civil Services)", "CAT (MBA)",
    "CA Foundation", "CLAT (Law)", "GATE", "Banking (IBPS/SBI)", "SSC", "NDA",
    "Diploma Entrance (Polytechnic)", "Diploma to Degree (Lateral Entry)",
    "Board Exam Tuition (11th/12th)", "Foundation (8th-10th)", "GRE/GMAT", "IELTS/TOEFL"
  ];

  const states = [
    "Maharashtra", "Gujarat", "Delhi", "Karnataka", "Tamil Nadu",
    "Kerala", "Punjab", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh"
  ];

  // When state changes, fetch cities
  useEffect(() => {
    if (!state) {
      setCities([]);
      return;
    }
    axios
      .get(`http://localhost:5000/api/location/cities/${state}`)
      .then((res) => setCities(res.data))
      .catch(() => setCities([]));

    setCity("");
    setArea("");
    setAreas([]);
  }, [state]);

  // When city changes, fetch areas
  useEffect(() => {
    if (!state || !city) {
      setAreas([]);
      return;
    }
    axios
      .get(`http://localhost:5000/api/location/areas/${state}/${city}`)
      .then((res) => setAreas(res.data))
      .catch(() => setAreas([]));

    setArea("");
  }, [city, state]);

  const generateRecommendation = async () => {
    if (!exam || !state) {
      alert("Please select Course and State");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/coaching/recommend",
        { exam, state, city, area, mode }
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
      <button className="back-btn" onClick={() => navigate("/home")}>
        ← Back to Home
      </button>
      <div className="coaching-page">

        <h1>Coaching Recommendation</h1>

        <div className="coaching-form">

          <select value={exam} onChange={(e) => setExam(e.target.value)}>
            <option value="">Select Course</option>
            {exams.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">Select State</option>
            {states.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={!state || cities.length === 0}
          >
            <option value="">Select City</option>
            {cities.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            disabled={!city || areas.length === 0}
          >
            <option value="">Select Area (optional)</option>
            {areas.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option>Offline</option>
            <option>Online</option>
            <option>Any</option>
          </select>

          <button onClick={generateRecommendation}>
            Get Recommendation
          </button>

        </div>

        {loading && (
          <div className="loading-box">
            <div className="spinner"></div>
            <p>Finding the best coaching institutes...</p>
          </div>
        )}

        {result && (
          <div
            className="coaching-result"
            dangerouslySetInnerHTML={{ __html: result }}
          />
        )}

      </div>
    </>
  );
}

export default CoachingRecommendation;