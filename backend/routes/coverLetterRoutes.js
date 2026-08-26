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


// =====================================================
// GENERATE COVER LETTER
// =====================================================

router.post(
  "/generate",
  createCoverLetter
);


// =====================================================
// GET ALL COVER LETTERS
// =====================================================

router.get(
  "/",
  getAllCoverLetters
);


// =====================================================
// DOWNLOAD PDF
// IMPORTANT: Keep these BEFORE /:id
// =====================================================

router.get(
  "/download/pdf/:id",
  downloadPDF
);


// =====================================================
// DOWNLOAD DOCX
// =====================================================

router.get(
  "/download/docx/:id",
  downloadDOCX
);


// =====================================================
// GET SINGLE COVER LETTER
// =====================================================

router.get(
  "/:id",
  getCoverLetterById
);


// =====================================================
// DELETE COVER LETTER
// =====================================================

router.delete(
  "/:id",
  deleteCoverLetter
);


module.exports = router;