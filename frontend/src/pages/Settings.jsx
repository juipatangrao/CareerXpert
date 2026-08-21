import React, { useState } from "react";
import "../style/Settings.css";
import {
  FaUser,
  FaBell,
  FaGlobe,
  FaLock,
  FaFileAlt,
  FaExclamationTriangle,
  FaTrash,
} from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    jobs: true,
    news: true,
    marketing: false,
  });

  const toggleNotification = (name) => {
    setNotifications({
      ...notifications,
      [name]: !notifications[name],
    });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your CareerXpert account?",
    );

    if (confirmDelete) {
      alert("Account deleted successfully");
      // backend delete API later add here
    }
  };

  return (
    <div className="settings-page">
<div className="back-btn">
        <Link to="/home">
          <IoArrowBack />
        </Link>
      </div>
      <div className="settings-header">
        <h1>⚙️ Settings</h1>
        <p>Manage your account and preferences</p>
      </div>

      {/* Account */}

      <div className="settings-card">
        <h2>
          <FaUser /> Account
        </h2>

        <div className="info-row">
          <span>Email</span>
          <p>sa@gmail.com</p>
        </div>

        <div className="info-row">
          <span>Username</span>
          <p>srush</p>
        </div>

        <div className="info-row">
          <span>🟢 Account Status</span>
          <p>Active</p>
        </div>

        <button className="profile-btn">View Profile</button>
      </div>

      {/* Notifications */}

      <div className="settings-card">
        <h2>
          <FaBell /> Notifications
        </h2>

        <Toggle
          title="Email Notifications"
          value={notifications.email}
          change={() => toggleNotification("email")}
        />

        <Toggle
          title="Job Recommendations"
          value={notifications.jobs}
          change={() => toggleNotification("jobs")}
        />

        <Toggle
          title="Career News"
          value={notifications.news}
          change={() => toggleNotification("news")}
        />

        <Toggle
          title="Marketing Emails"
          value={notifications.marketing}
          change={() => toggleNotification("marketing")}
        />
      </div>

      {/* Preferences */}

      <div className="settings-card">
        <h2>
          <FaGlobe /> Preferences
        </h2>

        <div className="setting-option">
          <span>🌙 Dark Mode</span>

          <button className="disabled">Coming Soon</button>
        </div>

        <div className="setting-option">
          <span>🌎 Language</span>

          <select>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
          </select>
        </div>
      </div>

      {/* Security */}

      <div className="settings-card">
        <h2>
          <FaLock /> Security
        </h2>

        <div className="click-option">🔑 Change Password</div>

        <div className="click-option">
          📱 Two Factor Authentication
          <small>Coming Soon</small>
        </div>
      </div>

      {/* Privacy */}

      <div className="settings-card">
        <h2>
          <FaFileAlt /> Privacy
        </h2>

        <div className="click-option">📜 Privacy Policy</div>

        <div className="click-option">📑 Terms & Conditions</div>
      </div>

      {/* Danger Zone */}

      <div className="danger-card">
        <h2>
          <FaExclamationTriangle /> Danger Zone
        </h2>

        <p>Deleting your account is permanent. This action cannot be undone.</p>

        <button className="delete-btn" onClick={handleDelete}>
          <FaTrash /> Delete Account
        </button>
      </div>
    </div>
  );
}

function Toggle({ title, value, change }) {
  return (
    <div className="toggle-row">
      <span>{title}</span>

      <label className="switch">
        <input type="checkbox" checked={value} onChange={change} />

        <span className="slider"></span>
      </label>
    </div>
  );
}

export default Settings;
