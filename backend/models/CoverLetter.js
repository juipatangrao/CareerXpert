const mongoose = require("mongoose");

const coverLetterSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
      trim: true,
    },

    linkedin: {
      type: String,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      trim: true,
    },

    hiringManager: {
      type: String,
      trim: true,
    },

    companyLocation: {
      type: String,
      trim: true,
    },

    jobDescription: {
      type: String,
    },

    degree: {
      type: String,
    },

    college: {
      type: String,
    },

    university: {
      type: String,
    },

    passingYear: {
      type: String,
    },

    cgpa: {
      type: String,
    },

    technicalSkills: {
      type: String,
    },

    softSkills: {
      type: String,
    },

    tone: {
      type: String,
      default: "Professional",
    },

    experience: {
      type: String,
      default: "Fresher",
    },

    internship: {
      type: String,
    },

    workExperience: {
      type: String,
    },

    achievements: {
      type: String,
    },

    certifications: {
      type: String,
    },

    projectTitle: {
      type: String,
    },

    projectDescription: {
      type: String,
    },

    technologies: {
      type: String,
    },

    github: {
      type: String,
    },

    liveDemo: {
      type: String,
    },

    generatedLetter: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CoverLetter", coverLetterSchema);