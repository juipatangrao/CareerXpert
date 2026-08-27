import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Login.css";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaCompass,
  FaClipboardCheck,
  FaMapMarkedAlt,
  FaTrophy,
  FaBullseye,
  FaArrowUp,
  FaGraduationCap,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("loggedInUser", res.data.user.name);
      localStorage.setItem("userEmail", res.data.user.email);
      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");

      const isNewUser = localStorage.getItem("isNewUser");

      if (isNewUser === "true") {
        navigate("/edit-profile");
      } else {
        navigate("/home");
      }

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="login-page">

      {/* ================= LEFT CAREER PANEL ================= */}

      <section className="login-career-panel">

        {/* Background circles */}
        <div className="login-bg-circle login-circle-one"></div>
        <div className="login-bg-circle login-circle-two"></div>
        <div className="login-bg-circle login-circle-three"></div>

        {/* Brand */}
        <div className="login-brand">

          <div className="login-brand-icon">
            <FaGraduationCap />
          </div>

          <div className="login-brand-name">

            <div>
              <span>Career</span>
              <strong>Xpert</strong>
            </div>

            <small>
              Your Career. Our Guidance.
            </small>

          </div>

        </div>


        {/* Intro */}
        <div className="login-career-intro">

          <div className="login-career-label">
            YOUR FUTURE STARTS HERE
          </div>

          <h1>
            Continue Your
            <br />
            <span>Career Journey</span>
          </h1>

          <div className="login-yellow-line"></div>

          <p>
            Discover your possibilities, understand your strengths
            and move towards the right career.
          </p>

        </div>


        {/* Career Journey */}

        <div className="login-career-journey">

          <div className="login-journey-line"></div>

          <div className="login-journey-item">

            <div className="login-journey-icon">
              <FaCompass />
            </div>

            <div className="login-journey-content">
              <strong>Explore</strong>
              <span>Discover possibilities</span>
            </div>

          </div>


          <div className="login-journey-item">

            <div className="login-journey-icon">
              <FaClipboardCheck />
            </div>

            <div className="login-journey-content">
              <strong>Assess</strong>
              <span>Understand your strengths</span>
            </div>

          </div>


          <div className="login-journey-item">

            <div className="login-journey-icon">
              <FaMapMarkedAlt />
            </div>

            <div className="login-journey-content">
              <strong>Plan</strong>
              <span>Build your career path</span>
            </div>

          </div>


          <div className="login-journey-item">

            <div className="login-journey-icon">
              <FaTrophy />
            </div>

            <div className="login-journey-content">
              <strong>Achieve</strong>
              <span>Reach your goals</span>
            </div>

          </div>

        </div>


        {/* Career Visual */}

        <div className="login-career-visual">

          <div className="login-visual-glow"></div>


          {/* Target */}

          <div className="login-career-target">

            <div className="login-target-ring login-target-ring-outer"></div>

            <div className="login-target-ring login-target-ring-middle"></div>

            <div className="login-target-ring login-target-ring-inner"></div>

            <div className="login-target-center"></div>



          </div>


          {/* Stairs */}

          <div className="login-career-stairs">

            <div className="login-stair login-stair-one"></div>
            <div className="login-stair login-stair-two"></div>
            <div className="login-stair login-stair-three"></div>
            <div className="login-stair login-stair-four"></div>
            <div className="login-stair login-stair-five"></div>

          </div>


          {/* Person */}

          <div className="login-career-person">

            <div className="login-person-head"></div>

            <div className="login-person-body"></div>

            <div className="login-person-backpack"></div>

            <div className="login-person-leg login-leg-left"></div>

            <div className="login-person-leg login-leg-right"></div>

          </div>


          {/* Books */}

          <div className="login-career-books">

            <div></div>
            <div></div>
            <div></div>

          </div>

        </div>


      </section>


      {/* ================= RIGHT LOGIN SIDE ================= */}

      <section className="login-form-side">

        <div className="login-card">


          {/* Icon */}

          <div className="login-form-icon">
            <FaUser />
          </div>


          {/* Heading */}

          <div className="login-heading">

            <h2>
              Welcome <span>Back!</span>
            </h2>

            <p>
              Login to continue your journey
            </p>

            <div className="login-heading-line"></div>

          </div>


          <form onSubmit={handleSubmit}>


            {/* Email */}

            <div className="login-field">

              <label>
                Email Address
              </label>

              <div className="login-input">

                <FaEnvelope className="login-input-icon" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>

            </div>


            {/* Password */}

            <div className="login-field">

              <label>
                Password
              </label>

              <div className="login-input">

                <FaLock className="login-input-icon" />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <span
                  className="login-eye"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword
                    ? <FaEyeSlash />
                    : <FaEye />
                  }
                </span>

              </div>

            </div>


            {/* Remember / Forgot */}

            <div className="login-options">

              <label className="login-remember">

                <input
                  type="checkbox"
                />

                <span>
                  Remember Me
                </span>

              </label>


              <Link
                to="/forgot-password"
                className="login-forgot"
              >
                Forgot Password?
              </Link>

            </div>


            {/* Login button */}

            <button
              type="submit"
              className="login-main-btn"
            >

              <span>Login</span>

              <strong>→</strong>

            </button>
            {/* Signup */}

            <div className="login-signup-text">

              New to CareerXpert?

              <Link to="/signup">
                Sign Up
              </Link>

            </div>

          </form>

        </div>

      </section>

    </div>
  );
};

export default Login;