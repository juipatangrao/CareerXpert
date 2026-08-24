import React, { useEffect, useState } from "react";

import {
  FaSearch,
  FaBell,
  FaBrain,
  FaBalanceScale,
  FaUniversity,
  FaFileAlt,
  FaMicrophone,
  FaTrophy,
  FaImages,
  FaNewspaper,
  FaRoute,
  FaBookOpen,
  FaCalendarCheck,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";

import { FaScaleBalanced } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";

import { GiArtificialIntelligence } from "react-icons/gi";

import "../style/Home.css";

import axios from "axios";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import defaultProfile from "../assets/defaultProfile.png";

import ProfileSidebar from "../component/ProfileSidebar";
import ChatBot from "../component/ChatBot/ChatBot";
import Notification from "../component/Notification/Notification";
import PortfolioGenerator from "../pages/PortfolioGenerator";
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

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // PROFILE
  // =====================================================

  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] =
    useState(defaultProfile);
  const [username, setUsername] = useState("");

  // =====================================================
  // CAREER SECTION
  // =====================================================

  const [showMore, setShowMore] = useState(false);

  // =====================================================
  // NOTIFICATION
  // =====================================================

  const [showNotification, setShowNotification] =
    useState(false);

  const [unreadCount, setUnreadCount] = useState(1);

  // =====================================================
  // USER ID
  // =====================================================

  const userId = localStorage.getItem("userId");

  // =====================================================
  // GET USER PROFILE
  // =====================================================

  useEffect(() => {
    const storedUser =
      localStorage.getItem("loggedInUser");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);

        setUsername(
          parsedUser?.name ||
            parsedUser?.username ||
            storedUser
        );
      } catch (error) {
        setUsername(storedUser);
      }
    }

    if (userId) {
      getProfile();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  // =====================================================
  // GET PROFILE IMAGE
  // =====================================================

  const getProfile = async () => {
    try {
      if (!userId) {
        setProfileImage(defaultProfile);
        return;
      }

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

  // =====================================================
  // PROFILE IMAGE UPLOAD
  // =====================================================

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!userId) {
      alert("User not logged in");
      return;
    }

    const formData = new FormData();

    formData.append("image", file);
    formData.append("userId", userId);

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
    } catch (error) {
      console.log(error);

      alert(
        "Image upload failed"
      );
    }
  };

  // =====================================================
  // CAREER DATA
  // =====================================================

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

  const visibleCareers = showMore
    ? careers
    : careers.slice(0, 9);

  // =====================================================
  // CAREER JOURNEY
  // =====================================================

  const careerJourney = [
    {
      number: "01",
      title: "Discover",
      className: "discover",
      icon: <FaSearch />,

      features: [
        {
          name: "Job Recommendations",
          path: "/job-recommendation",
          icon: <FaUserTie />,
        },
        {
          name: "College Recommendations",
          path: "/college-recommendation",
          icon: <FaUniversity />,
        },
        {
          name: "Career Comparison",
          path: "/career-comparison",
          icon: <FaScaleBalanced />,
        },
      ],
    },

    {
      number: "02",
      title: "Understand",
      className: "understand",
      icon: <FaChartLine />,

      features: [
        {
          name: "Skill Gap Analysis",
          path: "/skill-gap",
          icon: <FaChartLine />,
        },
        {
          name: "Career Roadmap",
          path: "/career-roadmap",
          icon: <FaRoute />,
        },
        {
          name: "Coaching Recommendations",
          path: "/coaching-recommendation",
          icon: <FaBookOpen />,
        },
      ],
    },

    {
      number: "03",
      title: "Prepare",
      className: "prepare",
      icon: <FaBookOpen />,

      features: [
        {
          name: "Study Planner",
          path: "/study-planner",
          icon: <FaCalendarCheck />,
        },
        {
          name: "Resume Tools",
          path: "/resume-tools",
          icon: <FaFileAlt />,
        },
        {
          name: "Interview Practice",
          path: "/interview-practice",
          icon: <FaMicrophone />,
        },
      ],
    },

    {
      number: "04",
      title: "Grow",
      className: "grow",
      icon: <FaTrophy />,

      features: [
        {
          name: "Scholarship Finder",
          path: "/scholarship-finder",
          icon: <FaTrophy />,
        },
        {
          name: "Portfolio Review",
          path: "/PortfolioGenerator",
          icon: <FaImages />,
        },
        {
          name: "Career News",
          path: "/career-news",
          icon: <FaNewspaper />,
        },
      ],
    },
  ];

  // =====================================================
  // NAVIGATION
  // =====================================================

  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <div className="home">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        {/* LOGO */}

        <div className="logo">
          <img
            src={logo}
            alt="CareerXpert Logo"
          />
        </div>

        {/* NAVBAR RIGHT */}

        <div className="navbar-right">

          {/* NAVIGATION */}

          <nav className="nav-links">

            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>

            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
              }}
            >
              Features
            </a>

            <a
              href="#career"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("career");
              }}
            >
              Careers
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About Us
            </a>

          </nav>

          {/* SEARCH */}

          <div className="nav-search">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search..."
            />

          </div>

          {/* NOTIFICATION */}

          <div
            className="notification-wrapper"
            onClick={() => {
              setShowNotification(
                !showNotification
              );

              setUnreadCount(0);
            }}
          >

            <FaBell className="nav-icon" />

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
            onClick={() =>
              setOpen(true)
            }
          >

            <img
              src={
                profileImage ||
                defaultProfile
              }
              alt="Profile"
              className="navbar-profile-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  defaultProfile;
              }}
            />

          </div>

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

          <h1>
            Explore Today,
            <br />

            <span>
              Succeed Tomorrow.
            </span>
          </h1>

          <p>
            Explore careers, compare
            professions and make better
            career decisions with
            CareerXpert.
          </p>

          <div className="features">

            <p>
              ✓ 250+ Career Options
            </p>

            <p>
              ✓ Personalized Career Guidance
            </p>

            <p>
              ✓ Career Planning Tools
            </p>

            <p>
              ✓ Learning & Career Resources
            </p>

          </div>

        </div>

        <div className="home-hero">

          <img
            src={hero}
            alt="Career exploration"
          />

        </div>

      </section>

      {/* =================================================
          FEATURES / CAREER JOURNEY
      ================================================= */}

      <section
        className="career-journey-section"
        id="features"
      >

        <div className="journey-heading">

          <h2>
            Your Career Journey
            with CareerXpert
          </h2>

          <p>
            A Complete Guide from
            Discovery to Growth
          </p>

        </div>

        <div className="journey-grid">

          {careerJourney.map(
            (journey) => (

              <div
                className={`journey-card ${journey.className}`}
                key={journey.number}
              >

                {/* NUMBER */}

                <div className="journey-number">
                  {journey.number}
                </div>

                {/* ICON */}

                <div className="journey-icon">
                  {journey.icon}
                </div>

                {/* TITLE */}

                <h3>
                  {journey.title}
                </h3>

                {/* FEATURES */}

                <div className="journey-feature-list">

                  {journey.features.map(
                    (feature) => (

                      <button
                        key={feature.name}
                        className="journey-feature"
                        onClick={() =>
                          navigate(
                            feature.path
                          )
                        }
                      >

                        <span className="feature-small-icon">
                          {feature.icon}
                        </span>

                        <span>
                          {feature.name}
                        </span>

                        <span className="feature-arrow">
                          →
                        </span>

                      </button>

                    )
                  )}

                </div>

              </div>

            )
          )}

        </div>

        <div className="journey-bottom-line">

          <span>
            Build Skills
          </span>

          <b>•</b>

          <span>
            Gain Confidence
          </span>

          <b>•</b>

          <span>
            Achieve Your Dreams
          </span>

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

          <div>

            <h2>
              Explore Top Career
              Categories
            </h2>

            <p>
              Discover different career
              paths and opportunities.
            </p>

          </div>

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

              <div className="career-image more-circle">

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
            CareerXpert helps students
            discover the right career path
            based on their interests, skills
            and goals. Our platform provides
            career guidance, career planning
            tools, learning resources and
            complete information about
            different career opportunities.
            Choose your future with confidence.
          </p>

        </div>

        <div className="about-right">

          <img
            src={about}
            alt="About CareerXpert"
          />

        </div>

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">

        <div className="footer-content">

          <h3>
            CareerXpert
          </h3>

          <p>
            Empowering students to explore
            opportunities, plan their careers
            and move towards a successful
            future.
          </p>

          <hr />

          <p className="copyright">
            © 2026 CareerXpert.
            All Rights Reserved.
          </p>

        </div>

      </footer>

      

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