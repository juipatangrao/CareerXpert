import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaBrain,
  FaBook,
  FaLaptopCode,
  FaArrowRight,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBullseye,
  FaUserTie,
} from "react-icons/fa";
import "../style/CareerRecommendation.css";

const CareerRecommendation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    studentClass: "",
    stream: "",
    marks: "",
    favoriteSubjects: [],
    skills: [],
    interests: [],
    personality: "",
    careerGoal: "",
    workStyle: "",
    salaryRange: "",
    locationPreference: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    const { name, value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        [name]: [...formData[name], value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: formData[name].filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "studentData",
      JSON.stringify(formData)
    );

    navigate("/aptitude-test");
  };

  return (
    <div className="crf-page">

      <div className="crf-overlay">

        <div className="crf-card">

          <div className="crf-header">

            <div className="crf-ai-icon">

              <FaBrain />

            </div>

            <h1>AI Career Recommendation</h1>

            <p>
              Fill the information below and let our AI analyze
              your interests, skills, aptitude and personality
              to recommend the best career for you.
            </p>

          </div>

          {/* <div className="progress-bar">

            <div className="progress-fill"></div>

          </div> */}

          <form onSubmit={handleSubmit}>

            {/* PERSONAL INFORMATION */}

            <div className="crf-section">

              <h2>

                <FaUserGraduate />

                Personal Information

              </h2>

              <div className="crf-form-group">

                <label>Full Name</label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="crf-two-column">

                <div className="crf-form-group">

                  <label>Age</label>

                  <input
                    type="number"
                    name="age"
                    placeholder="Enter age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="crf-form-group">

                  <label>Class</label>

                  <select
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleChange}
                    required
                  >

                    <option value="">Select Class</option>

                    <option value="10th">10th</option>

                    <option value="12th">12th</option>

                    <option value="Diploma">Diploma</option>

                    <option value="Graduate">Graduate</option>

                  </select>

                </div>

              </div>

              <div className="crf-two-column">

                <div className="crf-form-group">

                  <label>Stream</label>

                  <select
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                    required
                  >

                    <option value="">Select Stream</option>

                    <option value="Science">Science</option>

                    <option value="Commerce">Commerce</option>

                    <option value="Arts">Arts</option>

                    <option value="Engineering">Engineering</option>

                    <option value="Diploma">Diploma</option>

                  </select>

                </div>

                <div className="crf-form-group">

                  <label>Marks (%)</label>

                  <input
                    type="number"
                    name="marks"
                    placeholder="Enter Percentage"
                    value={formData.marks}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

            </div>

            {/* FAVORITE SUBJECTS */}

            <div className="crf-section">

              <h2>

                <FaBook />

                Favourite Subjects

              </h2>

              <div className="crf-checkbox-grid">

                {[
                  "Mathematics",
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "Computer Science",
                  "English",
                ].map((subject) => (

                  <label key={subject} className="crf-check-card">

                    <input
                      type="checkbox"
                      name="favoriteSubjects"
                      value={subject}
                      onChange={handleCheckbox}
                    />

                    <span>{subject}</span>

                  </label>

                ))}

              </div>

            </div>

            {/* SKILLS */}

            <div className="crf-section">

              <h2>

                <FaLaptopCode />

                Skills

              </h2>

              <div className="crf-checkbox-grid">

                {[
                  "Coding",
                  "Communication",
                  "Leadership",
                  "Creativity",
                  "Mathematics",
                  "Problem Solving",
                  "Teamwork",
                  "Public Speaking",
                ].map((skill) => (

                  <label key={skill} className="crf-check-card">

                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      onChange={handleCheckbox}
                    />

                    <span>{skill}</span>

                  </label>

                ))}
              </div>

            </div>

            {/* INTERESTS */}

            <div className="crf-section">

              <h2>

                <FaBrain />

                Interests

              </h2>

              <div className="crf-checkbox-grid">

                {[
                  "Technology",
                  "Medical",
                  "Business",
                  "Design",
                  "Sports",
                  "Research",
                  "Government",
                  "Law",
                  "Finance",
                  "Teaching",
                  "Space",
                  "Environment",
                  "Media",
                  "Hotel Management",
                  "Merchant Navy",
                ].map((interest) => (

                  <label
                    key={interest}
                    className="crf-check-card"
                  >

                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      onChange={handleCheckbox}
                    />

                    <span>{interest}</span>

                  </label>

                ))}

              </div>

            </div>

            {/* PERSONALITY */}

            <div className="crf-section">

              <h2>

                <FaUserTie />

                Personality Type

              </h2>

              <div className="crf-form-group">

                <select
                  name="personality"
                  value={formData.personality}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Personality
                  </option>

                  <option value="Introvert">
                    Introvert
                  </option>

                  <option value="Extrovert">
                    Extrovert
                  </option>

                  <option value="Ambivert">
                    Ambivert
                  </option>

                </select>

              </div>

            </div>

            {/* CAREER GOAL */}

            <div className="crf-section">

              <h2>

                <FaBullseye />

                Career Goal

              </h2>

              <div className="crf-form-group">

                <textarea
                  rows="5"
                  name="careerGoal"
                  placeholder="Example : I want to become an AI Engineer..."
                  value={formData.careerGoal}
                  onChange={handleChange}
                ></textarea>

              </div>

            </div>

            {/* WORK STYLE */}

            <div className="crf-section">

              <h2>

                Preferred Work Style

              </h2>

              <div className="crf-form-group">

                <select
                  name="workStyle"
                  value={formData.workStyle}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Work Style
                  </option>

                  <option value="Office">
                    Office
                  </option>

                  <option value="Remote">
                    Remote
                  </option>

                  <option value="Hybrid">
                    Hybrid
                  </option>

                  <option value="Field Work">
                    Field Work
                  </option>

                </select>

              </div>

            </div>

            {/* SALARY */}

            <div className="crf-section">

              <h2>

                <FaMoneyBillWave />

                Expected Salary

              </h2>

              <div className="crf-form-group">

                <select
                  name="salaryRange"
                  value={formData.salaryRange}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Salary
                  </option>

                  <option value="3-5 LPA">
                    3 - 5 LPA
                  </option>

                  <option value="5-10 LPA">
                    5 - 10 LPA
                  </option>

                  <option value="10-20 LPA">
                    10 - 20 LPA
                  </option>

                  <option value="20+ LPA">
                    20+ LPA
                  </option>

                </select>

              </div>

            </div>

            {/* LOCATION */}

            <div className="crf-section">

              <h2>

                <FaMapMarkerAlt />

                Preferred Work Location

              </h2>

              <div className="crf-form-group">

                <select
                  name="locationPreference"
                  value={formData.locationPreference}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Location
                  </option>

                  <option value="India">
                    India
                  </option>

                  <option value="Abroad">
                    Abroad
                  </option>

                  <option value="No Preference">
                    No Preference
                  </option>

                </select>

              </div>

            </div>

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className="crf-next-btn"
            >

              Continue to Aptitude Test

              <FaArrowRight />

            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default CareerRecommendation;