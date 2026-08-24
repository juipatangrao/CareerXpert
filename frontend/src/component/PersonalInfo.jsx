import React from "react";

const PersonalInfo = ({ formData, updateField }) => {
  return (
    <div className="form-container">

      <h2>Personal Information</h2>

      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          value={formData.fullName}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={updateField}
        />
      </div>

      <div className="input-group">
        <label>LinkedIn (Optional)</label>
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile URL"
          value={formData.linkedin}
          onChange={updateField}
        />
      </div>

    </div>
  );
};

export default PersonalInfo;