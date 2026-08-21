import React from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import "../style/Navbar.css";

const Navbar = ({ profileImage, setOpen }) => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Career Xpert" />
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li>Career</li>
        <li>Career Test</li>
        <li>Roadmap</li>
      </ul>

      {/* Right Section */}
      <div className="right-section">
        {/* Search */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        {/* Notification */}
        <FaBell className="icon" />

        {/* Profile */}
        <div className="profile" onClick={() => setOpen(true)}>
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-img" />
          ) : (
            <FaUserCircle className="profile-icon" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;