import React from "react";

const Experience = ({ formData, updateField }) => {
  return (
    <div className="form-container">

      <h2>Experience Details</h2>

      <div className="input-group">
        <label>Experience Level</label>

        <div className="radio-group">

          <label>
            <input
              type="radio"
              name="experience"
              value="Fresher"
              checked={formData.experience === "Fresher"}
              onChange={updateField}
            />
            Fresher
          </label>

          <label>
            <input
              type="radio"
              name="experience"
              value="Experienced"
              checked={formData.experience === "Experienced"}
              onChange={updateField}
            />
            Experienced
          </label>

        </div>
      </div>

      <div className="input-group">
        <label>Internship Details</label>

        <textarea
          name="internship"
          rows="4"
          placeholder="Enter Internship Details"
          value={formData.internship}
          onChange={updateField}
        ></textarea>
      </div>

      <div className="input-group">
        <label>Work Experience</label>

        <textarea
          name="workExperience"
          rows="4"
          placeholder="Enter Work Experience"
          value={formData.workExperience}
          onChange={updateField}
        ></textarea>
      </div>

      <div className="input-group">
        <label>Achievements</label>

        <textarea
          name="achievements"
          rows="4"
          placeholder="Enter Achievements"
          value={formData.achievements}
          onChange={updateField}
        ></textarea>
      </div>

      <div className="input-group">
        <label>Certifications</label>

        <textarea
          name="certifications"
          rows="4"
          placeholder="Enter Certifications"
          value={formData.certifications}
          onChange={updateField}
        ></textarea>
      </div>

    </div>
  );
};

export default Experience;