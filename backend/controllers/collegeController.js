const {
  generateCollegeRecommendation,
} = require("../services/collegeService");

const getCollegeRecommendation = async (req, res) => {
  try {
    const { career, state, collegeType } = req.body;

    if (!career || !state) {
      return res.status(400).json({
        message: "Career and State are required.",
      });
    }

    const result = await generateCollegeRecommendation(
      career,
      state,
      collegeType
    );

    res.json({
      success: true,
      result,
    });

  } catch (error) {
    console.error("College Recommendation Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate recommendation.",
    });
  }
};

module.exports = {
  getCollegeRecommendation,
};