const User = require("../models/User");
const generateJobRecommendation = require("../services/jobRecommendationService");

exports.recommendJobs = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required.",
      });
    }

    // Find user profile
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    // Check if profile is completed
    if (
      !user.course ||
      user.skills.length === 0 ||
      user.interests.length === 0
    ) {
      return res.status(400).json({
        recommendation:
          "<h2>⚠ Please complete your profile (Course, Skills and Interests) before generating AI Job Recommendations.</h2>",
      });
    }

    // Generate AI Recommendation
    const recommendation = await generateJobRecommendation(user);

    res.status(200).json({
      success: true,
      recommendation,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      recommendation:
        "<h2>⚠ Something went wrong while generating recommendations.</h2>",
    });
  }
};