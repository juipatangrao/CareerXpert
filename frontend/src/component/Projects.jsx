import React from "react";

const Projects = ({ formData, updateField }) => {
  return (
    <div className="form-container">

      <h2>Projects Details</h2>

      <div className="input-group">
        <label>Project Title</label>
        <input
          type="text"
          name="projectTitle"
          placeholder="Enter Project Title"
          value={formData.projectTitle}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>Project Description</label>
        <textarea
          name="projectDescription"
          rows="5"
          placeholder="Describe your project"
          value={formData.projectDescription}
          onChange={updateField}
        ></textarea>
      </div>

      <div className="input-group">
        <label>Technologies Used</label>
        <input
          type="text"
          name="technologies"
          placeholder="React, Node.js, Express, MongoDB"
          value={formData.technologies}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>GitHub Repository (Optional)</label>
        <input
          type="text"
          name="github"
          placeholder="https://github.com/username/project"
          value={formData.github}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>Live Demo (Optional)</label>
        <input
          type="text"
          name="liveDemo"
          placeholder="https://yourproject.com"
          value={formData.liveDemo}
          onChange={updateField}
        />
      </div>

    </div>
  );
};

export default Projects;