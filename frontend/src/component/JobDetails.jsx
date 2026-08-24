import React from "react";

const JobDetails = ({ formData, updateField }) => {
  return (
    <div className="form-container">

      <h2>Job Details</h2>

      <div className="input-group">
        <label>Company Name</label>
        <input
          type="text"
          name="company"
          placeholder="Enter Company Name"
          value={formData.company}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>Job Role</label>
        <input
          type="text"
          name="role"
          placeholder="Enter Job Role"
          value={formData.role}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>Hiring Manager (Optional)</label>
        <input
          type="text"
          name="hiringManager"
          placeholder="Enter Hiring Manager Name"
          value={formData.hiringManager}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>Company Location (Optional)</label>
        <input
          type="text"
          name="companyLocation"
          placeholder="Enter Company Location"
          value={formData.companyLocation || ""}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>Job Description (Optional)</label>
        <textarea
          name="jobDescription"
          placeholder="Paste Job Description"
          rows="6"
          value={formData.jobDescription || ""}
          onChange={updateField}
        ></textarea>
      </div>

    </div>
  );
};

export default JobDetails;