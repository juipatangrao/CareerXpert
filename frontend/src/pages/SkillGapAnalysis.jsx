import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeSkillGap } from "../services/skillGapService";
import skillsByCareerAndEducation from "../data/skillsData";
import "../style/SkillGapAnalysis.css";

const SkillGapAnalysis = () => {
  const [education, setEducation] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    career: "",
    education: "",
    experience: "",
    hours: "",
    skills: [],
  });

  const [customSkill, setCustomSkill] = useState("");

  // -----------------------------------------
  // FORM CHANGE
  // -----------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      // Career change
      if (name === "career") {
        return {
          ...prev,
          career: value,
          skills: [],
        };
      }

      // Education change
      if (name === "education") {
        return {
          ...prev,
          education: value,
          skills: [],
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // -----------------------------------------
  // GET SKILLS BASED ON CAREER + EDUCATION
  // -----------------------------------------

  const availableSkills =
    formData.career && formData.education
      ? skillsByCareerAndEducation?.[formData.career]?.[
          formData.education
        ] || []
      : [];

  // -----------------------------------------
  // ADD SKILL FROM DROPDOWN
  // -----------------------------------------

  const handleSkillSelect = (e) => {
    const skill = e.target.value;

    if (!skill) return;

    if (!formData.skills.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    }

    // Dropdown पुन्हा placeholder वर
    e.target.value = "";
  };

  // -----------------------------------------
  // ADD CUSTOM SKILL
  // -----------------------------------------

  const handleAddCustomSkill = () => {
    const skill = customSkill.trim();

    if (!skill) return;

    // Duplicate skill prevent
    const alreadyExists = formData.skills.some(
      (item) => item.toLowerCase() === skill.toLowerCase()
    );

    if (alreadyExists) {
      setCustomSkill("");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));

    setCustomSkill("");
  };

  // -----------------------------------------
  // ENTER KEY FOR CUSTOM SKILL
  // -----------------------------------------

  const handleCustomSkillKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddCustomSkill();
    }
  };

  // -----------------------------------------
  // REMOVE SKILL
  // -----------------------------------------

  const handleRemoveSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter(
        (skill) => skill !== skillToRemove
      ),
    }));
  };

  // -----------------------------------------
  // SUBMIT
  // -----------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.skills.length === 0) {
      alert("Please select or add at least one current skill.");
      return;
    }

    try {
      console.log("Skill Gap Data:", formData);

      const result = await analyzeSkillGap(formData);

      navigate("/skill-gap-result", {
        state: result,
      });
    } catch (error) {
      console.error("Skill Gap Error:", error);
      alert("Failed to Analyze Skills");
    }
  };

  return (
    <div className="skill-gap-page">
      <div className="skill-gap-container">

        {/* HEADER */}

        <div className="skill-gap-header">
          <h1>Skill Gap Analysis</h1>

          <p>
            Analyze your current skills and identify the skills
            required for your dream career.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* DREAM CAREER */}

          <div className="form-group">
            <label>Dream Career</label>
<input
  list="career-options"
  name="career"
  value={formData.career}
  onChange={handleChange}
  placeholder="Select or type your dream career"
  required
/>

<datalist id="career-options">
  <option value="Software Engineer" />
  <option value="Full Stack Developer" />
  <option value="Frontend Developer" />
  <option value="Backend Developer" />
  <option value="AI Engineer" />
  <option value="Data Scientist" />
  <option value="Cyber Security Engineer" />
  <option value="UI/UX Designer" />
</datalist>
          </div>

          {/* CURRENT EDUCATION */}

          <div className="form-group">
            <label>Current Education</label>
<input
  list="education-options"
  name="education"
  value={education}
  onChange={(e) => {
    const value = e.target.value;

    setEducation(value);

    setFormData((prev) => ({
      ...prev,
      education: value,
      skills: [],
    }));
  }}
  placeholder="Select or type your current education"
  required
/>

<datalist id="education-options">
  <option value="10th" />
  <option value="12th Science" />
  <option value="12th Commerce" />
  <option value="12th Arts" />
  <option value="Diploma Computer" />
  <option value="Diploma IT" />
  <option value="Engineering Computer" />
  <option value="Engineering IT" />
  <option value="BCA" />
  <option value="BSc Computer Science" />
  <option value="MCA" />
  <option value="MSc Computer Science" />
</datalist>
          </div>

          {/* EXPERIENCE */}

          <div className="form-group">
            <label>Experience Level</label>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Experience
              </option>

              <option value="Beginner">
                Beginner
              </option>

              <option value="Intermediate">
                Intermediate
              </option>

              <option value="Advanced">
                Advanced
              </option>
            </select>
          </div>

          {/* STUDY HOURS */}

          <div className="form-group">
            <label>Available Study Hours</label>

            <select
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Hours
              </option>

              <option value="1 Hour">
                1 Hour
              </option>

              <option value="2 Hours">
                2 Hours
              </option>

              <option value="3 Hours">
                3 Hours
              </option>

              <option value="4 Hours">
                4 Hours
              </option>

              <option value="5+ Hours">
                5+ Hours
              </option>
            </select>
          </div>

          {/* CURRENT SKILLS */}

          <div className="form-group skills-section">

            <label>Select Your Current Skills</label>

            {/* Show only after career + education */}

            {!formData.career || !formData.education ? (
              <div className="skill-info">
                Select your dream career and current education
                to see relevant skills.
              </div>
            ) : (
              <>
                {/* SKILL DROPDOWN */}

                <select
                  className="skill-dropdown"
                  defaultValue=""
                  onChange={handleSkillSelect}
                >
                  <option value="">
                    Select a skill to add
                  </option>

                  {availableSkills
                    .filter(
                      (skill) =>
                        !formData.skills.includes(skill)
                    )
                    .map((skill) => (
                      <option
                        key={skill}
                        value={skill}
                      >
                        {skill}
                      </option>
                    ))}
                </select>

                {/* CUSTOM SKILL */}

                <div className="custom-skill-row">

                  <div className="custom-skill-row">
  <input
    type="text"
    value={customSkill}
    onChange={(e) => setCustomSkill(e.target.value)}
    placeholder="Type your own skill..."
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addCustomSkill();
      }
    }}
  />

  <button
    type="button"
    className="add-skill-btn"
onClick={handleAddCustomSkill}  >
    + Add Skill
  </button>
</div>

                </div>

                {/* SELECTED SKILLS */}

                {formData.skills.length > 0 && (
                  <div className="selected-skills">

                    {formData.skills.map((skill) => (
                      <div
                        className="skill-chip"
                        key={skill}
                      >
                        <span>{skill}</span>

                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveSkill(skill)
                          }
                        >
                          ×
                        </button>
                      </div>
                    ))}

                  </div>
                )}
              </>
            )}
          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            className="analyze-btn"
          >
            Analyze Skills
          </button>

        </form>
      </div>
    </div>
  );
};

export default SkillGapAnalysis;