const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generatePDF = (coverLetter, fileName) => {
  return new Promise((resolve, reject) => {
    try {
      const uploadsDir = path.join(__dirname, "../uploads");

      // uploads folder नसेल तर तयार करा
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const filePath = path.join(uploadsDir, fileName);

      const doc = new PDFDocument({
        margin: 50,
        size: "A4",
      });

      const stream = fs.createWriteStream(filePath);

      doc.pipe(stream);

      doc.fontSize(20).text("Cover Letter", {
        align: "center",
      });

      doc.moveDown();

      doc.fontSize(12).text(coverLetter, {
        align: "left",
      });

      doc.end();

      stream.on("finish", () => {
        resolve(filePath);
      });

      stream.on("error", (err) => {
        reject(err);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = generatePDF;