import React, { useEffect, useState } from "react";

import {
  FaBrain,
  FaChartLine,
  FaBookOpen,
  FaMapSigns,
  FaBalanceScale,
  FaUniversity,
  FaSearch,
  FaBell,
  FaCogs,
} from "react-icons/fa";

import { GiArtificialIntelligence } from "react-icons/gi";

import "../style/Home.css";

import axios from "axios";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import defaultProfile from "../assets/defaultProfile.png";

import {
  FaUserDoctor,
  FaScaleBalanced,
  FaHotel,
  FaBuildingColumns,
  FaPlane,
  FaShip,
  FaLaptopCode,
} from "react-icons/fa6";

import ProfileSidebar from "../component/ProfileSidebar";

import AIJobRecommendationSection from "../component/AIJobRecommendationSection";

import logo from "../assets/logo.png";
import hero from "../assets/home-hero.jpg";
import about from "../assets/about.png";

import engineering from "../assets/engineering.jpg";
import medical from "../assets/medical.jpg";
import it from "../assets/IT.png";
import government from "../assets/government.png";
import banking from "../assets/banking-and-finance.png";
import law from "../assets/law.png";
import aviation from "../assets/Aviation.png";
import science from "../assets/science-and-research.png";
import design from "../assets/Design.png";
import media from "../assets/Journalism.png";
import hotel from "../assets/HotelManager.png";
import space from "../assets/Space-astronomy.png";
import environment from "../assets/Environmental.png";
import navy from "../assets/Merchant-navy.png";

import ChatBot from "../component/ChatBot/ChatBot";
import Notification from "../component/Notification/Notification";


