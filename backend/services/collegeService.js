const College = require("../models/College");

const escapeRegex = (value) => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const calculateRecommendationScore = (
  college,
  selectedProgram,
  collegeType
) => {
  let score = 0;

  // --------------------------------
  // 1. Career / Program Match
  // --------------------------------
  const program = college.programs.find(
    (item) =>
      item.careerCategory?.toLowerCase() ===
      selectedProgram.toLowerCase()
  );

  if (!program) {
    return 0;
  }

  score += 30;

  // --------------------------------
  // 2. College Type
  // --------------------------------
  if (
    collegeType === "Any" ||
    college.type === collegeType
  ) {
    score += 10;
  }

  // --------------------------------
  // 3. College Rating
  // --------------------------------
  if (college.rating >= 4.5) {
    score += 10;
  } else if (college.rating >= 4.0) {
    score += 8;
  } else if (college.rating >= 3.5) {
    score += 5;
  }

  // --------------------------------
  // 4. Placement
  // --------------------------------
  const averagePackage =
    college.placement?.averagePackage;

  if (averagePackage) {
    if (averagePackage >= 1200000) {
      score += 10;
    } else if (averagePackage >= 800000) {
      score += 8;
    } else if (averagePackage >= 500000) {
      score += 5;
    }
  }

  // --------------------------------
  // 5. NAAC Accreditation
  // --------------------------------
  const naacGrade =
    college.accreditation?.naacGrade
      ?.toUpperCase();

  if (naacGrade === "A++") {
    score += 5;
  } else if (naacGrade === "A+") {
    score += 4;
  } else if (naacGrade === "A") {
    score += 3;
  }

  // --------------------------------
  // 6. Hostel
  // --------------------------------
  if (college.hostel) {
    score += 5;
  }

  // --------------------------------
  // 7. Scholarship
  // --------------------------------
  if (college.scholarshipAvailable) {
    score += 5;
  }

  // --------------------------------
  // 8. Verified Information
  // --------------------------------
  if (college.verified) {
    score += 5;
  }

  // --------------------------------
  // 9. NIRF Ranking
  // --------------------------------
  const nirfRank =
    college.accreditation?.nirf?.rank;

  if (nirfRank) {
    if (nirfRank <= 10) {
      score += 5;
    } else if (nirfRank <= 25) {
      score += 4;
    } else if (nirfRank <= 50) {
      score += 3;
    } else if (nirfRank <= 100) {
      score += 2;
    }
  }

  return Math.min(score, 100);
};


const generateCollegeRecommendation = async (
  career,
  state,
  collegeType
) => {
  try {
    const escapedCareer = escapeRegex(career);

    // --------------------------------
    // MongoDB Search
    // --------------------------------
    const query = {
      "location.state": state,

      careerCategories: {
        $regex: `^${escapedCareer}$`,
        $options: "i",
      },
    };

    // Government / Private / Any
    if (
      collegeType &&
      collegeType !== "Any"
    ) {
      query.type = collegeType;
    }

    const colleges = await College.find(query)
      .lean();

    // --------------------------------
    // Calculate recommendation score
    // --------------------------------
    const recommendations = colleges
      .map((college) => {
        const selectedProgram =
          college.programs.find(
            (program) =>
              program.careerCategory
                ?.toLowerCase() ===
              career.toLowerCase()
          );

        if (!selectedProgram) {
          return null;
        }

        const recommendationScore =
          calculateRecommendationScore(
            college,
            career,
            collegeType
          );

        return {
          ...college,
          selectedProgram,
          recommendationScore,
        };
      })
      .filter(Boolean)
      .filter(
        (college) =>
          college.recommendationScore > 0
      )
      .sort(
        (a, b) =>
          b.recommendationScore -
          a.recommendationScore
      );

    return {
      career,
      state,
      collegeType: collegeType || "Any",
      totalResults:
        recommendations.length,
      colleges: recommendations,
    };

  } catch (error) {
    console.error(
      "College Recommendation Service Error:",
      error
    );

    throw error;
  }
};

module.exports = {
  generateCollegeRecommendation,
};