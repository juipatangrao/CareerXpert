const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateCoverLetter = async (data) => {
  try {
    const prompt = `
Write a professional and ATS-friendly cover letter.

Candidate Details:

Full Name: ${data.fullName || ""}
Email: ${data.email || ""}
Phone: ${data.phone || ""}
City: ${data.city || ""}
LinkedIn: ${data.linkedin || ""}

Company Name: ${data.company || ""}
Job Role: ${data.role || ""}
Hiring Manager: ${data.hiringManager || ""}
Company Location: ${data.companyLocation || ""}

Job Description:
${data.jobDescription || ""}

Education:
Degree: ${data.degree || ""}
College: ${data.college || ""}
University: ${data.university || ""}
Passing Year: ${data.passingYear || ""}
CGPA: ${data.cgpa || ""}

Technical Skills:
${data.technicalSkills || ""}

Soft Skills:
${data.softSkills || ""}

Experience Level:
${data.experience || ""}

Internship:
${data.internship || ""}

Work Experience:
${data.workExperience || ""}

Achievements:
${data.achievements || ""}

Certifications:
${data.certifications || ""}

Project Title:
${data.projectTitle || ""}

Project Description:
${data.projectDescription || ""}

Technologies Used:
${data.technologies || ""}

GitHub:
${data.github || ""}

Live Demo:
${data.liveDemo || ""}

Tone:
${data.tone || "Professional"}

Instructions:
- Write a professional cover letter.
- Make it ATS-friendly.
- Personalize it using the provided candidate and job details.
- Do not invent qualifications or experience.
- Use proper paragraphs.
- Return ONLY the cover letter.
`;

    console.log("🤖 Sending request to Gemini...");

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    const text = response.text;

    if (!text) {
      throw new Error("Gemini returned an empty response");
    }

    console.log("✅ Cover letter generated successfully");

    return text;
  } catch (error) {
    console.error("❌ GEMINI ERROR:");
    console.error("Message:", error.message);
    console.error("Full Error:", error);

    throw error;
  }
};

module.exports = generateCoverLetter;