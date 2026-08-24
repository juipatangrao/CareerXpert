const express = require("express");
const router = express.Router();

const {
  getCoachingRecommendation,
} = require("../controllers/coachingController");

router.post("/recommend", getCoachingRecommendation);

module.exports = router;