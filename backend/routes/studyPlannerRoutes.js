const express = require("express");
const router = express.Router();

const {
  generateStudyPlan,
  updateProgress,
} = require("../controllers/studyPlannerController");

router.post("/", generateStudyPlan);

router.put("/progress/:id", updateProgress);

module.exports = router;