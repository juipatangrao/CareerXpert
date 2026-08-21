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


//       localStorage.setItem(
//  "loggedInUser",
//  res.data.user.name
// )

localStorage.setItem("loggedInUser", res.data.user.name);
localStorage.setItem("userEmail", res.data.user.email);
localStorage.setItem("userId", res.data.user._id);
localStorage.setItem("token", res.data.token);

      alert("Login Successful!");

      navigate("/home");

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Login Failed"
      );
    }
  };


  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="auth-icon">
          <FaUser />
        </div>

        <h1>Welcome Back!</h1>

        <p>
          Login to continue your journey
        </p>


        <form onSubmit={handleSubmit}>


          {/* Email */}

          <label>Email Address</label>

          <div className="input-box">

            <FaEnvelope className="icon" />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>



          {/* Password */}

          <label>Password</label>

          <div className="input-box">

            <FaLock className="icon" />


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
              className="eye"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >

              {
                showPassword
                  ? <FaEyeSlash />
                  : <FaEye />
              }

            </span>


          </div>



          <div className="login-options">

            <label className="remember">

              <input
                type="checkbox"
              />

              Remember Me

            </label>


            <a
              href="/"
              className="forgot"
            >
              Forgot Password?
            </a>


          </div>



          <button
            className="main-btn"
            type="submit"
          >

            Login

          </button>




          <div className="divider">

            <span>
              OR
            </span>

          </div>




          <button
            type="button"
            className="google-btn"
          >

            <FaGoogle />

            Continue with Google

          </button>




          <button
            type="button"
            className="github-btn"
          >

            <FaGithub />

            Continue with GitHub

          </button>




          <div className="bottom-text">

            New to CareerXpert?

            <Link to="/signup">
              {" "}Sign Up
            </Link>

          </div>



        </form>


      </div>

    </div>
  );
};


export default Login;