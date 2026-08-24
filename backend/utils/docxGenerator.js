const {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  TextRun,
} = require("docx");

const fs = require("fs");
const path = require("path");

const generateDOCX = async (coverLetter, fileName) => {
  try {
    const uploadsDir = path.join(__dirname, "../uploads");

    // uploads folder तयार करा
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, fileName);

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              heading: HeadingLevel.TITLE,
              children: [
                new TextRun({
                  text: "Cover Letter",
                  bold: true,
                  size: 32,
                }),
              ],
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: coverLetter,
                  size: 24,
                }),
              ],
            }),
          ],
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);

    fs.writeFileSync(filePath, buffer);

    return filePath;
  } catch (error) {
    throw error;
  }
};

module.exports = generateDOCX;