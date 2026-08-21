import React, { useEffect, useState } from "react";
import { FaBrain } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import "../style/Home.css";
import { FaSearch, FaBell, FaUserCircle, FaCogs } from "react-icons/fa";
import axios from "axios";
import { useLocation } from "react-router-dom";

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

import student from "../assets/student.jpeg";
import ProfileSidebar from "../component/ProfileSidebar";
import AIJobRecommendationSection from "../component/AIJobRecommendationSection";
import { useNavigate } from "react-router-dom";
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

  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(defaultProfile);
  const [username, setUsername] = useState("");
  // Temporary User ID
  const userId = localStorage.getItem("userId");
  console.log("User ID:", userId);
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");

    if (user) {
      setUsername(user);
    }

    getProfile();
  }, [location.state]);
  // Get profile image from backend
  const getProfile = async () => {
    try {
      await axios.get(`http://localhost:5000/api/profile/${userId}`);

      setProfileImage(
        `http://localhost:5000/api/profile/image/${userId}?t=${Date.now()}`,
      );
    } catch (error) {
      console.log(error);
      setProfileImage(defaultProfile);
    }
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", userId);

    try {
      await axios.post("http://localhost:5000/api/profile/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setProfileImage(
        `http://localhost:5000/api/profile/image/${userId}?t=${Date.now()}`,
      );

      alert("Profile image uploaded successfully!");
    } catch (err) {
      console.log(err);
      alert("Image upload failed");
    }
  };
  const categories = [
    {
      to: "/engineering",
      label: "Engineering",
      icon: <FaCogs />,
      bg: "#4A90E2",
    },
    { to: "/doctor", label: "Doctor", icon: <FaUserDoctor />, bg: "#F5B301" },
    { to: "/law", label: "Lawyer", icon: <FaScaleBalanced />, bg: "#F5A623" },
    {
      to: "/hotel-management",
      label: "Hotel Mgmt",
      icon: <FaHotel />,
      bg: "#2E7D32",
    },
    {
      to: "/banking-and-finance",
      label: "Banking",
      icon: <FaBuildingColumns />,
      bg: "#7B61FF",
    },
    { to: "/aviation", label: "Aviation", icon: <FaPlane />, bg: "#E94E77" },
    {
      to: "/merchant-navy",
      label: "Merchant Navy",
      icon: <FaShip />,
      bg: "#00ACC1",
    },
    { to: "/IT", label: "IT", icon: <FaLaptopCode />, bg: "#8E24AA" },
    {
      to: "/government",
      label: "Government",
      icon: <FaBuildingColumns />,
      bg: "#7B61FF",
    },
    {
      to: "/science-research",
      label: "Science Research",
      icon: <FaBuildingColumns />,
      bg: "#7B61FF",
    },
    {
      to: "/media-and-journalism",
      label: "Media & Journalism",
      icon: <FaBuildingColumns />,
      bg: "#7B61FF",
    },
    {
      to: "/space-astronomy",
      label: "Space & Astronomy",
      icon: <FaBuildingColumns />,
      bg: "#7B61FF",
    },
    {
      to: "/environmental",
      label: "Environmental",
      icon: <FaBuildingColumns />,
      bg: "#7B61FF",
    },
    {
      to: "/design",
      label: "Design",
      icon: <FaBuildingColumns />,
      bg: "#7B61FF",
    },
  ];

  // return (
  //   <>
  //     <div className="home">
  //       <nav className="navbar">
  //         <div className="logo">
  //           <img src={logo} alt="Logo" />
  //         </div>

  const [showMore, setShowMore] = useState(false);

  const [showNotification, setShowNotification] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);

  const navigate = useNavigate();
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

  const visibleCareers = showMore ? careers : careers.slice(0, 9);

  return (
    <div className="home">
      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="list">
          <nav className="navbar">
            <div className="nav-icons">
            <div className="nav-links">
    <a href="#home" className="list">
        Home
    </a>

    <a href="#career" className="list">
        Career
    </a>

    <a href="#about" className="list">
        About
    </a>
</div>

              <div className="nav-search">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search..." />
              </div>

              <div className="notification-wrapper">
                <FaBell
                  className="nav-icon"
                  onClick={() => {
                    setShowNotification(!showNotification);
                    setUnreadCount(0);
                  }}
                />

                {unreadCount > 0 && (
                  <span className="notification-badge">{unreadCount}</span>
                )}
              </div>
              {showNotification && (
                <Notification setUnreadCount={setUnreadCount} />
              )}
              <div className="profile-icon" onClick={() => setOpen(true)}>
                <img
                  src={profileImage || defaultProfile}
                  alt="Profile"
                  className="navbar-profile-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultProfile;
                  }}
                />
              </div>
            </div>
          </nav>
          {/* <AIJobRecommendation /> */}
        </div>
      </header>

      {/* ================= HERO ================= */}

