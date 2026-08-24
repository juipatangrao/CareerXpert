const {
  generateCollegeRecommendation,
} = require("../services/collegeService");

const getCollegeRecommendation = async (req, res) => {
  try {
    const {
      career,
      state,
      collegeType,
    } = req.body;

    if (!career || !state) {
      return res.status(400).json({
        success: false,
        message:
          "Career and State are required.",
      });
    }

    const result =
      await generateCollegeRecommendation(
        career,
        state,
        collegeType || "Any"
      );

    return res.status(200).json({
      success: true,
      result,
    });

  } catch (error) {
    console.error(
      "College Recommendation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to generate college recommendations.",
    });
  }
};

module.exports = {
  getCollegeRecommendation,
};