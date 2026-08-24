const express = require("express");

const router = express.Router();

const {
  getCourseRecommendations,
  chatWithAI,
} = require("../controllers/aiController");


router.post(
  "/recommend-courses",
  getCourseRecommendations
);


router.post(
  "/chat",
  chatWithAI
);


module.exports = router;