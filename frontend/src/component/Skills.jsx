import React from "react";

const Skills = ({ formData, updateField }) => {
  return (
    <div className="form-container">

      <h2>Skills & Cover Letter Tone</h2>

      <div className="input-group">
        <label>Technical Skills</label>
        <textarea
          name="technicalSkills"
          rows="5"
          placeholder="Example: HTML, CSS, JavaScript, React, Node.js, MongoDB"
          value={formData.technicalSkills}
          onChange={updateField}
        ></textarea>
      </div>

      <div className="input-group">
        <label>Soft Skills</label>
        <textarea
          name="softSkills"
          rows="4"
          placeholder="Example: Communication, Leadership, Teamwork, Problem Solving"
          value={formData.softSkills}
          onChange={updateField}
        ></textarea>
      </div>

      <div className="input-group">
        <label>Cover Letter Tone</label>

        <select
          name="tone"
          value={formData.tone}
          onChange={updateField}
        >
          <option value="Professional">Professional</option>
          <option value="Formal">Formal</option>
          <option value="Friendly">Friendly</option>
          <option value="Confident">Confident</option>
        </select>
      </div>

    </div>
  );
};

export default Skills;