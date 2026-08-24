import React from "react";

const Review = ({ formData }) => {
  return (
    <div className="form-container">

      <h2>Review Your Information</h2>

      {/* Personal Information */}

      <div className="review-section">
        <h3>Personal Information</h3>

        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>LinkedIn:</strong> {formData.linkedin}</p>
      </div>

      {/* Job Details */}

      <div className="review-section">
        <h3>Job Details</h3>

        <p><strong>Company:</strong> {formData.company}</p>
        <p><strong>Role:</strong> {formData.role}</p>
        <p><strong>Hiring Manager:</strong> {formData.hiringManager}</p>
        <p><strong>Company Location:</strong> {formData.companyLocation}</p>

        <p>
          <strong>Job Description:</strong><br />
          {formData.jobDescription}
        </p>
      </div>

      {/* Education */}

      <div className="review-section">
        <h3>Education</h3>

        <p><strong>Degree:</strong> {formData.degree}</p>
        <p><strong>College:</strong> {formData.college}</p>
        <p><strong>University:</strong> {formData.university}</p>
        <p><strong>Passing Year:</strong> {formData.passingYear}</p>
        <p><strong>CGPA / Percentage:</strong> {formData.cgpa}</p>
      </div>

      {/* Skills */}

      <div className="review-section">
        <h3>Skills</h3>

        <p>
          <strong>Technical Skills:</strong><br />
          {formData.technicalSkills}
        </p>

        <p>
          <strong>Soft Skills:</strong><br />
          {formData.softSkills}
        </p>

        <p><strong>Tone:</strong> {formData.tone}</p>
      </div>

      {/* Experience */}

      <div className="review-section">
        <h3>Experience</h3>

        <p><strong>Experience:</strong> {formData.experience}</p>

        <p>
          <strong>Internship:</strong><br />
          {formData.internship}
        </p>

        <p>
          <strong>Work Experience:</strong><br />
          {formData.workExperience}
        </p>

        <p>
          <strong>Achievements:</strong><br />
          {formData.achievements}
        </p>

        <p>
          <strong>Certifications:</strong><br />
          {formData.certifications}
        </p>
      </div>

      {/* Projects */}

      <div className="review-section">
        <h3>Projects</h3>

        <p><strong>Project Title:</strong> {formData.projectTitle}</p>

        <p>
          <strong>Description:</strong><br />
          {formData.projectDescription}
        </p>

        <p><strong>Technologies:</strong> {formData.technologies}</p>
        <p><strong>GitHub:</strong> {formData.github}</p>
        <p><strong>Live Demo:</strong> {formData.liveDemo}</p>
      </div>

    </div>
  );
};

export default Review;