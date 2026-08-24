import React from "react";

const Education = ({ formData, updateField }) => {
  return (
    <div className="form-container">

      <h2>Education Details</h2>

      <div className="input-group">
        <label>Degree</label>
        <input
          type="text"
          name="degree"
          placeholder="Enter Degree"
          value={formData.degree}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>College Name</label>
        <input
          type="text"
          name="college"
          placeholder="Enter College Name"
          value={formData.college}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>University / Board</label>
        <input
          type="text"
          name="university"
          placeholder="Enter University or Board"
          value={formData.university}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>Passing Year</label>
        <input
          type="number"
          name="passingYear"
          placeholder="Enter Passing Year"
          value={formData.passingYear}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>CGPA / Percentage</label>
        <input
          type="text"
          name="cgpa"
          placeholder="Enter CGPA or Percentage"
          value={formData.cgpa}
          onChange={updateField}
        />
      </div>

    </div>
  );
};

export default Education;