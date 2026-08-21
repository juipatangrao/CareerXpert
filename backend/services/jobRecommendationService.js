/**
 * Rule-based Job Recommendation Engine
 * ------------------------------------
 * No external AI/LLM calls. Recommendations are computed locally by scoring
 * every career in careerData.js against the user's profile (skills,
 * interests, course, career goal) and ranking the best matches.
 */

const careerData = require("../data/careerData");

const normalize = (str) => String(str || "").trim().toLowerCase();

const overlaps = (a, b) => normalize(a) === normalize(b);

const scoreCareer = (user, career) => {
  const userSkills = user.skills || [];
  const userInterests = user.interests || [];
  const userCourse = normalize(user.course);
  const userGoal = normalize(user.careerGoal);

  const careerSkills = career.skills || [];
  const careerInterests = career.interests || [];
  const careerSubjects = career.subjects || [];

  const matchedSkills = careerSkills.filter((skill) =>
    userSkills.some((us) => overlaps(us, skill))
  );
  const missingSkills = careerSkills.filter(
    (skill) => !matchedSkills.includes(skill)
  );
  const matchedInterests = careerInterests.filter((interest) =>
    userInterests.some((ui) => overlaps(ui, interest))
  );

  const skillRatio = careerSkills.length
    ? matchedSkills.length / careerSkills.length
    : 0;
  const interestRatio = careerInterests.length
    ? matchedInterests.length / careerInterests.length
    : 0;

  let rawScore = skillRatio * 60 + interestRatio * 40;

  const subjectHit = careerSubjects.some(
    (subject) =>
      userCourse &&
      (normalize(subject).includes(userCourse) ||
        userCourse.includes(normalize(subject)))
  );
  if (subjectHit) rawScore += 10;

  const goalHit =
    userGoal &&
    (userGoal.includes(normalize(career.name)) ||
      normalize(career.name).includes(userGoal) ||
      userGoal.includes(normalize(career.category)));
  if (goalHit) rawScore += 15;

  const matchPercentage = Math.max(5, Math.min(97, Math.round(rawScore)));

  return {
    career,
    matchPercentage,
    rankScore: rawScore,
    matchedSkills,
    missingSkills,
    matchedInterests,
  };
};

const buildRoadmap = (result) => {
  const { career, missingSkills } = result;
  const steps = [];

  if (missingSkills.length > 0) {
    steps.push(
      `Learn the missing skills: <strong>${missingSkills.join(
        ", "
      )}</strong> (start with free resources like YouTube, official docs, or a short online course).`
    );
  } else {
    steps.push(
      "You already have the core skills for this role — focus on deepening them with real projects."
    );
  }

  if (career.skills && career.skills.length > 0) {
    const practiceSkills = career.skills.slice(0, 2).join(" and ");
    steps.push(
      `Build 1–2 small projects using <strong>${practiceSkills}</strong> to showcase on your resume/portfolio.`
    );
  }

  if (career.subjects && career.subjects.length > 0) {
    steps.push(
      `Strengthen your fundamentals in: <strong>${career.subjects.join(
        ", "
      )}</strong>.`
    );
  }

  if (career.workEnvironment) {
    steps.push(
      `Look for internships or entry-level roles in: <strong>${career.workEnvironment}</strong>.`
    );
  }

  return steps;
};

const renderJobCard = (result, rank) => {
  const { career, matchPercentage, matchedSkills, missingSkills } = result;

  const skillsListHtml = (career.skills || [])
    .map((skill) => {
      const has = matchedSkills.includes(skill);
      return `<li>${has ? "✅" : "▫️"} ${skill}</li>`;
    })
    .join("");

  const missingHtml =
    missingSkills.length > 0
      ? `<ul>${missingSkills.map((s) => `<li>${s}</li>`).join("")}</ul>`
      : `<p>🎉 You already have all the key skills listed for this role!</p>`;

  const roadmapHtml = `<ul>${buildRoadmap(result)
    .map((step) => `<li>${step}</li>`)
    .join("")}</ul>`;

  return `
    <div class="job-recommendation-card">
      <h3>${rank}. ${career.name} — <span class="match-badge">${matchPercentage}% Match</span></h3>
      <table>
        <tr><td><strong>Category</strong></td><td>${career.category || "-"}</td></tr>
        <tr><td><strong>Average Salary (India)</strong></td><td>${career.salary || "-"}</td></tr>
        <tr><td><strong>Future Scope</strong></td><td>${career.futureScope || "-"} (Demand: ${career.demand || "-"})</td></tr>
        <tr><td><strong>Typical Education</strong></td><td>${career.education || "-"}</td></tr>
        <tr><td><strong>Work Environment</strong></td><td>${career.workEnvironment || "-"}</td></tr>
      </table>

      <p><strong>Required Skills:</strong></p>
      <ul>${skillsListHtml}</ul>

      <p><strong>Skills You're Missing:</strong></p>
      ${missingHtml}

      <p><strong>Suggested Learning Roadmap:</strong></p>
      ${roadmapHtml}
    </div>
  `;
};

const generateJobRecommendation = async (user) => {
  try {
    if (!careerData || careerData.length === 0) {
      return "<h2>⚠ No career data available to generate recommendations.</h2>";
    }

    const scored = careerData
      .map((career) => scoreCareer(user, career))
      .sort((a, b) => b.rankScore - a.rankScore);

    const top5 = scored.slice(0, 5);

    const cardsHtml = top5
      .map((result, index) => renderJobCard(result, index + 1))
      .join("");

    return `
      <h2>🎯 Top Career Matches for ${user.name || "You"}</h2>
      <p>Based on your course, skills and interests, here are your best-fit career options, ranked by match score.</p>
      ${cardsHtml}
    `;
  } catch (error) {
    console.error(error);
    return "<h2>⚠ Something went wrong while generating recommendations.</h2>";
  }
};

module.exports = generateJobRecommendation;