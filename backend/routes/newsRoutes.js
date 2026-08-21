const express = require("express");

const router = express.Router();

const { getCareerNews } = require("../controllers/newsController");

router.get("/", getCareerNews);

module.exports = router;