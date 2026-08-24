const analyzeSkillGap = async (req, res) => {
  try {
    const {
      career,
      education,
      experience,
      hours,
      skills = [],
    } = req.body;

    console.log("Skill Gap Data:", req.body);

    // -----------------------------
    // BASIC VALIDATION
    // -----------------------------

    if (!career || !education) {
      return res.status(400).json({
        success: false,
        message: "Career and education are required.",
      });
    }

    // -----------------------------
    // REQUIRED SKILLS FOR CAREERS
    // -----------------------------

    const requiredSkillsByCareer = {
      "Software Engineer": [
        "C",
        "C++",
        "Java",
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "SQL",
        "Git",
      ],

      "Frontend Developer": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "Git",
        "Responsive Design",
      ],

      "Backend Developer": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "REST API",
        "Git",
      ],

      "Full Stack Developer": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "REST API",
        "Git",
      ],

      "AI Engineer": [
        "Python",
        "SQL",
        "NumPy",
        "Pandas",
        "Statistics",
        "Machine Learning",
        "Deep Learning",
        "TensorFlow",
        "Git",
      ],

      "Data Scientist": [
        "Python",
        "SQL",
        "Pandas",
        "NumPy",
        "Statistics",
        "Machine Learning",
        "Data Visualization",
        "Excel",
        "Git",
      ],

      "Cyber Security Engineer": [
        "Networking",
        "Linux",
        "Python",
        "Cyber Security",
        "Ethical Hacking",
        "Cryptography",
        "Web Security",
        "Git",
      ],

      "UI/UX Designer": [
        "Figma",
        "Wireframing",
        "Prototyping",
        "UI Design",
        "UX Design",
        "Design Systems",
        "User Research",
      ],
    };

    const requiredSkills =
      requiredSkillsByCareer[career] || [];

    // -----------------------------
    // NORMALIZE SKILLS
    // -----------------------------

    const currentSkills = skills
      .filter(
        (skill) =>
          typeof skill === "string" &&
          skill.trim() !== ""
      )
      .map((skill) => skill.trim());

    const normalizedCurrentSkills =
      currentSkills.map((skill) =>
        skill.toLowerCase()
      );

    // -----------------------------
    // FIND MISSING SKILLS
    // -----------------------------

    const missingSkills = requiredSkills.filter(
      (requiredSkill) =>
        !normalizedCurrentSkills.includes(
          requiredSkill.toLowerCase()
        )
    );

    // -----------------------------
    // SKILL MATCH
    // -----------------------------

    let skillPercentage = 0;

    if (requiredSkills.length > 0) {
      const matchedSkills =
        requiredSkills.length -
        missingSkills.length;

      skillPercentage = Math.round(
        (matchedSkills / requiredSkills.length) * 100
      );
    }

    // -----------------------------
    // EXPERIENCE BONUS
    // -----------------------------

    let experienceBonus = 0;

    if (experience === "Intermediate") {
      experienceBonus = 5;
    }

    if (experience === "Advanced") {
      experienceBonus = 10;
    }

    // -----------------------------
    // EDUCATION SUPPORT
    // -----------------------------

    let educationScore = 0;

    switch (education) {
      case "Engineering Computer":
        educationScore = 10;
        break;

      case "Diploma Computer":
        educationScore = 7;
        break;

      case "12th Science":
        educationScore = 5;
        break;

      case "12th Commerce":
        educationScore = 3;
        break;

      case "12th Arts":
        educationScore = 3;
        break;

      case "10th":
        educationScore = 2;
        break;

      default:
        educationScore = 0;
    }

    // -----------------------------
    // FINAL MATCH
    // -----------------------------

    let matchPercentage =
      Math.round(
        skillPercentage * 0.75 +
        educationScore +
        experienceBonus
      );

    matchPercentage = Math.min(
      matchPercentage,
      100
    );

    // -----------------------------
    // RECOMMENDED NEXT STEPS
    // -----------------------------

    const recommendedNextSteps =
      missingSkills.slice(0, 5).map(
        (skill, index) =>
          `${index + 1}. Learn ${skill} and practice it through a small project.`
      );

    // -----------------------------
    // STUDY PLAN SUGGESTION
    // -----------------------------

    let studyRecommendation =
      "Focus on one missing skill at a time and practice through projects.";

    if (hours === "1 Hour") {
      studyRecommendation =
        "Focus on one skill for 1 hour daily with regular practice.";
    } else if (hours === "2 Hours") {
      studyRecommendation =
        "Spend 1 hour learning and 1 hour practicing your missing skills.";
    } else if (hours === "3 Hours") {
      studyRecommendation =
        "Use your time for learning, hands-on practice, and revision.";
    } else if (
      hours === "4 Hours" ||
      hours === "5+ Hours"
    ) {
      studyRecommendation =
        "Divide your study time between learning, projects, revision, and practice.";
    }

    // -----------------------------
    // RESPONSE
    // -----------------------------

    res.status(200).json({
      success: true,

      career,

      education,

      experience,

      studyHours: hours,

      currentSkills,

      requiredSkills,

      missingSkills,

      matchPercentage: `${matchPercentage}%`,

      recommendedNextSteps,

      studyRecommendation,
    });

  } catch (error) {
    console.error(
      "Skill Gap Analysis Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Skill Gap Analysis Failed",
    });
  }
};

module.exports = {
  analyzeSkillGap,
};