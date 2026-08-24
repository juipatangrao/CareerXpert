const Career = require("../models/Career");
const careerData = require("../data/career.json");

// Get all careers.
// The migrated OLD career.json is the source of truth for career content.
// MongoDB remains available for create operations and legacy integrations.
exports.getAllCareers = async (req, res) => {
  try {
    const careers = await Career.find({})
      .select("title category route")
      .sort({ title: 1 })
      .lean();

    res.status(200).json(careers);
  } catch (error) {
    console.error("Get careers error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to load careers.",
    });
  }
};

// Get one career by its legacy route.
// Also supports old mixed-case URLs and short legacy paths such as /Cardiologist.
exports.getCareerByRoute = async (req, res) => {
  try {
    const requestedPath = String(req.query.path || "").trim();

    if (!requestedPath) {
      return res.status(400).json({
        message: "Career route is required",
      });
    }

    const normalizedPath = requestedPath.toLowerCase().replace(/\/+$/, "");

    let career = careerData.find(
      (item) =>
        String(item.route || "").toLowerCase().replace(/\/+$/, "") ===
        normalizedPath
    );

    // Compatibility with old category-page links that used only the career title,
    // e.g. /Cardiologist.
    if (!career) {
      const requestedSlug = normalizedPath.split("/").filter(Boolean).pop();
      career = careerData.find((item) => {
        const titleSlug = String(item.title || item.name || "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
        const routeSlug = String(item.route || "")
          .toLowerCase()
          .split("/")
          .filter(Boolean)
          .pop();
        return requestedSlug === titleSlug || requestedSlug === routeSlug;
      });
    }

    if (!career) {
      return res.status(404).json({
        message: "Career not found",
      });
    }

    res.status(200).json(career);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Legacy lookup by MongoDB ID or migrated numeric ID.
exports.getCareerById = async (req, res) => {
  try {
    const numericId = Number(req.params.id);

    if (Number.isInteger(numericId)) {
      const career = careerData.find((item) => item.id === numericId);

      if (!career) {
        return res.status(404).json({
          message: "Career not found",
        });
      }

      return res.status(200).json(career);
    }

    const career = await Career.findById(req.params.id);

    if (!career) {
      return res.status(404).json({
        message: "Career not found",
      });
    }

    res.status(200).json(career);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create Career
exports.createCareer = async (req, res) => {
  try {
    const career = await Career.create(req.body);

    res.status(201).json(career);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
