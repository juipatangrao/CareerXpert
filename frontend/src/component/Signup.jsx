import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Signup.css";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaUserPlus,
  FaCompass,
  FaClipboardCheck,
  FaMapMarkedAlt,
  FaTrophy,
  FaArrowUp,
} from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password.length !== 5) {
      alert("Password must be exactly 5 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name: fullName,
        email: email,
        password: password,
      });

      console.log(res.data);

      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem("loggedInUser", res.data.user.name);
      localStorage.setItem("userEmail", email);

      localStorage.setItem("isNewUser", "true");

      alert("Signup Successful!");

      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      navigate("/login");
    } catch (err) {
      console.log(err);

      alert(err.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="signup-page">
      {/* =====================================================
          LEFT CAREER PANEL
      ===================================================== */}

      <div className="signup-career-panel">
        {/* Decorative background */}
        <div className="signup-bg-circle circle-one"></div>
        <div className="signup-bg-circle circle-two"></div>
        <div className="signup-bg-circle circle-three"></div>

        {/* BRAND */}
        <div className="signup-brand">
          <div className="signup-brand-icon">
            <FaUserPlus />
          </div>

          <div className="signup-brand-name">
            <div>
              <span>Career</span>
              <strong>Xpert</strong>
            </div>

            <small>Your Career. Our Guidance.</small>
          </div>
        </div>

        {/* MAIN MESSAGE */}

        <div className="career-intro">
          <span className="career-label">YOUR FUTURE STARTS HERE</span>

          <h1>
            Start Your
            <br />
            <span>Career Journey</span>
          </h1>

          <div className="career-yellow-line"></div>

          <p>
            Discover your possibilities, understand your strengths and move
            towards the right career.
          </p>
        </div>

        {/* CAREER JOURNEY */}

        <div className="career-journey">
          <div className="journey-line"></div>

          {/* EXPLORE */}

          <div className="journey-item">
            <div className="journey-icon">
              <FaCompass />
            </div>

            <div className="journey-content">
              <strong>Explore</strong>
              <span>Discover possibilities</span>
            </div>
          </div>

          {/* ASSESS */}

          <div className="journey-item">
            <div className="journey-icon">
              <FaClipboardCheck />
            </div>

            <div className="journey-content">
              <strong>Assess</strong>
              <span>Understand your strengths</span>
            </div>
          </div>

          {/* PLAN */}

          <div className="journey-item">
            <div className="journey-icon">
              <FaMapMarkedAlt />
            </div>

            <div className="journey-content">
              <strong>Plan</strong>
              <span>Build your career path</span>
            </div>
          </div>

          {/* ACHIEVE */}

          <div className="journey-item">
            <div className="journey-icon">
              <FaTrophy />
            </div>

            <div className="journey-content">
              <strong>Achieve</strong>
              <span>Reach your goals</span>
            </div>
          </div>
        </div>

        {/* CAREER ILLUSTRATION */}

        <div className="career-visual">
          <div className="visual-glow"></div>

          <div className="career-target">
            <div className="target-ring target-ring-outer"></div>

            <div className="target-ring target-ring-middle"></div>

            <div className="target-ring target-ring-inner"></div>

            <div className="target-center"></div>

            <div className="target-arrow">
              <FaArrowUp />
            </div>
          </div>

          {/* staircase */}

          <div className="career-stairs">
            <div className="stair stair-one"></div>
            <div className="stair stair-two"></div>
            <div className="stair stair-three"></div>
            <div className="stair stair-four"></div>
            <div className="stair stair-five"></div>
          </div>

          {/* student */}

          <div className="career-person">
            <div className="person-head"></div>

            <div className="person-body"></div>

            <div className="person-backpack"></div>

            <div className="person-leg leg-left"></div>

            <div className="person-leg leg-right"></div>
          </div>

          {/* books */}

          <div className="career-books">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      {/* =====================================================
          RIGHT SIGNUP FORM
      ===================================================== */}

      <div className="signup-form-side">
        <div className="signup-card">
          {/* TOP ICON */}

          <div className="signup-form-icon">
            <FaUserPlus />
          </div>

          {/* HEADING */}

          <div className="signup-heading">
            <h2>
              Create <span>Account</span>
            </h2>

            <p>Sign up and start your journey</p>

            <div className="signup-heading-line"></div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* FULL NAME */}

            <div className="signup-field">
              <label>Full Name</label>

              <div className="signup-input">
                <FaUser className="signup-input-icon" />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            {/* EMAIL */}

            <div className="signup-field">
              <label>Email Address</label>

              <div className="signup-input">
                <FaEnvelope className="signup-input-icon" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div className="signup-field">
              <label>Password</label>

              <div className="signup-input">
                <FaLock className="signup-input-icon" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span
                  className="signup-eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}

            <div className="signup-field">
              <label>Confirm Password</label>

              <div className="signup-input">
                <FaLock className="signup-input-icon" />

                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <span
                  className="signup-eye"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* TERMS */}

            <div className="signup-check">
              <input type="checkbox" />

              <span>
                I agree to the <b>Terms & Privacy Policy</b>
              </span>
            </div>

            {/* MAIN BUTTON */}

            <button type="submit" className="signup-main-btn">
              <span>Create Account</span>
              <strong>→</strong>
            </button>

            {/* LOGIN */}

            <div className="signup-login-text">
              Already have an account?
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
