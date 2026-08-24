import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/CareerTemplate.css";

import {
  FaBookOpen,
  FaGraduationCap,
  FaLaptopCode,
  FaClipboardCheck,
  FaTrophy,
  FaMicrophone,
  FaRocket,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";



const CareerTemplate = ({
  title,
  subtitle,
  logo,
  banner,
  overview,
  education,
  skills,
  exams,
  scope,
  salary,
  dayToDayWork,
  careerTest,
  roadmap,
  realityCheck,
  parentCareerPath,
}) => {

//   const location = useLocation();

// const pathParts = location.pathname
//   .split("/")
//   .filter(Boolean);

// const parentCareerPath =
//   pathParts.length > 1
//     ? `/${pathParts[0]}`
//     : "/home";

  // Sidebar Pages
  const [activePage, setActivePage] = useState("Overview");

  // Top Tabs (Overview)
  const [activeTab, setActiveTab] = useState("Overview");

  // Expand / Collapse Overview Menu
  const [showOverviewMenu, setShowOverviewMenu] = useState(true);

  const [isSaved, setIsSaved] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const tabs = [
    "Overview",
    "Education",
    "Skills",
    "Exams",
    "Scope",
    "Salary",
    "Day to Day Work",
  ];

  const sidebarPages = [
    "Career Test",
    "Roadmap",
    "Reality Check",
    "Saved Careers",
    "Profile",
    "Settings",
    "Logout",
  ];

  const handleSaveCareer = () => {
  let savedCareers =
    JSON.parse(localStorage.getItem("savedCareers")) || [];

  if (isSaved) {
    savedCareers = savedCareers.filter(
      (career) => career !== title
    );
  } else {
    savedCareers.push(title);
  }

  localStorage.setItem(
    "savedCareers",
    JSON.stringify(savedCareers)
  );

  setIsSaved(!isSaved);
};

const handleAnswer = (questionIndex, answer) => {
  setAnswers((prev) => ({
    ...prev,
    [questionIndex]: answer,
  }));
};

const handleSubmitTest = () => {

  let yesCount = 0;

  Object.values(answers).forEach((answer) => {
    if (answer === "Yes") {
      yesCount++;
    }
  });

  const percentage = Math.round(
    (yesCount / careerTest.length) * 100
  );

  setScore(percentage);

};

const roadmapIcons = [
  <FaBookOpen />,
  <FaGraduationCap />,
  <FaGraduationCap />,
  <FaLaptopCode />,
  <FaClipboardCheck />,
  <FaTrophy />,
  <FaMicrophone />,
  <FaCertificate />,
  <FaRocket />,
  <FaBriefcase />,
];


  return (
    <div className="career-template-page">
            {/* ================= Sidebar ================= */}

      <div className="career-template-sidebar">

        <div className="career-template-sidebar-top">

          {/* Logo & Title */}

          <div className="career-template-card">

            <img src={logo} alt={title} />

            <div>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>

          </div>

          <ul className="career-sidebar-menu">

            {/* Home */}

<li>
  <Link
    to={parentCareerPath || "/home"}
    className="career-sidebar-link"
  >
    🏠 Home
  </Link>
</li>
            {/* Overview */}

            <li
              className={
                activePage === "Overview"
                  ? "career-active"
                  : ""
              }
              onClick={() => {
                setActivePage("Overview");
                setShowOverviewMenu(!showOverviewMenu);
              }}
            >
              📖 Overview
            </li>

            {/* Dropdown */}

            {showOverviewMenu && (

              <ul className="career-overview-dropdown">

                {tabs.map((tab) => (

                  <li
                    key={tab}
                    className={
                      activeTab === tab
                        ? "career-active"
                        : ""
                    }
                    onClick={() => {
                      setActivePage("Overview");
                      setActiveTab(tab);
                    }}
                  >
                    {tab}
                  </li>

                ))}

              </ul>

            )}

            {/* Remaining Pages */}

            {sidebarPages.map((page) => (

              <li
                key={page}
                className={
                  activePage === page
                    ? "career-active"
                    : ""
                }
                onClick={() => setActivePage(page)}
              >
                {page}
              </li>

            ))}

          </ul>

        </div>

      </div>

      {/* ================= Main Content ================= */}

      <div className="career-template-content">
              {/* ================= Header ================= */}

        <div className="career-template-header">

          <div className="career-template-header-left">

            <img src={logo} alt={title} />

            <div>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>

          </div>

          <img
            src={banner}
            alt={title}
            className="career-template-banner"
          />

        </div>

        {/* ================= Overview Tabs ================= */}

        {activePage === "Overview" && (

          <>

            <div className="career-template-top-tabs">

              {tabs.map((tab) => (

                <button
                  key={tab}
                  className={
                    activeTab === tab
                      ? "career-template-tab career-template-active-tab"
                      : "career-template-tab"
                  }
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>

              ))}

            </div>

            <div className="career-template-tab-content">
                          {activeTab === "Overview" && (
                <>
                  <div className="career-template-about-header">
                    <h2>About {title}</h2>

                    <button className="career-heart-btn" onClick={handleSaveCareer}>
                      {isSaved ? "❤️" : "🤍"}
                    </button>
                  </div>

                  <p className="career-template-about-text">
                    {overview}
                  </p>

                  {/* Information Table */}

                  <div className="career-info-table">

                    <div className="career-info-row">
                      <span>Educational Path</span>
                      <span>{education}</span>
                    </div>

                    <div className="career-info-row">
                      <span>Required Skills</span>
                      <span>{skills.join(", ")}</span>
                    </div>

                    <div className="career-info-row">
                      <span>Top Exams</span>
                      <span>{exams.join(", ")}</span>
                    </div>

                    <div className="career-info-row">
                      <span>Future Scope</span>
                      <span>{scope}</span>
                    </div>

                    <div className="career-info-row">
                      <span>Average Salary</span>
                      <span>{salary}</span>
                    </div>

                    <div className="career-info-row">
                      <span>Day to Day Work</span>
                      <span>{dayToDayWork.join(", ")}</span>
                    </div>

                  </div>
                </>
              )}

              {activeTab === "Education" && (
                <>
                  <h2>Education</h2>

                  <p className="career-template-about-text">
                    {education}
                  </p>
                </>
              )}

              {activeTab === "Skills" && (
                <>
                  <h2>Skills Required</h2>

                  <ul className="career-template-list">
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === "Exams" && (
                <>
                  <h2>Entrance Exams</h2>

                  <ul className="career-template-list">
                    {exams.map((exam, index) => (
                      <li key={index}>{exam}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === "Scope" && (
                <>
                  <h2>Future Scope</h2>

                  <p className="career-template-about-text">
                    {scope}
                  </p>
                </>
              )}

              {activeTab === "Salary" && (
                <>
                  <h2>Salary</h2>

                  <p className="career-template-about-text">
                    {salary}
                  </p>
                </>
              )}

              {activeTab === "Day to Day Work" && (
                <>
                  <h2>Day to Day Work</h2>

                  <ul className="career-template-list">
                    {dayToDayWork.map((work, index) => (
                      <li key={index}>{work}</li>
                    ))}
                  </ul>
                </>
              )}
                          </div>

          </>
        
                )}

        


{/* ================= Career Test ================= */}

{activePage === "Career Test" && (

<div className="career-test-page">

<h2>Career Suitability Test</h2>

<p className="career-test-subtitle">
Answer these questions honestly.
</p>

{careerTest.map((question,index)=>(

<div className="career-question-card" key={index}>

<h3>{index+1}. {question}</h3>

<div className="career-answer-buttons">

<button
className={
answers[index]==="Yes"
?
"answer-btn active-answer"
:
"answer-btn"
}
onClick={()=>handleAnswer(index,"Yes")}
>
Yes
</button>

<button
className={
answers[index]==="No"
?
"answer-btn active-answer"
:
"answer-btn"
}
onClick={()=>handleAnswer(index,"No")}
>
No
</button>

</div>

</div>

))}

<button
className="submit-test-btn"
onClick={handleSubmitTest}
>
Submit Test
</button>
{score !== null && (

<div className="career-result-card">

<h2>Your Career Match</h2>

<div className="career-progress">

<div
className="career-progress-fill"
style={{width:`${score}%`}}
></div>

</div>

<h1>{score}%</h1>

<p>

{score>=80
?"🎉 Excellent Match! You are highly suitable for this career."

:score>=60
?"😊 Good Match! You have many qualities needed."

:score>=40
?"🙂 Average Match. You can improve your skills."

:"⚡ This career may not match your interests yet."
}

</p>

</div>

)}

</div>

)}

        {/* ================= Roadmap ================= */}

{/* ================= Roadmap ================= */}

{activePage === "Roadmap" && (

<div className="career-roadmap-page">

<div className="roadmap-heading">

<h2>Career Roadmap</h2>

<p>
Your journey to become a <strong>{title}</strong>
</p>

</div>

<div className="roadmap-timeline">

{roadmap.map((step,index)=>(

<div className="roadmap-item" key={index}>

<div className="roadmap-left">

<div className="roadmap-icon">

{roadmapIcons[index] || <FaRocket />}

</div>

{index !== roadmap.length-1 && (
<div className="roadmap-line"></div>
)}

</div>

<div className="roadmap-card">

<h3>Stage {index+1}</h3>

<p>{step}</p>

</div>

</div>

))}

</div>

</div>

)}

        {/* ================= Reality Check ================= */}

{activePage === "Reality Check" && (

<div className="career-template-tab-content">

<h2>Reality Check</h2>

<div className="career-info-table">

{Object.entries(realityCheck).map(([key, value]) => (

<div key={key} className="career-info-row">

<span>{key}</span>

<span>{value}</span>

</div>

))}

</div>

</div>

)}

        {/* ================= Saved Careers ================= */}

        {activePage === "Saved Careers" && (

          <div className="career-template-tab-content">

            <h2>Saved Careers</h2>

            {(JSON.parse(localStorage.getItem("savedCareers")) || []).length === 0 ? (
  <p>No saved careers yet.</p>
) : (
  <ul className="career-template-list">
    {(JSON.parse(localStorage.getItem("savedCareers")) || []).map(
      (career, index) => (
        <li key={index}>{career}</li>
      )
    )}
  </ul>
)}

          </div>

        )}

        {/* ================= Profile ================= */}

        {activePage === "Profile" && (

          <div className="career-template-tab-content">

            <h2>Profile</h2>

            <p>Profile page coming soon.</p>

          </div>

        )}

        {/* ================= Settings ================= */}

        {activePage === "Settings" && (

          <div className="career-template-tab-content">

            <h2>Settings</h2>

            <p>Settings page coming soon.</p>

          </div>

        )}

        {/* ================= Logout ================= */}

        {activePage === "Logout" && (

          <div className="career-template-tab-content">

            <h2>Logout</h2>

            <p>Logout functionality will be added later.</p>

          </div>

        )}

      </div>

    </div>

  );

};

export default CareerTemplate;