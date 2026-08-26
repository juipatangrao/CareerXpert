
const CoverLetter = require("../models/CoverLetter");
const generateLetter = require("../utils/coverLetterGenerator");
const generatePDF = require("../utils/pdfGenerator");
const generateDOCX = require("../utils/docxGenerator");

// Generate Cover Letter
const createCoverLetter = async (req, res) => {
  try {
    const data = req.body;

    // Generate cover letter using JavaScript template
    // No AI is used here
const generatedLetter = await generateLetter(data);

    const coverLetter = await CoverLetter.create({
      ...data,
      generatedLetter,
    });

    res.status(201).json({
      success: true,
      message: "Cover Letter Generated Successfully",
      coverLetter: generatedLetter,
      data: coverLetter,
    });
  } catch (error) {
    console.error("❌ Cover Letter Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to Generate Cover Letter",
      error: error.message,
    });
  }
};

// Get All Cover Letters
const getAllCoverLetters = async (req, res) => {
  try {
    const letters = await CoverLetter.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: letters.length,
      data: letters,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Cover Letter
const getCoverLetterById = async (req, res) => {
  try {
    const letter = await CoverLetter.findById(req.params.id);

    if (!letter) {
      return res.status(404).json({
        success: false,
        message: "Cover Letter Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: letter,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Cover Letter
const deleteCoverLetter = async (req, res) => {
  try {
    const letter = await CoverLetter.findById(req.params.id);

    if (!letter) {
      return res.status(404).json({
        success: false,
        message: "Cover Letter Not Found",
      });
    }

    await CoverLetter.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Cover Letter Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Download PDF
const downloadPDF = async (req, res) => {
  try {
    const letter = await CoverLetter.findById(req.params.id);

    if (!letter) {
      return res.status(404).json({
        success: false,
        message: "Cover Letter Not Found",
      });
    }

    const fileName = `CoverLetter_${letter._id}.pdf`;

    const filePath = await generatePDF(
      letter.generatedLetter,
      fileName
    );

    res.download(filePath);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Download DOCX
const downloadDOCX = async (req, res) => {
  try {
    const letter = await CoverLetter.findById(req.params.id);

    if (!letter) {
      return res.status(404).json({
        success: false,
        message: "Cover Letter Not Found",
      });
    }

    const fileName = `CoverLetter_${letter._id}.docx`;

    const filePath = await generateDOCX(
      letter.generatedLetter,
      fileName
    );

    res.download(filePath);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCoverLetter,
  getAllCoverLetters,
  getCoverLetterById,
  deleteCoverLetter,
  downloadPDF,
  downloadDOCX,
};