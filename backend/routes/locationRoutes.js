const express = require("express");
const router = express.Router();
const locationData = require("../data/locationData");

// Get all states
router.get("/states", (req, res) => {
  res.json(Object.keys(locationData));
});

// Get cities for a state
router.get("/cities/:state", (req, res) => {
  const { state } = req.params;
  const cities = locationData[state] ? Object.keys(locationData[state]) : [];
  res.json(cities);
});

// Get areas for a city
router.get("/areas/:state/:city", (req, res) => {
  const { state, city } = req.params;
  const areas = locationData[state]?.[city] || [];
  res.json(areas);
});

module.exports = router;