import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/GetStarted.css";

import { FaUsers, FaArrowRight } from "react-icons/fa";
import Logo from "../assets/logo.png";

const GetStarted = () => {
      const navigate = useNavigate();

  return (
    <div className="getstarted-page">

      <div className="getstarted-card">

        <img src={Logo} alt="CareerXpert Logo" className="logo" />

        <h1>Get Started</h1>

        <p>
          Create your account and start your
          <br />
          journey towards a successful career.
        </p>

        <div className="icon-circle">
          <FaUsers />
        </div>
        
        <button
  className="start-btn"
  onClick={() => navigate("/signup")}
>
  Get Started
  <FaArrowRight className="arrow" />
</button>

        <h3>
          Empowering Careers. Building Futures.
        </h3>

      </div>

    </div>
  );
};

export default GetStarted;