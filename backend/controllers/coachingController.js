const {
  generateCoachingRecommendation,
} = require("../services/coachingService");

const getCoachingRecommendation = async (req, res) => {
  try {
    const { exam, state, city, area, mode } = req.body;

    if (!exam || !state) {
      return res.status(400).json({
        message: "Course and State are required.",
      });
    }

    const result = await generateCoachingRecommendation(
      exam, state, city, area, mode
    );

    res.json({ success: true, result });

  } catch (error) {
    console.error("Coaching Recommendation Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate recommendation.",
    });
  }
};

module.exports = { getCoachingRecommendation };