import React, { useEffect, useState } from "react";
import "../style/Settings.css";

import {
  FaUser,
  FaBell,
  FaGlobe,
  FaLock,
  FaFileAlt,
  FaExclamationTriangle,
  FaTrash,
  FaKey,
  FaShieldAlt,
  FaMoon,
  FaSun,
  FaTimes,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
} from "react-icons/fa";

import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem("careerxpert_notifications");

    return saved
      ? JSON.parse(saved)
      : {
          email: true,
          jobs: true,
          news: true,
          marketing: false,
        };
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("careerxpert_darkMode") === "true";
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("careerxpert_language") || "English";
  });

  const [activeModal, setActiveModal] = useState(null);

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [passwordMessage, setPasswordMessage] = useState("");

  const user = {
    email: "sa@gmail.com",
    username: "srush",
    status: "Active",
  };

  /* ---------------------------------
     SAVE NOTIFICATION SETTINGS
  --------------------------------- */

  useEffect(() => {
    localStorage.setItem(
      "careerxpert_notifications",
      JSON.stringify(notifications),
    );
  }, [notifications]);

  /* ---------------------------------
     DARK MODE
  --------------------------------- */

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    localStorage.setItem("careerxpert_darkMode", darkMode);
  }, [darkMode]);

  /* ---------------------------------
     NOTIFICATION TOGGLE
  --------------------------------- */

  const toggleNotification = (name) => {
    setNotifications((previous) => ({
      ...previous,
      [name]: !previous[name],
    }));
  };

  /* ---------------------------------
     LANGUAGE
  --------------------------------- */

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    setLanguage(selectedLanguage);

    localStorage.setItem(
      "careerxpert_language",
      selectedLanguage,
    );

    alert(`Language changed to ${selectedLanguage}`);
  };

  /* ---------------------------------
     PASSWORD
  --------------------------------- */

  const handlePasswordChange = (event) => {
    setPasswords({
      ...passwords,
      [event.target.name]: event.target.value,
    });

    setPasswordMessage("");
  };

  const handleChangePassword = (event) => {
    event.preventDefault();

    if (!passwords.current || !passwords.new || !passwords.confirm) {
      setPasswordMessage("Please fill all password fields.");
      return;
    }

    if (passwords.new.length < 8) {
      setPasswordMessage(
        "New password must contain at least 8 characters.",
      );
      return;
    }

    if (passwords.new !== passwords.confirm) {
      setPasswordMessage("New passwords do not match.");
      return;
    }

    /*
      Backend API should be called here.

      Example:

      await fetch("/api/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword: passwords.current,
          newPassword: passwords.new,
        }),
      });
    */

    setPasswordMessage("Password changed successfully.");

    setPasswords({
      current: "",
      new: "",
      confirm: "",
    });

    setTimeout(() => {
      setActiveModal(null);
      setPasswordMessage("");
    }, 1500);
  };

  /* ---------------------------------
     DELETE ACCOUNT
  --------------------------------- */

  const handleDelete = () => {
    const confirmText = window.prompt(
      'This action is permanent.\n\nType "DELETE" to confirm account deletion.',
    );

    if (confirmText !== "DELETE") {
      return;
    }

    /*
      Backend API should be called here.

      Example:

      await fetch("/api/delete-account", {
        method: "DELETE",
      });
    */

    localStorage.clear();

    alert("Your account has been deleted.");

    navigate("/login");
  };

  /* ---------------------------------
     CLOSE MODAL
  --------------------------------- */

  const closeModal = () => {
    setActiveModal(null);
    setPasswordMessage("");
  };

  return (
    <div className="settings-page">

      {/* BACK BUTTON */}

<div className="settings-back-wrapper">
  <Link to="/home" className="settings-back-link">
    <IoArrowBack />
  </Link>
</div>

      {/* HEADER */}

      <div className="settings-header">
        <h1>
          <span className="settings-title-icon">
            <FaGlobe />
          </span>
          Settings
        </h1>

        <p>Manage your account and preferences</p>
      </div>

      {/* ACCOUNT */}

      <div className="settings-card">

        <h2>
          <FaUser /> Account
        </h2>

        <div className="info-row">
          <span>Email</span>
          <p>{user.email}</p>
        </div>

        <div className="info-row">
          <span>Username</span>
          <p>{user.username}</p>
        </div>

        <div className="info-row">
          <span>
            <span className="status-dot"></span>
            Account Status
          </span>

          <p className="active-status">
            {user.status}
          </p>
        </div>

        <button
          className="profile-btn"
          onClick={() => setActiveModal("profile")}
        >
          View Profile
        </button>

      </div>

      {/* NOTIFICATIONS */}

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

      {/* PREFERENCES */}

      <div className="settings-card">

        <h2>
          <FaGlobe /> Preferences
        </h2>

        <div className="setting-option">

          <span>
            {darkMode ? <FaMoon /> : <FaSun />}
            Dark Mode
          </span>

          <label className="switch">

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />

            <span className="slider"></span>

          </label>

        </div>

        <div className="setting-option">

          <span>
            <FaGlobe />
            Language
          </span>

          <select
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
          </select>

        </div>

      </div>

      {/* SECURITY */}

      <div className="settings-card">

        <h2>
          <FaLock /> Security
        </h2>

        <button
          className="click-option"
          onClick={() => setActiveModal("password")}
        >
          <span>
            <FaKey />
            Change Password
          </span>

          <span className="arrow">
            →
          </span>
        </button>

        <button
          className="click-option disabled-option"
          onClick={() => alert("Two Factor Authentication is coming soon.")}
        >
          <span>
            <FaShieldAlt />
            Two Factor Authentication
          </span>

          <small>Coming Soon</small>
        </button>

      </div>

      {/* PRIVACY */}

      <div className="settings-card">

        <h2>
          <FaFileAlt /> Privacy
        </h2>

        <button
          className="click-option"
          onClick={() => setActiveModal("privacy")}
        >
          <span>
            <FaFileAlt />
            Privacy Policy
          </span>

          <span className="arrow">
            →
          </span>
        </button>

        <button
          className="click-option"
          onClick={() => setActiveModal("terms")}
        >
          <span>
            <FaFileAlt />
            Terms & Conditions
          </span>

          <span className="arrow">
            →
          </span>
        </button>

      </div>

      {/* DANGER ZONE */}

      <div className="danger-card">

        <h2>
          <FaExclamationTriangle />
          Danger Zone
        </h2>

        <p>
          Deleting your account is permanent. This action
          cannot be undone.
        </p>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          <FaTrash />
          Delete Account
        </button>

      </div>

      {/* MODALS */}

      {activeModal === "profile" && (
        <Modal
          title="My Profile"
          close={closeModal}
        >
          <div className="profile-modal">

            <div className="profile-avatar">
              {user.username.charAt(0).toUpperCase()}
            </div>

            <h3>{user.username}</h3>

            <p>{user.email}</p>

            <div className="profile-status">
              <FaCheckCircle />
              Account Active
            </div>

            <div className="profile-details">

              <div>
                <span>Username</span>
                <strong>{user.username}</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{user.email}</strong>
              </div>

              <div>
                <span>Language</span>
                <strong>{language}</strong>
              </div>

            </div>

          </div>
        </Modal>
      )}

      {activeModal === "password" && (
        <Modal
          title="Change Password"
          close={closeModal}
        >

          <form
            className="password-form"
            onSubmit={handleChangePassword}
          >

            <label>Current Password</label>

            <div className="password-input">

              <input
                type={showPassword.current ? "text" : "password"}
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                placeholder="Enter current password"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    current: !showPassword.current,
                  })
                }
              >
                {showPassword.current ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            <label>New Password</label>

            <div className="password-input">

              <input
                type={showPassword.new ? "text" : "password"}
                name="new"
                value={passwords.new}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    new: !showPassword.new,
                  })
                }
              >
                {showPassword.new ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            <label>Confirm New Password</label>

            <div className="password-input">

              <input
                type={
                  showPassword.confirm
                    ? "text"
                    : "password"
                }
                name="confirm"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                placeholder="Confirm new password"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    confirm: !showPassword.confirm,
                  })
                }
              >
                {showPassword.confirm ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {passwordMessage && (
              <div
                className={
                  passwordMessage.includes("successfully")
                    ? "success-message"
                    : "error-message"
                }
              >
                {passwordMessage}
              </div>
            )}

            <button
              type="submit"
              className="modal-primary-btn"
            >
              Change Password
            </button>

          </form>

        </Modal>
      )}

      {activeModal === "privacy" && (
        <Modal
          title="Privacy Policy"
          close={closeModal}
        >

          <div className="policy-content">

            <h3>CareerXpert Privacy Policy</h3>

            <p>
              CareerXpert respects your privacy and is committed
              to protecting your personal information.
            </p>

            <h4>Information We Collect</h4>

            <p>
              We may collect account information, career
              preferences, job interests and activity required
              to provide career-related services.
            </p>

            <h4>How We Use Your Information</h4>

            <p>
              Your information may be used to provide job
              recommendations, career guidance, notifications
              and improve the CareerXpert experience.
            </p>

            <h4>Data Security</h4>

            <p>
              We take reasonable measures to protect your
              information from unauthorized access or misuse.
            </p>

          </div>

        </Modal>
      )}

      {activeModal === "terms" && (
        <Modal
          title="Terms & Conditions"
          close={closeModal}
        >

          <div className="policy-content">

            <h3>CareerXpert Terms & Conditions</h3>

            <p>
              By using CareerXpert, you agree to use the
              platform responsibly and in accordance with
              applicable laws.
            </p>

            <h4>Account Responsibility</h4>

            <p>
              You are responsible for maintaining the
              confidentiality of your account credentials.
            </p>

            <h4>Career Information</h4>

            <p>
              Career recommendations and information provided
              by CareerXpert are intended for guidance purposes.
            </p>

            <h4>Account Termination</h4>

            <p>
              Users may delete their accounts at any time.
              Account deletion may permanently remove
              associated data.
            </p>

          </div>

        </Modal>
      )}

    </div>
  );
}

/* ---------------------------------
   TOGGLE COMPONENT
--------------------------------- */

function Toggle({ title, value, change }) {
  return (
    <div className="toggle-row">

      <span>{title}</span>

      <label className="switch">

        <input
          type="checkbox"
          checked={value}
          onChange={change}
        />

        <span className="slider"></span>

      </label>

    </div>
  );
}

/* ---------------------------------
   MODAL COMPONENT
--------------------------------- */

function Modal({ title, close, children }) {
  return (
    <div
      className="modal-overlay"
      onClick={close}
    >

      <div
        className="settings-modal"
        onClick={(event) => event.stopPropagation()}
      >

        <div className="modal-header">

          <h2>{title}</h2>

          <button
            className="modal-close"
            onClick={close}
          >
            <FaTimes />
          </button>

        </div>

        <div className="modal-body">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Settings;