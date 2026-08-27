import React from "react";
import { Link } from "react-router-dom";
import "../style/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <nav className="landing-navbar">

        {/* LOGO */}
        <Link to="/" className="landing-logo">
          <div className="landing-logo-icon">
            🎓
          </div>

          <div className="landing-logo-name">
            <span className="career-text">Career</span>
            <span className="xpert-text">Xpert</span>

            <small>Your Career. Our Guidance.</small>
          </div>
        </Link>


        {/* NAVIGATION */}
        <div className="landing-nav-links">

          <a href="#home" className="landing-active">
            Home
          </a>

          <a href="#why-careerxpert">
            Why CareerXpert
          </a>

          <a href="#about">
            About Us
          </a>

          <a href="#contact">
            Contact Us
          </a>

        </div>


        {/* LOGIN / SIGNUP */}
        <div className="landing-auth">

          <Link to="/login" className="landing-login">
            Login
          </Link>

          <Link to="/signup" className="landing-signup">
            Sign Up
          </Link>

        </div>

      </nav>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="landing-hero" id="home">

        {/* LEFT SIDE */}
        <div className="landing-hero-left">

          <div className="landing-small-label">
            YOUR CAREER. YOUR FUTURE.
          </div>

          <h1>
            Discover the Right
            <br />
            <span>Career Path</span> with
            <br />
            CareerXpert
          </h1>

          <div className="landing-heading-line"></div>

          <p>
            CareerXpert is your personalized career guidance
            platform that helps you explore career options,
            understand your strengths, and make confident
            decisions about your future.
          </p>

          <div className="landing-hero-buttons">

            <Link to="/signup" className="landing-get-started">
              Get Started
              <span>→</span>
            </Link>

            <a
              href="#why-careerxpert"
              className="landing-explore-btn"
            >
              Explore More
              <span>↓</span>
            </a>

          </div>

          <div className="landing-hero-note">
            <span>✓</span>
            Explore. Discover. Plan. Achieve.
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="landing-hero-right">

          <div className="career-visual">

            {/* Decorative circles */}
            <div className="visual-circle visual-circle-one"></div>
            <div className="visual-circle visual-circle-two"></div>

            {/* Main illustration */}
            <div className="career-illustration">

              {/* Laptop */}
              <div className="laptop">

                <div className="laptop-screen">

                  <div className="screen-top">
                    <span className="screen-dot"></span>
                    <span className="screen-dot"></span>
                    <span className="screen-dot"></span>
                  </div>

                  <div className="screen-content">

                    <div className="screen-title">
                      Find Your Career
                    </div>

                    <div className="screen-subtitle">
                      Your journey starts here
                    </div>

                    <div className="screen-cards">

                      <div className="screen-card">
                        <div className="screen-card-icon">
                          💡
                        </div>
                        <span>Discover</span>
                      </div>

                      <div className="screen-card">
                        <div className="screen-card-icon">
                          📊
                        </div>
                        <span>Assess</span>
                      </div>

                      <div className="screen-card">
                        <div className="screen-card-icon">
                          🧭
                        </div>
                        <span>Plan</span>
                      </div>

                    </div>

                    <div className="career-match-box">

                      <div>
                        <small>Career Match</small>
                        <strong>92%</strong>
                      </div>

                      <div className="match-progress">
                        <div></div>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="laptop-base"></div>

              </div>


              {/* Floating cards */}
              <div className="floating-card floating-card-one">

                <div className="floating-icon">
                  🎯
                </div>

                <div>
                  <small>Career Goal</small>
                  <strong>Software Developer</strong>
                </div>

              </div>


              <div className="floating-card floating-card-two">

                <div className="floating-icon">
                  ✦
                </div>

                <div>
                  <small>AI Guidance</small>
                  <strong>Personalized for You</strong>
                </div>

              </div>


              <div className="floating-card floating-card-three">

                <div className="floating-icon">
                  ✓
                </div>

                <div>
                  <small>Your Journey</small>
                  <strong>Ready to Begin</strong>
                </div>

              </div>


              {/* Graduation cap */}
              <div className="graduation-cap">
                🎓
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CAREERXPERT
      ===================================================== */}
      <section
        className="landing-why"
        id="why-careerxpert"
      >

        <div className="landing-section-heading">

          <h2>
            Why Explore <span>CareerXpert?</span>
          </h2>

          <p>
            Everything you need to make smarter career decisions.
          </p>

          <div className="landing-section-line"></div>

        </div>


        <div className="landing-why-grid">

          {/* CARD 1 */}
          <div className="landing-why-card">

            <div className="why-card-icon">
              🔍
            </div>

            <h3>
              Explore Careers
            </h3>

            <p>
              Discover different career options and
              understand the opportunities available
              across various fields.
            </p>

          </div>


          {/* CARD 2 */}
          <div className="landing-why-card">

            <div className="why-card-icon">
              📋
            </div>

            <h3>
              Assess Yourself
            </h3>

            <p>
              Understand your interests, abilities
              and strengths through career assessments.
            </p>

          </div>


          {/* CARD 3 */}
          <div className="landing-why-card">

            <div className="why-card-icon">
              🧭
            </div>

            <h3>
              Career Roadmap
            </h3>

            <p>
              Get a clear direction and understand
              the steps required to move towards
              your chosen career.
            </p>

          </div>


          {/* CARD 4 */}
          <div className="landing-why-card">

            <div className="why-card-icon">
              ✦
            </div>

            <h3>
              AI-Powered Guidance
            </h3>

            <p>
              Get intelligent career guidance and
              answers to your career-related questions.
            </p>

          </div>


          {/* CARD 5 */}
          <div className="landing-why-card">

            <div className="why-card-icon">
              📈
            </div>

            <h3>
              Plan Your Future
            </h3>

            <p>
              Make informed decisions and take
              meaningful steps towards your career goals.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAREER JOURNEY STRIP
      ===================================================== */}
      <section className="landing-journey">

        <div className="landing-journey-heading">

          <h2>
            Your Career Journey Starts Here
          </h2>

          <p>
            From discovering yourself to planning your future.
          </p>

        </div>


        <div className="landing-steps">

          <div className="landing-step">

            <div className="step-number">
              01
            </div>

            <div>
              <h3>Discover</h3>
              <p>Explore your possibilities</p>
            </div>

          </div>


          <div className="step-arrow">
            →
          </div>


          <div className="landing-step">

            <div className="step-number">
              02
            </div>

            <div>
              <h3>Understand</h3>
              <p>Know your strengths</p>
            </div>

          </div>


          <div className="step-arrow">
            →
          </div>


          <div className="landing-step">

            <div className="step-number">
              03
            </div>

            <div>
              <h3>Plan</h3>
              <p>Build your career path</p>
            </div>

          </div>


          <div className="step-arrow">
            →
          </div>


          <div className="landing-step">

            <div className="step-number">
              04
            </div>

            <div>
              <h3>Achieve</h3>
              <p>Move towards your goals</p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT US
      ===================================================== */}
      <section
        className="landing-about"
        id="about"
      >

        <div className="landing-about-visual">

          <div className="about-decoration about-decoration-one"></div>
          <div className="about-decoration about-decoration-two"></div>

          <div className="about-target">

            <div className="target-outer"></div>
            <div className="target-middle"></div>
            <div className="target-inner"></div>

            <div className="target-arrow"></div>

          </div>

          <div className="about-books">

            <div className="book book-bottom"></div>
            <div className="book book-middle"></div>
            <div className="book book-top"></div>

          </div>

          <div className="about-cap">
            🎓
          </div>

        </div>


        <div className="landing-about-content">

          <div className="landing-about-label">
            ABOUT CAREERXPERT
          </div>

          <h2>
            Helping You Make
            <br />
            <span>Better Career Decisions</span>
          </h2>

          <div className="landing-about-line"></div>

          <p>
            CareerXpert is designed to make career exploration
            simpler, clearer and more personalized. It brings
            career information, assessments, recommendations
            and guidance together in one platform.
          </p>

          <p>
            Whether you are exploring your first career option
            or looking for a new direction, CareerXpert helps
            you understand your choices and take the next step
            with greater confidence.
          </p>


          <div className="about-highlights">

            <div className="about-highlight">

              <strong>
                01
              </strong>

              <div>
                <h4>
                  Personalized
                </h4>

                <p>
                  Guidance based on your goals.
                </p>
              </div>

            </div>


            <div className="about-highlight">

              <strong>
                02
              </strong>

              <div>
                <h4>
                  Comprehensive
                </h4>

                <p>
                  Career tools in one platform.
                </p>
              </div>

            </div>


            <div className="about-highlight">

              <strong>
                03
              </strong>

              <div>
                <h4>
                  Future Focused
                </h4>

                <p>
                  Helping you plan your next step.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>





      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer
        className="landing-footer"
        id="contact"
      >

        <div className="landing-footer-content">

          {/* BRAND */}
          <div className="footer-brand">

            <div className="footer-logo">

              <div className="footer-logo-icon">
                🎓
              </div>

              <div className="footer-logo-text">

                <div>
                  <span>Career</span>
                  <b>Xpert</b>
                </div>

                <small>
                  Your Career. Our Guidance.
                </small>

              </div>

            </div>

            <p>
              Your trusted companion for
              career exploration, guidance
              and growth.
            </p>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <h3>
              Quick Links
            </h3>

            <a href="#home">
              Home
            </a>

            <a href="#why-careerxpert">
              Why CareerXpert
            </a>

            <a href="#about">
              About Us
            </a>

            <a href="#contact">
              Contact Us
            </a>

          </div>


          {/* ACCOUNT */}
          <div className="footer-column">

            <h3>
              Account
            </h3>

            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Sign Up
            </Link>

          </div>


          {/* CONTACT */}
          <div className="footer-column">

            <h3>
              CareerXpert
            </h3>

            <p>
              Explore. Discover.
              <br />
              Plan. Achieve.
            </p>

          </div>

        </div>


        <div className="landing-footer-bottom">

          <span>
            © 2026 CareerXpert. All rights reserved.
          </span>

          <span>
            Your Career. Our Guidance.
          </span>

        </div>

      </footer>

    </div>
  );
};

export default LandingPage;