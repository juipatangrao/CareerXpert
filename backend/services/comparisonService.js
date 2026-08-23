const Career = require("../models/Career");


/* =========================================================
   CAREER ALIASES
   ========================================================= */

const careerAliases = {

  "aerospace engineer":
    "Aerospace Engineer",

  "aerospace engineering":
    "Aerospace Engineer",

  "automobile engineer":
    "Automobile Engineer",

  "automobile engineering":
    "Automobile Engineer",

};


/* =========================================================
   NORMALIZE CAREER NAME
   ========================================================= */

function normalizeCareerName(name) {

  if (!name) {
    return "";
  }

  const cleanedName =
    name
      .trim()
      .replace(/\s+/g, " ");

  return (
    careerAliases[
      cleanedName.toLowerCase()
    ] ||
    cleanedName
  );
}


/* =========================================================
   FIND CAREER
   ========================================================= */

async function findCareer(name) {

  const normalizedName =
    normalizeCareerName(name);


  if (!normalizedName) {
    return null;
  }


  /*
    First try exact title/name match.
  */

  let career =
    await Career.findOne({

      $or: [

        {
          title: {
            $regex:
              `^${escapeRegex(normalizedName)}$`,
            $options: "i",
          },
        },

        {
          name: {
            $regex:
              `^${escapeRegex(normalizedName)}$`,
            $options: "i",
          },
        },

      ],

    }).lean();


  /*
    If the canonical name doesn't exist,
    try the original name.
  */

  if (!career) {

    career =
      await Career.findOne({

        $or: [

          {
            title: {
              $regex:
                `^${escapeRegex(name)}$`,
              $options: "i",
            },
          },

          {
            name: {
              $regex:
                `^${escapeRegex(name)}$`,
              $options: "i",
            },
          },

        ],

      }).lean();

  }


  return career;
}


/* =========================================================
   ESCAPE REGEX
   ========================================================= */

function escapeRegex(value) {

  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

}


/* =========================================================
   CALCULATE CAREER SCORE
   ========================================================= */

function calculateCareerScore(career) {

  let score = 0;

  /*
    Base score
  */

  if (career.overview) {
    score += 10;
  }

  if (career.education) {
    score += 10;
  }

  if (
    career.skills &&
    career.skills.length > 0
  ) {
    score += 15;
  }

  if (
    career.eligibility &&
    career.eligibility.length > 0
  ) {
    score += 10;
  }

  if (
    career.exams &&
    career.exams.length > 0
  ) {
    score += 10;
  }

  if (
    career.subjects &&
    career.subjects.length > 0
  ) {
    score += 10;
  }

  if (
    career.interests &&
    career.interests.length > 0
  ) {
    score += 10;
  }

  if (
    career.personality &&
    career.personality.length > 0
  ) {
    score += 5;
  }

  if (career.salary) {
    score += 5;
  }

  if (career.scope) {
    score += 5;
  }


  return Math.min(
    score,
    100
  );
}


/* =========================================================
   PREPARE CAREER RESULT
   ========================================================= */

function prepareCareer(career) {

  const canonicalName =
    normalizeCareerName(
      career.title ||
      career.name
    );


  return {

    ...career,

    name: canonicalName,

    score:
      calculateCareerScore(
        career
      ),

  };
}


/* =========================================================
   COMPARISON
   ========================================================= */

async function comparisonService(
  career1Name,
  career2Name
) {

  try {

    /*
      Find both careers.
    */

    const [
      career1Data,
      career2Data,
    ] = await Promise.all([

      findCareer(
        career1Name
      ),

      findCareer(
        career2Name
      ),

    ]);


    /*
      Validate careers.
    */

    if (
      !career1Data ||
      !career2Data
    ) {

      return {

        found: false,

        message:
          "One or both selected careers were not found in the database.",

      };

    }


    /*
      Prepare data.
    */

    const career1 =
      prepareCareer(
        career1Data
      );

    const career2 =
      prepareCareer(
        career2Data
      );


    /*
      Recommendation
    */

    let preferredCareer =
      "Both";

    let reason =
      "Both careers have comparable profiles. Your choice should depend on your interests, skills and long-term career goals.";


    if (
      career1.score >
      career2.score
    ) {

      preferredCareer =
        career1.name;

      reason =
        `${career1.name} has a stronger overall career profile based on the available education, skills, eligibility, salary and scope information.`;

    } else if (
      career2.score >
      career1.score
    ) {

      preferredCareer =
        career2.name;

      reason =
        `${career2.name} has a stronger overall career profile based on the available education, skills, eligibility, salary and scope information.`;

    }


    /*
      Return comparison
    */

    return {

      found: true,

      career1,

      career2,

      recommendation: {

        preferredCareer,

        reason,

      },

    };

  } catch (error) {

    console.error(
      "Career comparison service error:",
      error
    );

    throw error;

  }

}


module.exports = comparisonService;