const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    id: Number,
    category: {
      type: String,
      required: true,
    },
    name: String,
    title: {
      type: String,
      required: true,
    },
    subtitle: String,
    route: String,
    logo: String,
    banner: String,
    image: String,
    shortDescription: String,
    overview: {
      type: String,
      required: true,
    },
    education: String,
    eligibility: [String],
    skills: [String],
    exams: [String],
    subjects: [String],
    interests: [String],
    personality: [String],
    aptitude: String,
    minScore: Number,
    salary: String,
    scope: String,
    dayToDayWork: [String],
    careerTest: [String],
    roadmap: [String],
    realityCheck: mongoose.Schema.Types.Mixed,
    companies: [String],
    careerPath: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Career", careerSchema);
