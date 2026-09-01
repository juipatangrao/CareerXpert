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

/* =====================================================
   RULE-BASED CAREER DATA
   No AI / No Backend
   ===================================================== */

const careerProfiles = [
  {
    name: "Software Engineer",
    route: "/it/software-engineer",
    streams: ["Science", "Engineering", "Diploma"],
    subjects: ["Mathematics", "Physics", "Computer Science"],
    skills: ["Coding", "Problem Solving", "Mathematics"],
    interests: ["Technology", "Research"],
    personalities: ["Introvert", "Ambivert"],
    workStyles: ["Office", "Remote", "Hybrid"],
    keywords: ["software", "developer", "coding", "technology"],
  },

  {
    name: "Data Scientist",
    route: "/it/data-scientist",
    streams: ["Science", "Engineering"],
    subjects: ["Mathematics", "Computer Science"],
    skills: ["Mathematics", "Coding", "Problem Solving"],
    interests: ["Technology", "Research", "Finance"],
    personalities: ["Introvert", "Ambivert"],
    workStyles: ["Office", "Remote", "Hybrid"],
    keywords: ["data", "analytics", "statistics"],
  },

  {
    name: "Doctor",
    route: "/doctor",
    streams: ["Science"],
    subjects: ["Biology", "Chemistry"],
    skills: ["Communication", "Problem Solving", "Teamwork"],
    interests: ["Medical", "Research"],
    personalities: ["Extrovert", "Ambivert"],
    workStyles: ["Office", "Field Work"],
    keywords: ["doctor", "medical", "medicine", "health"],
  },

  {
    name: "Chartered Accountant",
    route: "/banking-and-finance",
    streams: ["Commerce"],
    subjects: ["Mathematics"],
    skills: ["Mathematics", "Problem Solving", "Communication"],
    interests: ["Finance", "Business"],
    personalities: ["Introvert", "Ambivert"],
    workStyles: ["Office", "Hybrid"],
    keywords: ["finance", "account", "ca", "tax"],
  },

  {
    name: "Lawyer",
    route: "/law",
    streams: ["Arts", "Commerce", "Science"],
    subjects: ["English"],
    skills: ["Communication", "Public Speaking", "Problem Solving"],
    interests: ["Law", "Government"],
    personalities: ["Extrovert", "Ambivert"],
    workStyles: ["Office", "Field Work"],
    keywords: ["law", "lawyer", "legal", "advocate"],
  },

  {
    name: "Civil Services Officer",
    route: "/government",
    streams: ["Arts", "Commerce", "Science"],
    subjects: ["English"],
    skills: ["Communication", "Leadership", "Public Speaking"],
    interests: ["Government", "Law"],
    personalities: ["Extrovert", "Ambivert"],
    workStyles: ["Office", "Field Work"],
    keywords: ["ias", "ips", "government", "civil service"],
  },

  {
    name: "UI/UX Designer",
    route: "/design",
    streams: ["Arts", "Science", "Commerce"],
    subjects: ["Computer Science", "English"],
    skills: ["Creativity", "Communication", "Problem Solving"],
    interests: ["Design", "Technology", "Media"],
    personalities: ["Introvert", "Extrovert", "Ambivert"],
    workStyles: ["Remote", "Hybrid", "Office"],
    keywords: ["design", "ui", "ux", "creative"],
  },

  {
    name: "Business Manager",
    route: "/banking-and-finance",
    streams: ["Commerce", "Arts", "Science"],
    subjects: ["Mathematics", "English"],
    skills: ["Leadership", "Communication", "Teamwork"],
    interests: ["Business", "Finance"],
    personalities: ["Extrovert", "Ambivert"],
    workStyles: ["Office", "Hybrid"],
    keywords: ["business", "manager", "management"],
  },

  {
    name: "Research Scientist",
    route: "/science-research",
    streams: ["Science", "Engineering"],
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science",
    ],
    skills: ["Mathematics", "Problem Solving", "Creativity"],
    interests: ["Research", "Space", "Technology"],
    personalities: ["Introvert", "Ambivert"],
    workStyles: ["Office", "Field Work"],
    keywords: ["research", "scientist", "science", "laboratory"],
  },

  {
    name: "Environmental Scientist",
    route: "/environmental",
    streams: ["Science"],
    subjects: ["Biology", "Chemistry"],
    skills: ["Problem Solving", "Communication", "Creativity"],
    interests: ["Environment", "Research"],
    personalities: ["Introvert", "Extrovert", "Ambivert"],
    workStyles: ["Field Work", "Office"],
    keywords: ["environment", "climate", "ecology"],
  },

  {
    name: "Hotel Management Professional",
    route: "/hotel-management",
    streams: ["Arts", "Commerce", "Science"],
    subjects: ["English"],
    skills: ["Communication", "Teamwork", "Leadership"],
    interests: ["Hotel Management", "Business"],
    personalities: ["Extrovert", "Ambivert"],
    workStyles: ["Field Work", "Office"],
    keywords: ["hotel", "hospitality", "tourism"],
  },

  {
    name: "Merchant Navy Officer",
    route: "/merchant-navy",
    streams: ["Science", "Engineering", "Diploma"],
    subjects: ["Mathematics", "Physics"],
    skills: ["Problem Solving", "Leadership", "Teamwork"],
    interests: ["Merchant Navy"],
    personalities: ["Extrovert", "Ambivert"],
    workStyles: ["Field Work"],
    keywords: ["merchant navy", "marine", "ship"],
  },
];

