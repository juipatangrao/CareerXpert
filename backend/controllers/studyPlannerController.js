const StudyPlanner = require("../models/StudyPlanner");

const generateStudyPlan = async (req, res) => {
  try {
    const {
      education,
      goal,
      studyTime,
      startDate,
      endDate,
      subjects,
    } = req.body;

    // Basic validation
    if (!education || !goal) {
      return res.status(400).json({
        success: false,
        message: "Education and career goal are required.",
      });
    }

    if (!subjects || subjects.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please add at least one subject.",
      });
    }

    if (!studyTime) {
      return res.status(400).json({
        success: false,
        message: "Daily study time is required.",
      });
    }

    // Convert "2 Hours", "3 Hours" etc. into number
    const studyHours = parseInt(studyTime) || 2;

    const subjectList = subjects.filter(
  (subject) => subject && subject.trim() !== ""
);

if (subjectList.length === 0) {
  return res.status(400).json({
    success: false,
    message: "Please add valid subjects.",
  });
}

    // Calculate time per subject
    const totalMinutes = studyHours * 60;
    const minutesPerSubject = Math.floor(
      totalMinutes / subjectList.length
    );

    // -------------------------
    // TODAY'S PLAN
    // -------------------------

    const todayPlan = subjectList.map((subject) => {
      return `${subject} - ${minutesPerSubject} minutes focused study`;
    });

    // -------------------------
    // WEEKLY PLAN
    // -------------------------

    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const weeklyPlan = days.map((day, index) => {
      const subject = subjectList[index % subjectList.length];

      if (day === "Sunday") {
        return `${day} - Weekly revision and self-test`;
      }

      return `${day} - ${subject} study and practice`;
    });

    // -------------------------
    // REVISION SCHEDULE
    // -------------------------

    const revisionSchedule = subjectList.map((subject, index) => {
      return `Revision ${index + 1} - Revise ${subject} and practice important questions`;
    });

    // -------------------------
    // REMINDERS
    // -------------------------

    const reminders = [
      `Complete ${studyHours} hours of study today.`,
      "Take a short break between study sessions.",
      "Revise today's topics before going to sleep.",
      "Keep your study materials ready before starting.",
    ];

    // -------------------------
    // STUDY RECOMMENDATIONS
    // -------------------------

    const studyRecommendations = [
      "Start your study session with the most difficult subject.",
      "Keep your phone and other distractions away while studying.",
      "Practice questions after completing each topic.",
      "Revise previous topics regularly.",
      "Take short breaks to maintain focus.",
    ];

    // -------------------------
    // DAILY MOTIVATION
    // -------------------------

    const motivation =
      "Stay consistent and keep making progress every day.";

    // Complete normal study plan
    const plan = {
      todayPlan,
      weeklyPlan,
      revisionSchedule,
      reminders,
      studyRecommendations,
      motivation,
    };

    // Save plan in MongoDB
    const planner = await StudyPlanner.create({
      education,
      goal,
      studyTime,
      startDate,
      endDate,
      subjects: subjectList,
      plan,
    });

    res.status(200).json({
      success: true,
      plan: planner.plan,
    });

  } catch (error) {
    console.log("Study Planner Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// -------------------------
// UPDATE PROGRESS
// -------------------------

const updateProgress = async (req, res) => {
  try {
    const { completedTasks, progress } = req.body;

    const planner = await StudyPlanner.findByIdAndUpdate(
      req.params.id,
      {
        completedTasks,
        progress,
      },
      { new: true }
    );

    res.json(planner);

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};


module.exports = {
  generateStudyPlan,
  updateProgress,
};