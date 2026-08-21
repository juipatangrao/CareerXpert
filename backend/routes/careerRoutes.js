const express = require("express");
const router = express.Router();

const {
  getAllCareers,
  getCareerByRoute,
  getCareerById,
  createCareer,
} = require("../controllers/careerController");

// Get all migrated careers
router.get("/", getAllCareers);

// Get one career by its legacy/frontend route
router.get("/by-route", getCareerByRoute);

// Legacy ID lookup
router.get("/:id", getCareerById);

// Create a new career
router.post("/", createCareer);

module.exports = router;
