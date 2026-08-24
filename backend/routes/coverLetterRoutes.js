const express = require("express");

const router = express.Router();

const {
  createCoverLetter,
  getAllCoverLetters,
  getCoverLetterById,
  deleteCoverLetter,
  downloadPDF,
  downloadDOCX,
} = require("../controllers/coverLetterController");

// Generate Cover Letter
router.post("/generate", createCoverLetter);

// Get All Cover Letters
router.get("/", getAllCoverLetters);

// Get Single Cover Letter
router.get("/:id", getCoverLetterById);

// Delete Cover Letter
router.delete("/:id", deleteCoverLetter);

// Download PDF
router.get("/download/pdf/:id", downloadPDF);

// Download DOCX
router.get("/download/docx/:id", downloadDOCX);

module.exports = router;