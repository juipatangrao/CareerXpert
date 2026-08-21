const express = require("express");
const router = express.Router();

const {
  getCollegeRecommendation,
} = require("../controllers/collegeController");

router.post("/recommend", getCollegeRecommendation);

module.exports = router;