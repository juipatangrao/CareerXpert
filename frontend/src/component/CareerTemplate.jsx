import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
  skills = [],
  exams = [],
  scope,
  salary,
  dayToDayWork = [],
  careerTest = [],
  roadmap = [],
  realityCheck = {},
  parentCareerPath,
}) => {

  /* =====================================================
     SIDEBAR
  ===================================================== */

  const [activePage, setActivePage] =
    useState("Overview");

  /* =====================================================
     OVERVIEW TABS
  ===================================================== */

  const [activeTab, setActiveTab] =
    useState("Overview");

  const [showOverviewMenu, setShowOverviewMenu] =
    useState(true);

  /* =====================================================
     SAVE CAREER
  ===================================================== */

  const [isSaved, setIsSaved] =
    useState(() => {

      const saved =
        JSON.parse(
          localStorage.getItem("savedCareers")
        ) || [];

      return saved.includes(title);
    });

  /* =====================================================
     CAREER TEST
  ===================================================== */

  const [answers, setAnswers] =
    useState({});

  const [score, setScore] =
    useState(null);

  /* =====================================================
     AI COURSES
  ===================================================== */

  const [loading, setLoading] =
    useState(false);

  const [courses, setCourses] =
    useState([]);


  /* =====================================================
     OVERVIEW TABS
  ===================================================== */

  const tabs = [
    "Overview",
    "Education",
    "Skills",
    "Exams",
    "Scope",
    "Salary",
    "Day to Day Work",
    "Courses",
  ];


  /* =====================================================
     SIDEBAR PAGES
  ===================================================== */

  const sidebarPages = [
    "Career Test",
    "Roadmap",
    "Reality Check",
    "Saved Careers",
    "Profile",
    "Settings",
    "Logout",
  ];


  /* =====================================================
     SAVE / UNSAVE CAREER
  ===================================================== */

  const handleSaveCareer = () => {

    let savedCareers =
      JSON.parse(
        localStorage.getItem("savedCareers")
      ) || [];


    if (isSaved) {

      savedCareers =
        savedCareers.filter(
          (career) =>
            career !== title
        );

    } else {

      if (
        !savedCareers.includes(title)
      ) {

        savedCareers.push(title);

      }

    }


    localStorage.setItem(
      "savedCareers",
      JSON.stringify(savedCareers)
    );


    setIsSaved(!isSaved);
  };


  /* =====================================================
     CAREER TEST ANSWER
  ===================================================== */

  const handleAnswer = (
    questionIndex,
    answer
  ) => {

    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));

  };


  /* =====================================================
     SUBMIT CAREER TEST
  ===================================================== */

  const handleSubmitTest = () => {

    if (
      !careerTest ||
      careerTest.length === 0
    ) {

      setScore(0);
      return;

    }


    let yesCount = 0;


    Object.values(answers).forEach(
      (answer) => {

        if (answer === "Yes") {
          yesCount++;
        }

      }
    );


    const percentage =
      Math.round(
        (yesCount /
          careerTest.length) *
          100
      );


    setScore(percentage);

  };


  /* =====================================================
     AI COURSE RECOMMENDATION
  ===================================================== */

  const handleGenerateCourses =
    async () => {

      try {

        setLoading(true);

        setCourses([]);


        const response =
          await axios.post(
            "http://localhost:5000/api/ai/recommend-courses",
            {
              career: title,
            }
          );


        /*
          Supports both:

          response.data = [...]

          OR

          response.data = {
            courses: [...]
          }
        */

        const generatedCourses =
          Array.isArray(response.data)
            ? response.data
            : response.data?.courses ||
              [];


        setCourses(
          generatedCourses
        );


      } catch (error) {

        console.error(
          "Course Recommendation Error:",
          error
        );

        alert(
          "Unable to generate course recommendations."
        );


      } finally {

        setLoading(false);

      }

    };


  /* =====================================================
     ROADMAP ICONS
  ===================================================== */

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


  /* =====================================================
     RENDER
  ===================================================== */

  return (

    <div className="career-template-page">


      {/* =================================================
          SIDEBAR
      ================================================= */}

      <div className="career-template-sidebar">

        <div className="career-template-sidebar-top">


          {/* =================================================
              LOGO + TITLE
          ================================================= */}

          <div className="career-template-card">

            <img
              src={logo}
              alt={title}
            />

            <div>

              <h3>
                {title}
              </h3>

              <p>
                {subtitle}
              </p>

            </div>

          </div>


          {/* =================================================
              SIDEBAR MENU
          ================================================= */}

          <ul className="career-sidebar-menu">


            {/* HOME */}

            <li>

              <Link
                to={
                  parentCareerPath ||
                  "/home"
                }

                className="career-sidebar-link"
              >

                🏠 Home

              </Link>

            </li>


            {/* =================================================
                OVERVIEW
            ================================================= */}

            <li

              className={
                activePage === "Overview"
                  ? "career-active"
                  : ""
              }

              onClick={() => {

                setActivePage(
                  "Overview"
                );

                setShowOverviewMenu(
                  !showOverviewMenu
                );

              }}

            >

              📖 Overview

            </li>


            {/* =================================================
                OVERVIEW DROPDOWN
            ================================================= */}

            {showOverviewMenu && (

              <ul className="career-overview-dropdown">

                {tabs.map(
                  (tab) => (

                    <li

                      key={tab}

                      className={
                        activeTab === tab
                          ? "career-active"
                          : ""
                      }

                      onClick={() => {

                        setActivePage(
                          "Overview"
                        );

                        setActiveTab(
                          tab
                        );

                      }}

                    >

                      {tab}

                    </li>

                  )
                )}

              </ul>

            )}


            {/* =================================================
                OTHER SIDEBAR PAGES
            ================================================= */}

            {sidebarPages.map(
              (page) => (

                <li

                  key={page}

                  className={
                    activePage === page
                      ? "career-active"
                      : ""
                  }

                  onClick={() =>
                    setActivePage(page)
                  }

                >

                  {page}

                </li>

              )
            )}

          </ul>

        </div>

      </div>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="career-template-content">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="career-template-header">

          <div className="career-template-header-left">

            <img
              src={logo}
              alt={title}
            />

            <div>

              <h1>
                {title}
              </h1>

              <p>
                {subtitle}
              </p>

            </div>

          </div>


          <img
            src={banner}
            alt={title}
            className="career-template-banner"
          />

        </div>


        {/* =================================================
            OVERVIEW
        ================================================= */}

        {activePage === "Overview" && (

          <>

            {/* TOP TABS */}

            <div className="career-template-top-tabs">

              {tabs.map(
                (tab) => (

                  <button

                    key={tab}

                    className={
                      activeTab === tab
                        ? "career-template-tab career-template-active-tab"
                        : "career-template-tab"
                    }

                    onClick={() =>
                      setActiveTab(tab)
                    }

                  >

                    {tab}

                  </button>

                )
              )}

            </div>


            {/* TAB CONTENT */}

            <div className="career-template-tab-content">


              {/* =================================================
                  OVERVIEW
              ================================================= */}

              {activeTab === "Overview" && (

                <>

                  <div className="career-template-about-header">

                    <h2>
                      About {title}
                    </h2>


                    <button

                      className="career-heart-btn"

                      onClick={
                        handleSaveCareer
                      }

                    >

                      {isSaved
                        ? "❤️"
                        : "🤍"}

                    </button>

                  </div>


                  <p className="career-template-about-text">

                    {overview}

                  </p>


                  <div className="career-info-table">


                    <div className="career-info-row">

                      <span>
                        Educational Path
                      </span>

                      <span>
                        {education}
                      </span>

                    </div>


                    <div className="career-info-row">

                      <span>
                        Required Skills
                      </span>

                      <span>
                        {skills.join(
                          ", "
                        )}
                      </span>

                    </div>


                    <div className="career-info-row">

                      <span>
                        Top Exams
                      </span>

                      <span>
                        {exams.join(
                          ", "
                        )}
                      </span>

                    </div>


                    <div className="career-info-row">

                      <span>
                        Future Scope
                      </span>

                      <span>
                        {scope}
                      </span>

                    </div>


                    <div className="career-info-row">

                      <span>
                        Average Salary
                      </span>

                      <span>
                        {salary}
                      </span>

                    </div>


                    <div className="career-info-row">

                      <span>
                        Day to Day Work
                      </span>

                      <span>
                        {dayToDayWork.join(
                          ", "
                        )}
                      </span>

                    </div>


                  </div>

                </>

              )}


              {/* =================================================
                  EDUCATION
              ================================================= */}

              {activeTab === "Education" && (

                <>

                  <h2>
                    Education
                  </h2>

                  <p className="career-template-about-text">

                    {education}

                  </p>

                </>

              )}


              {/* =================================================
                  SKILLS
              ================================================= */}

              {activeTab === "Skills" && (

                <>

                  <h2>
                    Skills Required
                  </h2>

                  <ul className="career-template-list">

                    {skills.map(
                      (skill, index) => (

                        <li key={index}>
                          {skill}
                        </li>

                      )
                    )}

                  </ul>

                </>

              )}


              {/* =================================================
                  EXAMS
              ================================================= */}

              {activeTab === "Exams" && (

                <>

                  <h2>
                    Entrance Exams
                  </h2>

                  <ul className="career-template-list">

                    {exams.map(
                      (exam, index) => (

                        <li key={index}>
                          {exam}
                        </li>

                      )
                    )}

                  </ul>

                </>

              )}


              {/* =================================================
                  SCOPE
              ================================================= */}

              {activeTab === "Scope" && (

                <>

                  <h2>
                    Future Scope
                  </h2>

                  <p className="career-template-about-text">

                    {scope}

                  </p>

                </>

              )}


              {/* =================================================
                  SALARY
              ================================================= */}

              {activeTab === "Salary" && (

                <>

                  <h2>
                    Salary
                  </h2>

                  <p className="career-template-about-text">

                    {salary}

                  </p>

                </>

              )}


              {/* =================================================
                  DAY TO DAY WORK
              ================================================= */}

              {activeTab ===
                "Day to Day Work" && (

                <>

                  <h2>
                    Day to Day Work
                  </h2>

                  <ul className="career-template-list">

                    {dayToDayWork.map(
                      (work, index) => (

                        <li key={index}>
                          {work}
                        </li>

                      )
                    )}

                  </ul>

                </>

              )}


              {/* =================================================
                  AI COURSES
              ================================================= */}

              {activeTab ===
                "AI Courses" && (

                <>

                  <h2>
                    Course Recommendations
                  </h2>


                  <p className="career-template-about-text">

                    Discover the best
                    course recommendations
                    to become a{" "}

                    <strong>
                      {title}
                    </strong>.

                  </p>


                  <div className="ai-course-box">


                    {/* GENERATE BUTTON */}

                    <button

                      className="generate-ai-btn"

                      onClick={
                        handleGenerateCourses
                      }

                      disabled={loading}

                    >

                      {loading
                        ? "🤖 Generating..."
                        : "✨ Get Course Recommendations"}

                    </button>


                    {/* LOADING */}

                    {loading && (

                      <p
                        style={{
                          marginTop:
                            "20px",
                        }}
                      >

                        🤖 Generating Course
                        Recommendations...

                      </p>

                    )}


                    {/* COURSE RESULTS */}

                    {courses.length > 0 && (

                      <>

                        <h2 className="recommended-title">

                          📚 Recommended Courses

                        </h2>


                        <div className="courses-grid">

                          {courses.map(
                            (
                              course,
                              index
                            ) => (

                              <div

                                key={index}

                                className="ai-course-card"
                              >


                                <div className="course-header">

                                  <h3>
                                    {
                                      course.name
                                    }
                                  </h3>

                                </div>


                                <p className="course-description">

                                  {
                                    course.description
                                  }

                                </p>


                                <div className="course-footer">

                                  <span className="course-duration">

                                    ⏳{" "}

                                    {
                                      course.duration ||
                                      "Flexible"
                                    }

                                  </span>


                                  <button

                                    className={`level-btn ${
                                      (
                                        course.level ||
                                        "Beginner"
                                      )
                                        .toLowerCase()
                                        .replace(
                                          /\s+/g,
                                          "-"
                                        )
                                    }`}

                                  >

                                    {
                                      course.level ||
                                      "Beginner"
                                    }

                                  </button>

                                </div>

                              </div>

                            )
                          )}

                        </div>

                      </>

                    )}


                    {/* NO RESULTS */}

                    {!loading &&
                      courses.length === 0 && (

                        <p
                          style={{
                            marginTop:
                              "20px",
                          }}
                        >

                          Click the button above
                          to get course
                          recommendations.

                        </p>

                      )}

                  </div>

                </>

              )}

            </div>

          </>

        )}


        {/* =================================================
            CAREER TEST
        ================================================= */}

        {activePage ===
          "Career Test" && (

          <div className="career-test-page">

            <h2>
              Career Suitability Test
            </h2>

            <p className="career-test-subtitle">

              Answer these questions honestly.

            </p>


            {careerTest.length === 0 ? (

              <p>
                No career test questions
                available.
              </p>

            ) : (

              careerTest.map(
                (
                  question,
                  index
                ) => (

                  <div
                    className="career-question-card"
                    key={index}
                  >

                    <h3>
                      {index + 1}.{" "}
                      {question}
                    </h3>


                    <div className="career-answer-buttons">


                      <button

                        className={
                          answers[index] ===
                          "Yes"
                            ? "answer-btn active-answer"
                            : "answer-btn"
                        }

                        onClick={() =>
                          handleAnswer(
                            index,
                            "Yes"
                          )
                        }

                      >

                        Yes

                      </button>


                      <button

                        className={
                          answers[index] ===
                          "No"
                            ? "answer-btn active-answer"
                            : "answer-btn"
                        }

                        onClick={() =>
                          handleAnswer(
                            index,
                            "No"
                          )
                        }

                      >

                        No

                      </button>


                    </div>

                  </div>

                )
              )

            )}


            {careerTest.length > 0 && (

              <button

                className="submit-test-btn"

                onClick={
                  handleSubmitTest
                }

              >

                Submit Test

              </button>

            )}


            {score !== null && (

              <div className="career-result-card">

                <h2>
                  Your Career Match
                </h2>


                <div className="career-progress">

                  <div

                    className="career-progress-fill"

                    style={{
                      width:
                        `${score}%`,
                    }}

                  />

                </div>


                <h1>
                  {score}%
                </h1>


                <p>

                  {score >= 80

                    ? "🎉 Excellent Match! You are highly suitable for this career."

                    : score >= 60

                    ? "😊 Good Match! You have many qualities needed."

                    : score >= 40

                    ? "🙂 Average Match. You can improve your skills."

                    : "⚡ This career may not match your interests yet."

                  }

                </p>

              </div>

            )}

          </div>

        )}


        {/* =================================================
            ROADMAP
        ================================================= */}

        {activePage ===
          "Roadmap" && (

          <div className="career-roadmap-page">

            <div className="roadmap-heading">

              <h2>
                Career Roadmap
              </h2>

              <p>

                Your journey to become a{" "}

                <strong>
                  {title}
                </strong>

              </p>

            </div>


            {roadmap.length === 0 ? (

              <p>
                No roadmap available.
              </p>

            ) : (

              <div className="roadmap-timeline">

                {roadmap.map(
                  (
                    step,
                    index
                  ) => (

                    <div
                      className="roadmap-item"
                      key={index}
                    >

                      <div className="roadmap-left">

                        <div className="roadmap-icon">

                          {
                            roadmapIcons[
                              index
                            ] || (
                              <FaRocket />
                            )
                          }

                        </div>


                        {index !==
                          roadmap.length -
                            1 && (

                          <div className="roadmap-line" />

                        )}

                      </div>


                      <div className="roadmap-card">

                        <h3>
                          Stage{" "}
                          {index + 1}
                        </h3>

                        <p>
                          {step}
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            )}

          </div>

        )}


        {/* =================================================
            REALITY CHECK
        ================================================= */}

        {activePage ===
          "Reality Check" && (

          <div className="career-template-tab-content">

            <h2>
              Reality Check
            </h2>


            {Object.keys(
              realityCheck
            ).length === 0 ? (

              <p>
                No reality check data
                available.
              </p>

            ) : (

              <div className="career-info-table">

                {Object.entries(
                  realityCheck
                ).map(
                  (
                    [key, value]
                  ) => (

                    <div
                      key={key}
                      className="career-info-row"
                    >

                      <span>
                        {key}
                      </span>

                      <span>
                        {value}
                      </span>

                    </div>

                  )
                )}

              </div>

            )}

          </div>

        )}


        {/* =================================================
            SAVED CAREERS
        ================================================= */}

        {activePage ===
          "Saved Careers" && (

          <div className="career-template-tab-content">

            <h2>
              Saved Careers
            </h2>


            {(() => {

              const savedCareers =
                JSON.parse(
                  localStorage.getItem(
                    "savedCareers"
                  )
                ) || [];


              if (
                savedCareers.length === 0
              ) {

                return (
                  <p>
                    No saved careers yet.
                  </p>
                );

              }


              return (

                <ul className="career-template-list">

                  {savedCareers.map(
                    (
                      career,
                      index
                    ) => (

                      <li key={index}>
                        {career}
                      </li>

                    )
                  )}

                </ul>

              );

            })()}

          </div>

        )}


        {/* =================================================
            PROFILE
        ================================================= */}

        {activePage ===
          "Profile" && (

          <div className="career-template-tab-content">

            <h2>
              Profile
            </h2>

            <p>
              Profile page coming soon.
            </p>

          </div>

        )}


        {/* =================================================
            SETTINGS
        ================================================= */}

        {activePage ===
          "Settings" && (

          <div className="career-template-tab-content">

            <h2>
              Settings
            </h2>

            <p>
              Settings page coming soon.
            </p>

          </div>

        )}


        {/* =================================================
            LOGOUT
        ================================================= */}

        {activePage ===
          "Logout" && (

          <div className="career-template-tab-content">

            <h2>
              Logout
            </h2>

            <p>
              Logout functionality will be
              added later.
            </p>

          </div>

        )}

      </div>

    </div>

  );
};


export default CareerTemplate;