<section className="hero" id="home">
          <div className="hero-left">
          <br />
          <br />
          <h1>
            Explore Today, <br />
            <span>Succeed Tommorow.</span>
          </h1>

          <p>
            Explore careers, compare professions and make better career
            decisions with AI guidance.
          </p>

          <div className="features">
            <p>✔ 250+ Career Options</p>

            <p>✔ AI Career Guidance</p>

            <p>✔ Career Simulation</p>

            <p>✔ Roadmaps</p>
          </div>
        </div>

        <div className="home-hero">
          <img src={hero} alt="hero" />
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      {/* ================= CAREER SECTION ================= */}

<section className="career-section" id="career">
          <div className="career-heading">
          <h2>Explore Top Career Categories</h2>

          {showMore ? (
            <button className="view-btn" onClick={() => setShowMore(false)}>
              {showMore ? "Show Less" : "Show Less"}
            </button>
          ) : null}
        </div>

        <div className="career-grid">
          {visibleCareers.map((career, index) => (
            <div
              className="career-card"
              key={index}
              onClick={() => navigate(career.path)}
            >
              <div className="career-image">
                <img src={career.image} alt={career.name} />
              </div>
              <p>{career.name}</p>
            </div>
          ))}

          {!showMore && (
            <div
              className="career-card more-card"
              onClick={() => setShowMore(true)}
            >
              <div className="career-image more-circle">
                <span>•••</span>
              </div>
              <p>More</p>
            </div>
          )}
        </div>
      </section>
<section className="about" id="about">
          <div className="about-left">
          <h2>
            <b>About Us</b>
          </h2>

          <p>
            Career Expert helps students discover the perfect career path based
            on their interests, skills and goals. Our platform provides AI
            guidance, career simulations, learning roadmaps and complete
            information about <br></br>every career. Choose your future with
            confidence.
          </p>
        </div>

        <div className="about-right">
          <img src={about} alt="about" />
        </div>
      </section>
      {/* ================= COPYRIGHT ================= */}

      <footer className="footer">
        <div className="footer-content">
          <h3>Career Expert</h3>

          <p>
            Empowering students to choose the right career with AI-powered
            guidance, career roadmaps, simulations, and expert insights.
          </p>

          <hr />

          <p className="copyright">© 2026 Career Xpert. All Rights Reserved.</p>
        </div>
      </footer>
      <div
        className="job-ai-btn"
        onClick={() => navigate("/job-recommendation")}
      >
        <GiArtificialIntelligence className="job-ai-icon" />

        <span className="job-tooltip">Job Recommendation</span>
      </div>
      <div
        className="college-floating-btn"
        onClick={() => navigate("/college-recommendation")}
      >
        <FaUniversity className="college-floating-icon" />

        <span className="college-tooltip">College Recommendation</span>
      </div>
      <div
        className="comparison-ai-btn"
        onClick={() => navigate("/career-comparison")}
      >
        <FaBalanceScale className="comparison-ai-icon" />

        <span className="comparison-tooltip">Career Comparison</span>
      </div>
      <div
        className="career-ai-btn"
        onClick={() => navigate("/career-recommendation")}
      >
        <FaBrain className="career-ai-icon" />

        <span className="career-tooltip">Career Recommendation</span>
      </div>
      <ChatBot />

      <ProfileSidebar
        open={open}
        setOpen={setOpen}
        profileImage={profileImage}
        handleImageUpload={handleImageUpload}
      />
    </div>
  );
}

export default Home;