/* =====================================================
   CAREER SCORING LOGIC
   ===================================================== */

const calculateCareerRecommendations = (data) => {
  const subjects = data.favoriteSubjects || [];
  const skills = data.skills || [];
  const interests = data.interests || [];
  const goal = (data.careerGoal || "").toLowerCase();

  const results = careerProfiles.map((career) => {
    let score = 0;
    const reasons = [];

    // 1. Stream Match
    if (career.streams.includes(data.stream)) {
      score += 20;
      reasons.push("Stream matched");
    }

    // 2. Favourite Subject Match
    const subjectMatches = career.subjects.filter((subject) =>
      subjects.includes(subject)
    );

    score += Math.min(subjectMatches.length * 8, 24);

    if (subjectMatches.length > 0) {
      reasons.push(`${subjectMatches.length} subject matched`);
    }

    // 3. Skill Match
    const skillMatches = career.skills.filter((skill) =>
      skills.includes(skill)
    );

    score += Math.min(skillMatches.length * 8, 24);

    if (skillMatches.length > 0) {
      reasons.push(`${skillMatches.length} skill matched`);
    }

    // 4. Interest Match
    const interestMatches = career.interests.filter((interest) =>
      interests.includes(interest)
    );

    score += Math.min(interestMatches.length * 10, 30);

    if (interestMatches.length > 0) {
      reasons.push(`${interestMatches.length} interest matched`);
    }

    // 5. Personality Match
    if (career.personalities.includes(data.personality)) {
      score += 8;
      reasons.push("Personality matched");
    }

    // 6. Work Style Match
    if (career.workStyles.includes(data.workStyle)) {
      score += 6;
      reasons.push("Work style matched");
    }

    // 7. Career Goal Match
    const keywordMatches = career.keywords.filter((keyword) =>
      goal.includes(keyword)
    );

    score += Math.min(keywordMatches.length * 5, 10);

    if (keywordMatches.length > 0) {
      reasons.push("Career goal matched");
    }

    return {
      ...career,
      score: Math.min(Math.round(score), 100),
      reasons,
    };
  });

  // Highest score first
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
};

/* =====================================================
   COMPONENT
   ===================================================== */

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

  /* =====================================================
     INPUT CHANGE
     ===================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =====================================================
     CHECKBOX CHANGE
     ===================================================== */

  const handleCheckbox = (e) => {
    const { name, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
  };

  /* =====================================================
     SUBMIT
     ===================================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate recommendations without AI
    const recommendations =
      calculateCareerRecommendations(formData);

    // Store student information
    localStorage.setItem(
      "studentData",
      JSON.stringify(formData)
    );

    // Store calculated career recommendations
    localStorage.setItem(
      "careerRecommendations",
      JSON.stringify(recommendations)
    );

    // Continue to aptitude test
    navigate("/aptitude-test");
  };

  return (
    <div className="crf-page">

      <div className="crf-overlay">

        <div className="crf-card">

          <div className="crf-header">

            <div className="crf-ai-icon">
              <FaBullseye />
            </div>

            <h1>
              Career Recommendation
            </h1>

            <p>
              Fill the information below. Your academic
              background, skills, interests, personality
              and preferences will be matched with
              career profiles.
            </p>

          </div>

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
                    min="10"
                    max="100"
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
                    <option value="">
                      Select Class
                    </option>

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
                    <option value="">
                      Select Stream
                    </option>

                    <option value="Science">
                      Science
                    </option>

                    <option value="Commerce">
                      Commerce
                    </option>

                    <option value="Arts">
                      Arts
                    </option>

                    <option value="Engineering">
                      Engineering
                    </option>

                    <option value="Diploma">
                      Diploma
                    </option>
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
                    min="0"
                    max="100"
                    required
                  />

                </div>

              </div>

            </div>

            {/* FAVOURITE SUBJECTS */}

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

                  <label
                    key={subject}
                    className="crf-check-card"
                  >

                    <input
                      type="checkbox"
                      name="favoriteSubjects"
                      value={subject}
                      checked={formData.favoriteSubjects.includes(
                        subject
                      )}
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

                  <label
                    key={skill}
                    className="crf-check-card"
                  >

                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      checked={formData.skills.includes(
                        skill
                      )}
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
                      checked={formData.interests.includes(
                        interest
                      )}
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
                  placeholder="Enter your career goal..."
                  value={formData.careerGoal}
                  onChange={handleChange}
                />

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

            <button
              type="submit"
              className="crf-next-btn"
            >

              <span>
                Continue to Aptitude Test
              </span>

              <FaArrowRight />

            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default CareerRecommendation;