import "../style/PortfolioGenerator.css";
import { useState } from "react";
function PortfolioGenerator() {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    about: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    education: "",
    skills: "",
    project: "",
  });
  const [profileImage, setProfileImage] = useState(null);

  const [theme, setTheme] = useState("maroon");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };
  const changeTheme = (e) => {
    setTheme(e.target.value);
  };
  return (
    <div className="portfolio-page">
      {/* LEFT SIDE */}
      <div className="portfolio-form">
        <h2>Portfolio Generator</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="profession"
          placeholder="Profession"
          onChange={handleChange}
        />
        <label>Profile Photo</label>

        <input type="file" accept="image/*" onChange={handleImage} />
        <textarea
          name="about"
          placeholder="About Yourself"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn"
          onChange={handleChange}
        />

        <input
          type="text"
          name="github"
          placeholder="GitHub"
          onChange={handleChange}
        />

        <textarea
          name="education"
          placeholder="Education"
          onChange={handleChange}
        />

        <textarea
          name="skills"
          placeholder="Skills (Comma separated)"
          onChange={handleChange}
        />

        <textarea
          name="project"
          placeholder="Projects"
          onChange={handleChange}
        />
      </div>

      {/* RIGHT SIDE */}

      <div className={`portfolio-preview ${theme}`}>
        <div className="preview-header">
          <div className="profile-image">
            {profileImage ? (
              <img src={profileImage} alt="profile" />
            ) : (
              <div className="profile-circle">
                {formData.name ? formData.name.charAt(0).toUpperCase() : "P"}
              </div>
            )}
          </div>

          <h1>{formData.name || "Your Name"}</h1>

          <h3>{formData.profession || "Profession"}</h3>
        </div>

        <div className="preview-section">
          <h2>About</h2>
          <p>{formData.about || "Write about yourself..."}</p>
        </div>

        <div className="preview-section">
          <h2>Education</h2>
          <p>{formData.education || "Education details..."}</p>
        </div>

        <div className="preview-section">
          <h2>Skills</h2>

          <div className="skills">
            {formData.skills ? (
              formData.skills
                .split(",")
                .map((skill, index) => <span key={index}>{skill.trim()}</span>)
            ) : (
              <span>No Skills</span>
            )}
          </div>
        </div>

        <div className="preview-section">
          <h2>Projects</h2>
          <p>{formData.project || "Projects..."}</p>
          <h3>Select Theme</h3>

          <select value={theme} onChange={changeTheme}>
            <option value="maroon">Maroon</option>

            <option value="dark">Dark</option>

            <option value="minimal">Minimal</option>
          </select>
        </div>

        <div className="preview-section">
          <h2>Contact</h2>

          <p>Email : {formData.email}</p>

          <p>Phone : {formData.phone}</p>

          <p>Location : {formData.location}</p>

          <p>LinkedIn : {formData.linkedin}</p>

          <p>GitHub : {formData.github}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioGenerator;
