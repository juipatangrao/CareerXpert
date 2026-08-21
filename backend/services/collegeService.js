const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateCollegeRecommendation(
  career,
  state,
  collegeType
) {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an expert Indian career counselor.

Generate ONLY valid HTML.

Do NOT use Markdown.
Do NOT use backticks.
Do NOT use JSON.
Do NOT include CSS.

Student Career:
${career}

Preferred State:
${state}

Preferred College Type:
${collegeType}

Generate a professional report with the following sections:

<h1>AI College Recommendation</h1>

<h2>Overview</h2>

<h2>Top Government Colleges</h2>

Create a table with:
College Name
Location
Approx Fees
NIRF Ranking
NAAC Grade
Average Package
Highest Package

<h2>Top Private Colleges</h2>

(Create same table)

<h2>Entrance Exams</h2>

<h2>Eligibility</h2>

<h2>Popular Courses</h2>

<h2>Placement Opportunities</h2>

<h2>Top Recruiters</h2>

<h2>Future Scope</h2>

<h2>AI Recommendation</h2>

Make the report detailed, professional, and suitable for Indian students.

Return ONLY HTML.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

module.exports = {
  generateCollegeRecommendation,
};