function Home() {

  const location = useLocation();
  const navigate = useNavigate();


  /* =====================================================
     PROFILE
     ===================================================== */

  const [open, setOpen] = useState(false);

  const [profileImage, setProfileImage] =
    useState(defaultProfile);

  const [username, setUsername] =
    useState("");


  /* =====================================================
     CAREER SECTION
     ===================================================== */

  const [showMore, setShowMore] =
    useState(false);


  /* =====================================================
     NOTIFICATION
     ===================================================== */

  const [showNotification, setShowNotification] =
    useState(false);

  const [unreadCount, setUnreadCount] =
    useState(1);


  /* =====================================================
     USER ID
     ===================================================== */

  const userId =
    localStorage.getItem("userId");


  /* =====================================================
     GET USER PROFILE
     ===================================================== */

  useEffect(() => {

    const user =
      localStorage.getItem("loggedInUser");

    if (user) {
      setUsername(user);
    }

    getProfile();

    // Prevent unnecessary dependency warning
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [location.state]);


  /* =====================================================
     GET PROFILE IMAGE
     ===================================================== */

  const getProfile = async () => {

    try {

      await axios.get(
        `http://localhost:5000/api/profile/${userId}`
      );

      setProfileImage(
        `http://localhost:5000/api/profile/image/${userId}?t=${Date.now()}`
      );

    } catch (error) {

      console.log(error);

      setProfileImage(defaultProfile);

    }

  };


  /* =====================================================
     PROFILE IMAGE UPLOAD
     ===================================================== */

  const handleImageUpload = async (e) => {

    const file =
      e.target.files[0];

    if (!file) return;


    const formData =
      new FormData();

    formData.append(
      "image",
      file
    );

    formData.append(
      "userId",
      userId
    );


    try {

      await axios.post(
        "http://localhost:5000/api/profile/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );


      setProfileImage(
        `http://localhost:5000/api/profile/image/${userId}?t=${Date.now()}`
      );


      alert(
        "Profile image uploaded successfully!"
      );


    } catch (err) {

      console.log(err);

      alert(
        "Image upload failed"
      );

    }

  };


  /* =====================================================
     CAREER DATA
     ===================================================== */

  const careers = [

    {
      name: "Engineering",
      image: engineering,
      path: "/engineering",
    },

    {
      name: "Medical",
      image: medical,
      path: "/doctor",
    },

    {
      name: "Information Technology",
      image: it,
      path: "/it",
    },

    {
      name: "Government Jobs",
      image: government,
      path: "/government",
    },

    {
      name: "Banking & Finance",
      image: banking,
      path: "/banking-and-finance",
    },

    {
      name: "Law",
      image: law,
      path: "/law",
    },

    {
      name: "Aviation",
      image: aviation,
      path: "/aviation",
    },

    {
      name: "Science & Research",
      image: science,
      path: "/science-research",
    },

    {
      name: "Design",
      image: design,
      path: "/design",
    },

    {
      name: "Media & Journalism",
      image: media,
      path: "/media-and-journalism",
    },

    {
      name: "Hotel Management",
      image: hotel,
      path: "/hotel-management",
    },

    {
      name: "Space & Astronomy",
      image: space,
      path: "/space-astronomy",
    },

    {
      name: "Environmental",
      image: environment,
      path: "/environmental",
    },

    {
      name: "Merchant Navy",
      image: navy,
      path: "/merchant-navy",
    },

  ];


  const visibleCareers =
    showMore
      ? careers
      : careers.slice(0, 9);


  /* =====================================================
     RETURN
     ===================================================== */

  return (

    <div className="home">


      {/* =================================================
          NAVBAR
          ================================================= */}

      <header className="navbar">

        <div className="logo">

          <img
            src={logo}
            alt="logo"
          />

        </div>


        <div className="list">

          <nav className="navbar">

            <div className="nav-icons">


              {/* NAVIGATION LINKS */}

              <div className="nav-links">

                <a
                  href="#home"
                  className="list"
                >
                  Home
                </a>


                <a
                  href="#career"
                  className="list"
                >
                  Career
                </a>


                <a
                  href="#about"
                  className="list"
                >
                  About
                </a>

              </div>


              {/* SEARCH */}

              <div className="nav-search">

                <FaSearch
                  className="search-icon"
                />

                <input
                  type="text"
                  placeholder="Search..."
                />

              </div>


              {/* NOTIFICATION */}

              <div className="notification-wrapper">

                <FaBell
                  className="nav-icon"

                  onClick={() => {

                    setShowNotification(
                      !showNotification
                    );

                    setUnreadCount(0);

                  }}

                />


                {unreadCount > 0 && (

                  <span className="notification-badge">

                    {unreadCount}

                  </span>

                )}

              </div>


              {showNotification && (

                <Notification
                  setUnreadCount={
                    setUnreadCount
                  }
                />

              )}


              {/* PROFILE */}

              <div
                className="profile-icon"
                onClick={() => setOpen(true)}
              >

                <img
                  src={
                    profileImage ||
                    defaultProfile
                  }

                  alt="Profile"

                  className="navbar-profile-image"

                  onError={(e) => {

                    e.target.onerror =
                      null;

                    e.target.src =
                      defaultProfile;

                  }}

                />

              </div>


            </div>

          </nav>

        </div>

      </header>


      {/* =================================================
          HERO
          ================================================= */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-left">

          <br />
          <br />

          <h1>

            Explore Today,
            <br />

            <span>
              Succeed Tommorow.
            </span>

          </h1>


          <p>

            Explore careers, compare
            professions and make better
            career decisions with AI
            guidance.

          </p>


          <div className="features">

            <p>
              ✔ 250+ Career Options
            </p>

            <p>
              ✔ AI Career Guidance
            </p>

            <p>
              ✔ Career Simulation
            </p>

            <p>
              ✔ Roadmaps
            </p>

          </div>

        </div>


        <div className="home-hero">

          <img
            src={hero}
            alt="hero"
          />

        </div>

      </section>


      {/* =================================================
          CAREER SECTION
          ================================================= */}

      <section
        className="career-section"
        id="career"
      >

        <div className="career-heading">

          <h2>
            Explore Top Career Categories
          </h2>


          {showMore && (

            <button
              className="view-btn"
              onClick={() =>
                setShowMore(false)
              }
            >
              Show Less
            </button>

          )}

        </div>


        <div className="career-grid">


          {visibleCareers.map(
            (career, index) => (

              <div

                className="career-card"

                key={index}

                onClick={() =>
                  navigate(
                    career.path
                  )
                }

              >

                <div className="career-image">

                  <img
                    src={career.image}
                    alt={career.name}
                  />

                </div>


                <p>
                  {career.name}
                </p>

              </div>

            )
          )}


          {/* MORE */}

          {!showMore && (

            <div

              className="career-card more-card"

              onClick={() =>
                setShowMore(true)
              }

            >

              <div
                className="career-image more-circle"
              >

                <span>
                  •••
                </span>

              </div>


              <p>
                More
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =================================================
          ABOUT
          ================================================= */}

      <section
        className="about"
        id="about"
      >

        <div className="about-left">

          <h2>
            <b>
              About Us
            </b>
          </h2>


          <p>

            Career Expert helps students
            discover the perfect career path
            based on their interests, skills
            and goals. Our platform provides
            AI guidance, career simulations,
            learning roadmaps and complete
            information about <br />
            every career. Choose your future
            with confidence.

          </p>

        </div>


        <div className="about-right">

          <img
            src={about}
            alt="about"
          />

        </div>

      </section>


      {/* =================================================
          FOOTER
          ================================================= */}

      <footer className="footer">

        <div className="footer-content">

          <h3>
            Career Expert
          </h3>


          <p>

            Empowering students to
            choose the right career with
            AI-powered guidance, career
            roadmaps, simulations, and
            expert insights.

          </p>


          <hr />


          <p className="copyright">

            © 2026 Career Xpert.
            All Rights Reserved.

          </p>

        </div>

      </footer>


      {/* =================================================
          FLOATING AI BUTTONS
          ================================================= */}


      {/* JOB RECOMMENDATION */}

      <div

        className="job-ai-btn"

        onClick={() =>
          navigate(
            "/job-recommendation"
          )
        }

      >

        <GiArtificialIntelligence
          className="job-ai-icon"
        />

        <span className="job-tooltip">

          Job Recommendation

        </span>

      </div>


      {/* COLLEGE RECOMMENDATION */}

      <div

        className="college-floating-btn"

        onClick={() =>
          navigate(
            "/college-recommendation"
          )
        }

      >

        <FaUniversity
          className="college-floating-icon"
        />

        <span className="college-tooltip">

          College Recommendation

        </span>

      </div>


      {/* CAREER COMPARISON */}

      <div

        className="comparison-ai-btn"

        onClick={() =>
          navigate(
            "/career-comparison"
          )
        }

      >

        <FaBalanceScale
          className="comparison-ai-icon"
        />

        <span className="comparison-tooltip">

          Career Comparison

        </span>

      </div>


      {/* CAREER RECOMMENDATION */}

      <div

        className="career-ai-btn"

        onClick={() =>
          navigate(
            "/career-recommendation"
          )
        }

      >

        <FaBrain
          className="career-ai-icon"
        />

        <span className="career-tooltip">

          Career Recommendation

        </span>

      </div>


      {/* =================================================
          FRIEND'S FEATURES
          ================================================= */}


      {/* SKILL GAP ANALYSIS */}

      <div

        className="skill-gap-btn"

        onClick={() =>
          navigate(
            "/skill-gap"
          )
        }

      >

        <FaChartLine
          className="skill-gap-icon"
        />

        <span className="skill-gap-tooltip">

          Skill Gap Analysis

        </span>

      </div>


      {/* STUDY PLANNER */}

      <div

        className="study-planner-btn"

        onClick={() =>
          navigate(
            "/study-planner"
          )
        }

      >

        <FaBookOpen
          className="study-planner-icon"
        />

        <span className="study-planner-tooltip">

          Study Planner

        </span>

      </div>


      {/* CAREER ROADMAP */}

      <div

        className="roadmap-btn"

        onClick={() =>
          navigate(
            "/career-roadmap"
          )
        }

      >

        <FaMapSigns
          className="roadmap-icon"
        />

        <span className="roadmap-tooltip">

          Career Roadmap

        </span>

      </div>


      {/* =================================================
          CHATBOT
          ================================================= */}

      <ChatBot />


      {/* =================================================
          PROFILE SIDEBAR
          ================================================= */}

      <ProfileSidebar

        open={open}

        setOpen={setOpen}

        profileImage={profileImage}

        handleImageUpload={
          handleImageUpload
        }

        username={username}

        email={
          localStorage.getItem(
            "userEmail"
          )
        }

      />

    </div>

  );

}


export default Home;