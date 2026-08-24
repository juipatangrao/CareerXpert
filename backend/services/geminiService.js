const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});


// =====================================================
// 1. AI COVER LETTER GENERATOR
// =====================================================

const generateLetter = async (data) => {
  try {
    const prompt = `
Generate a professional and personalized job cover letter.

Candidate Details:

Name: ${data.fullName || ""}
Email: ${data.email || ""}
Phone: ${data.phone || ""}
City: ${data.city || ""}
LinkedIn: ${data.linkedIn || ""}

Job Details:

Company: ${data.company || ""}
Job Role: ${data.jobRole || ""}
Hiring Manager: ${data.hiringManager || ""}
Job Description: ${data.jobDescription || ""}

Education:

Degree: ${data.degree || ""}
College: ${data.college || ""}
Graduation Year: ${data.graduationYear || ""}
CGPA: ${data.cgpa || ""}

Skills:

Technical Skills: ${data.skills || ""}
Soft Skills: ${data.softSkills || ""}
Certifications: ${data.certifications || ""}
Languages: ${data.languages || ""}

Experience:

Experience: ${data.experience || ""}
Projects: ${data.projects || ""}
Achievements: ${data.achievements || ""}
Extra Activities: ${data.extraActivities || ""}

Instructions:

Create a professional, personalized and well-structured cover letter.

Include:

- Professional greeting
- Strong introduction
- Relevant skills and experience
- Relevant projects and achievements
- Why the candidate is suitable for the role
- Why the candidate is interested in the company
- Professional closing statement
- Professional ending

Do not invent any qualifications, experience, skills or achievements that were not provided.

Keep the letter concise, professional and suitable for a real job application.

Do not add unnecessary headings.

Return only the final cover letter.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.7,
        maxOutputTokens: 1500,
      },
    });

    return response.text;

  } catch (error) {

    console.error(
      "Gemini Cover Letter Error:",
      error
    );

    throw new Error(
      "Failed to generate AI Cover Letter"
    );
  }
};


// =====================================================
// 2. CAREERXPERT AI CHATBOT
// =====================================================

const generateResponse = async (
  message,
  history = [],
  user = null
) => {

  try {

    // Convert previous chats into text

    const previousConversation = history
      .map((chat) => {

        return `${
          chat.role === "user"
            ? "User"
            : "Assistant"
        }: ${chat.message}`;

      })
      .join("\n");


    // Student profile

    const userProfile = user
      ? `
Student Profile

Name: ${user.name || ""}
College: ${user.college || ""}
Course: ${user.course || ""}
Year: ${user.year || ""}
Semester: ${user.semester || ""}

Skills: ${
        Array.isArray(user.skills)
          ? user.skills.join(", ")
          : user.skills || ""
      }

Interests: ${
        Array.isArray(user.interests)
          ? user.interests.join(", ")
          : user.interests || ""
      }

Career Goal: ${user.careerGoal || ""}
`
      : "";


    const prompt = `
You are CareerXpert AI, the official AI assistant of the CareerXpert platform.

Your goal is to help students, professionals, and learners with career guidance and general knowledge.

=========================
RESPONSE RULES
=========================

1. If the user says:
- Hello
- Hi
- Hey
- Good Morning
- Good Evening

Reply in only 2-4 lines.
Be warm and friendly.
Do NOT mention the student's profile unless the greeting is followed by a career question.

2. If the user says:
- Thank You
- Thanks

Reply politely in 2-3 lines only.

3. If the user says:
- Bye
- Goodbye
- See you

Reply shortly, wish them good luck, and end the conversation politely.

4. Do NOT repeat the student's profile in every answer.

Only use their:
- Course
- Skills
- Interests
- Career Goal

when it genuinely helps answer the question.

5. If the question is career-related:

Always explain step by step.

Use headings.

Use bullet points.

When appropriate include:

• Introduction
• Eligibility
• Required Skills
• Roadmap
• Courses
• Certifications
• Projects
• Internship Tips
• Salary
• Future Scope
• Final Advice

6. If the user asks coding questions:

- Explain the concept first.
- Then explain the code.
- Give an example.

7. If the user asks general knowledge questions:

Answer normally like ChatGPT.

8. Never invent facts.

If you don't know something, clearly say you're not sure.

9. Be friendly.

10. Never sound robotic.

11. Use Markdown formatting.

12. End career-related answers with:

## Recommended Next Questions

Suggest 3-4 relevant follow-up questions.

13. When relevant, recommend CareerXpert features:

- Career Roadmap
- Career Comparison
- Skill Gap Analysis
- Interest-Based Career Test

Only recommend features related to the user's question.

=========================
STUDENT PROFILE
=========================

${userProfile}

=========================
PREVIOUS CONVERSATION
=========================

${previousConversation}

=========================
CURRENT USER QUESTION
=========================

${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.6,
        maxOutputTokens: 1200,
      },
    });

    return response.text;

  } catch (error) {

    console.error(
      "Gemini Chatbot Error:",
      error
    );

    if (error.status === 429) {

      return "⚠️ CareerXpert AI is temporarily unavailable because the Gemini API quota has been exceeded. Please try again after a minute.";

    }

    return "⚠️ Something went wrong. Please try again later.";
  }
};


// =====================================================
// 3. AI COURSE RECOMMENDATION
// =====================================================

const recommendCourses = async (career) => {
  try {

    console.log(
      "🤖 Gemini Course Generation Started"
    );

    console.log(
      "Career:",
      career
    );


    const prompt = `
You are CareerXpert AI.

The student wants to become:

${career}

Recommend exactly 6 useful and relevant learning courses for this career.

For each course provide:

- name
- level
- duration
- description

The level must be one of:

Beginner
Intermediate
Advanced

Return ONLY a JSON array.

Example:

[
  {
    "name": "Course Name",
    "level": "Beginner",
    "duration": "2 Months",
    "description": "Short course description"
  }
]

Do NOT include markdown.
Do NOT include \`\`\`.
Do NOT include explanations outside JSON.

Make the courses practical and relevant to the career.
`;


    const response =
      await ai.models.generateContent({

        model: "gemini-2.5-flash",

        contents: prompt,

        config: {
          temperature: 0.5,
          maxOutputTokens: 2000,
        },

      });


    let text = response.text;


    console.log(
      "Raw Gemini Response:"
    );

    console.log(text);


    if (!text) {
      throw new Error(
        "Gemini returned an empty response"
      );
    }


    text = text.trim();


    // Remove markdown code blocks

    text = text.replace(
      /```json/gi,
      ""
    );

    text = text.replace(
      /```/g,
      ""
    );

    text = text.trim();


    // Find JSON array if Gemini added extra text

    const start =
      text.indexOf("[");

    const end =
      text.lastIndexOf("]");


    if (
      start === -1 ||
      end === -1
    ) {

      console.error(
        "Invalid Gemini JSON:",
        text
      );

      throw new Error(
        "Gemini did not return valid course data"
      );
    }


    text =
      text.substring(
        start,
        end + 1
      );


    const courses =
      JSON.parse(text);


    if (!Array.isArray(courses)) {

      throw new Error(
        "Course response is not an array"
      );

    }


    console.log(
      "✅ Courses parsed successfully:",
      courses.length
    );


    return courses;

  } catch (error) {

    console.error(
      "❌ Gemini Course Generation Error:"
    );

    console.error(error);


    throw error;
  }
};

// =====================================================
// EXPORT ALL GEMINI FUNCTIONS
// =====================================================

module.exports = {

  generateLetter,

  generateResponse,

  recommendCourses,

};