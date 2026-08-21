const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateResponse = async (message, history = [], user = null) => {
  try {
    // Convert previous chats into text
    const previousConversation = history
      .map((chat) => {
        return `${chat.role === "user" ? "User" : "Assistant"}: ${chat.message}`;
      })
      .join("\n");
    const userProfile = user
      ? `
Student Profile

Name: ${user.name}
College: ${user.college}
Course: ${user.course}
Year: ${user.year}
Semester: ${user.semester}
Skills: ${user.skills.join(", ")}
Interests: ${user.interests.join(", ")}
Career Goal: ${user.careerGoal}
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

Suggest 3-4 follow-up questions.

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
    console.error(error);

    if (error.status === 429) {
      return "⚠️ CareerXpert AI is temporarily unavailable because the Gemini API quota has been exceeded. Please try again after a minute.";
    }

    return "⚠️ Something went wrong. Please try again later.";
  }
};

module.exports = generateResponse;
