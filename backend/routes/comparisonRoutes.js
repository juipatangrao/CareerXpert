const express = require("express");

const router = express.Router();

const {
  compareCareers,
} = require("../controllers/comparisonController");

router.post("/", compareCareers);

module.exports = router;