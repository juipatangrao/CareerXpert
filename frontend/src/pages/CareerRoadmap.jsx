import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkedAlt } from "react-icons/fa";
import "../style/CareerRoadmap.css";


export default function CareerRoadmap() {
  const navigate = useNavigate();

  const [education, setEducation] = useState("");
  const [career, setCareer] = useState("");

const educationOptions = [
  // Existing 20
  "12th Science",
  "12th Commerce",
  "12th Arts",
  "Diploma",
  "ITI",
  "BE",
  "BTech",
  "BCA",
  "BSc",
  "BCom",
  "BA",
  "BBA",
  "MBBS",
  "BDS",
  "BPharm",
  "LLB",
  "BEd",
  "BArch",
  "CA",
  "Graduation",

  // Additional 20
  "MCA",
  "MSc",
  "MCom",
  "MA",
  "MBA",
  "MTech",
  "ME",
  "LLM",
  "MEd",
  "MPharm",
  "PhD",
  "BSc Nursing",
  "BAMS",
  "BHMS",
  "BUMS",
  "BPT",
  "BDes",
  "BFA",
  "BHM",
  "BSc Agriculture",

  // Additional 30

"10th",
"12th Vocational",
"Polytechnic",
"Advanced Diploma",
"BSW",
"BS",
"BMS",
"BBM",
"BJMC",
"BMM",
"B.Des Fashion",
"B.Des Interior",
"B.Des Product Design",
"Animation & Multimedia",
"Film & Television",
"Journalism",
"Mass Communication",
"Photography",
"Fashion Design",
"Interior Design",
"Graphic Design",
"Hotel Management",
"Hospitality Management",
"Travel & Tourism",
"Aviation",
"Airport Management",
"Nutrition & Dietetics",
"Optometry",
"Occupational Therapy",
"Medical Laboratory Technology",
];

 const careerOptions = [
  // Existing 15
  "Software Engineer",
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Doctor",
  "Actor",
  "Lawyer",
  "Chartered Accountant",
  "Teacher",
  "Pilot",
  "Designer",
  "Chef",
  "Government Officer",
  "Entrepreneur",

  // Additional 25
  "Data Scientist",
  "Data Analyst",
  "AI Engineer",
  "Machine Learning Engineer",
  "Cybersecurity Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "Mobile App Developer",
  "Game Developer",
  "UI/UX Designer",
  "Software Tester",
  "Database Administrator",
  "Network Engineer",
  "Blockchain Developer",
  "Product Manager",
  "Project Manager",
  "Digital Marketer",
  "Content Writer",
  "Journalist",
  "Graphic Designer",
  "Architect",
  "Civil Engineer",
  "Mechanical Engineer",
  "Electrical Engineer",
  "Financial Analyst",
  // Additional 30

"Psychologist",
"Psychiatrist",
"Pharmacist",
"Dentist",
"Physiotherapist",
"Nutritionist",
"Veterinarian",
"Biotechnologist",
"Microbiologist",
"Research Scientist",

"Professor",
"Lecturer",
"Social Worker",
"Counselor",
"Public Relations Specialist",
"Human Resource Manager",
"Business Consultant",
"Investment Banker",
"Bank Manager",
"Insurance Advisor",

"Fashion Designer",
"Interior Designer",
"Photographer",
"Animator",
"Film Director",
"Video Editor",
"Music Producer",
"Event Manager",
"Hotel Manager",
"Travel Consultant",
// Additional 30

"Police Officer",
"IPS Officer",
"IAS Officer",
"Indian Army Officer",
"Air Force Officer",
"Navy Officer",

"Firefighter",
"Forensic Scientist",
"Criminologist",
"Detective",

"Judge",
"Legal Advisor",
"Company Secretary",
"Tax Consultant",
"Auditor",

"Economist",
"Statistician",
"Actuary",
"Stock Broker",
"Investment Advisor",

"Supply Chain Manager",
"Logistics Manager",
"Operations Manager",
"Retail Manager",

"Marine Engineer",
"Merchant Navy Officer",
"Commercial Pilot Instructor",

"Fitness Trainer",
"Sports Coach",
"Professional Athlete",
];

  const [educationOpen, setEducationOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);

  const filteredEducation = educationOptions.filter((item) =>
    item.toLowerCase().includes(education.toLowerCase())
  );

  const filteredCareer = careerOptions.filter((item) =>
    item.toLowerCase().includes(career.toLowerCase())
  );

  const handleGenerate = () => {
    if (!education.trim() || !career.trim()) {
      alert("Please enter your education and target career.");
      return;
    }

    navigate("/career-roadmap-result", {
      state: {
        education,
        career,
      },
    });
  };

  return (
    <div className="roadmap-page">

      <div className="roadmap-card">

        <button
          className="roadmap-back-btn"
          onClick={() => navigate("/home")}
        >
          ← Back
        </button>

        <div className="roadmap-heading">

         <div className="roadmap-heading-icon">
  <FaMapMarkedAlt />
</div>

          <h1>Career Roadmap</h1>

          <p>
            Build a clear path from where you are today
            to where you want to be.
          </p>

        </div>


        {/* CURRENT EDUCATION */}

        <div className="roadmap-field">

          <label>Current Education</label>

          <div className="roadmap-dropdown">

            <input
              type="text"
              value={education}
              placeholder="Select or type your education"
              onFocus={() => setEducationOpen(true)}
              onChange={(e) => {
                setEducation(e.target.value);
                setEducationOpen(true);
              }}
            />

            <button
              type="button"
              className="dropdown-arrow"
              onClick={() => setEducationOpen(!educationOpen)}
            >
              ▾
            </button>

         {educationOpen && (
  <div className="dropdown-options">

    {filteredEducation.map((item) => (
      <div
        key={item}
        className="dropdown-option"
        onClick={() => {
          setEducation(item);
          setEducationOpen(false);
        }}
      >
        {item}
      </div>
    ))}

  </div>
)}

          </div>

        </div>


        {/* TARGET CAREER */}

        <div className="roadmap-field">

          <label>Target Career</label>

          <div className="roadmap-dropdown">

            <input
              type="text"
              value={career}
              placeholder="Select or type your target career"
              onFocus={() => setCareerOpen(true)}
              onChange={(e) => {
                setCareer(e.target.value);
                setCareerOpen(true);
              }}
            />

            <button
              type="button"
              className="dropdown-arrow"
              onClick={() => setCareerOpen(!careerOpen)}
            >
              ▾
            </button>

         {careerOpen && (
  <div className="dropdown-options">

    {filteredCareer.map((item) => (
      <div
        key={item}
        className="dropdown-option"
        onClick={() => {
          setCareer(item);
          setCareerOpen(false);
        }}
      >
        {item}
      </div>
    ))}

  </div>
)}

          </div>

        </div>


        {/* GENERATE */}

        <button
          className="generate-roadmap-btn"
          onClick={handleGenerate}
        >
          Generate Career Roadmap
          <span>→</span>
        </button>

        <p className="roadmap-note">
          Your roadmap will be created based on your
          current education and career goal.
        </p>

      </div>

    </div>
  );
}