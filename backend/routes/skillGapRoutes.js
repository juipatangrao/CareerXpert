const mongoose = require("mongoose");

const studyPlannerSchema = new mongoose.Schema(
  {
    education: String,
    goal: String,
    studyTime: String,
    startDate: String,
    endDate: String,
    subjects: [String],
    plan: Object,
    completedTasks: {
  type: [String],
  default: [],
},

progress: {
  type: Number,
  default: 0,
},

streak: {
  type: Number,
  default: 0,
},
userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
},
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("StudyPlanner", studyPlannerSchema);