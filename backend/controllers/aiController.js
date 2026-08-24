const {
  generateResponse,
  recommendCourses,
} = require("../services/geminiService");


// =====================================================
// AI COURSE RECOMMENDATIONS
// =====================================================

exports.getCourseRecommendations = async (req, res) => {
  try {
    const { career } = req.body;

    console.log("=================================");
    console.log("AI COURSE REQUEST");
    console.log("Career:", career);
    console.log("=================================");

    if (!career) {
      return res.status(400).json({
        success: false,
        message: "Career is required",
      });
    }

    const courses = await recommendCourses(career);

    console.log("AI COURSES GENERATED:");
    console.log(courses);

    // IMPORTANT:
    // Return the array directly because
    // CareerTemplate.jsx expects response.data
    res.status(200).json(courses);

  } catch (error) {
    console.error(
      "❌ AI Course Recommendation Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to generate AI course recommendations",
      error: error.message,
    });
  }
};


// =====================================================
// CAREERXPERT CHAT
// =====================================================

exports.chatWithAI = async (req, res) => {
  try {
    const {
      message,
      history,
      user,
    } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const reply = await generateResponse(
      message,
      history || [],
      user || null
    );

    res.status(200).json({
      success: true,
      reply,
    });

  } catch (error) {
    console.error(
      "❌ Chat AI Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to generate AI response",
    });
  }
};