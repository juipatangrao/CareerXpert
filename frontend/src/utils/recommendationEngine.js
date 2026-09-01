// // src/utils/recommendationEngine.js

// import careerData from "../data/careerData";

// /* =========================================================
//    CALCULATE CAREER RECOMMENDATIONS
// ========================================================= */

// const calculateRecommendations = (studentData = {}, aptitude = {}) => {
//   const results = [];

//   /* =====================================================
//        APTITUDE CATEGORY SCORES
//     ===================================================== */

//   const categoryScores = aptitude?.categoryScores || {};

//   /* =====================================================
//        CHECK EACH CAREER
//     ===================================================== */

//   careerData.forEach((career) => {
//     let score = 0;

//     const reasons = [];

//     /* =================================================
//            SAFE CAREER DATA
//         ================================================= */

//     const careerSubjects = career.subjects || [];

//     const careerSkills = career.skills || [];

//     const careerInterests = career.interests || [];

//     const careerPersonality = career.personality || [];

//     /* =================================================
//            SUBJECT MATCHING
//         ================================================= */

//     if (Array.isArray(studentData.favoriteSubjects)) {
//       studentData.favoriteSubjects.forEach((subject) => {
//         if (careerSubjects.includes(subject)) {
//           score += 10;

//           reasons.push(`${subject} interest matches this career`);
//         }
//       });
//     }

//     /* =================================================
//            SKILLS MATCHING
//         ================================================= */

//     if (Array.isArray(studentData.skills)) {
//       studentData.skills.forEach((skill) => {
//         if (careerSkills.includes(skill)) {
//           score += 12;

//           reasons.push(`${skill} skill is suitable`);
//         }
//       });
//     }

//     /* =================================================
//            INTEREST MATCHING
//         ================================================= */

//     if (Array.isArray(studentData.interests)) {
//       studentData.interests.forEach((interest) => {
//         if (careerInterests.includes(interest)) {
//           score += 15;

//           reasons.push(`${interest} interest matches`);
//         }
//       });
//     }

//     /* =================================================
//            PERSONALITY MATCHING
//         ================================================= */

//     if (
//       studentData.personality &&
//       careerPersonality.includes(studentData.personality)
//     ) {
//       score += 10;

//       reasons.push("Personality matches this career");
//     }

//     /* =================================================
//            APTITUDE CATEGORY MATCHING
//         ================================================= */

//     const aptitudeScore = categoryScores[career.aptitude];

//     if (aptitudeScore !== undefined && aptitudeScore !== null) {
//       score += Number(aptitudeScore) * 3;

//       reasons.push("Aptitude test result supports this career");
//     }

//     /* =================================================
//            ACADEMIC MARKS BONUS
//         ================================================= */

//     if (studentData.marks !== undefined && studentData.marks !== "") {
//       const marks = Number(studentData.marks);

//       if (!Number.isNaN(marks)) {
//         if (marks >= 80) {
//           score += 10;

//           reasons.push("Good academic performance");
//         } else if (marks >= 60) {
//           score += 5;
//         }
//       }
//     }

//     /* =================================================
//            FINAL PERCENTAGE
//         ================================================= */

//     const percentage = Math.min(Math.round((score / 80) * 100), 99);

//     /* =================================================
//            ADD RESULT
//         ================================================= */

//     results.push({
//       id: career.id,

//       name: career.name,

//       category: career.category,

//       route: career.route,

//       percentage,

//       reasons:
//         reasons.length > 0
//           ? reasons.slice(0, 4)
//           : ["Based on overall profile analysis"],
//     });
//   });

//   /* =====================================================
//        SORT BY HIGHEST MATCH
//     ===================================================== */

//   results.sort((a, b) => b.percentage - a.percentage);

//   /* =====================================================
//        RETURN TOP 3 CAREERS
//     ===================================================== */

//   return results.slice(0, 3);
// };

// export default calculateRecommendations;


// src/utils/recommendationEngine.js

import careerData from "../data/careerData";

/* =========================================================
   RULE-BASED CAREER RECOMMENDATION
   No AI / No API / No Backend
========================================================= */

const calculateRecommendations = (
  studentData = {},
  aptitude = {}
) => {

  const results = [];

  const categoryScores =
    aptitude?.categoryScores || {};

  /* =======================================================
     CHECK EACH CAREER
  ======================================================= */

  careerData.forEach((career) => {

    let score = 0;

    const reasons = [];

    const careerSubjects =
      career.subjects || [];

    const careerSkills =
      career.skills || [];

    const careerInterests =
      career.interests || [];

    const careerPersonality =
      career.personality || [];


    /* =====================================================
       1. SUBJECT MATCH
       Maximum: 20 points
    ===================================================== */

    let subjectMatches = 0;

    if (
      Array.isArray(
        studentData.favoriteSubjects
      )
    ) {

      studentData.favoriteSubjects.forEach(
        (subject) => {

          if (
            careerSubjects.includes(subject)
          ) {

            subjectMatches++;

          }

        }
      );

    }

    if (subjectMatches > 0) {

      const subjectScore =
        Math.min(
          subjectMatches * 5,
          20
        );

      score += subjectScore;

      reasons.push(
        `${subjectMatches} subject(s) match`
      );

    }


    /* =====================================================
       2. SKILL MATCH
       Maximum: 20 points
    ===================================================== */

    let skillMatches = 0;

    if (
      Array.isArray(
        studentData.skills
      )
    ) {

      studentData.skills.forEach(
        (skill) => {

          if (
            careerSkills.includes(skill)
          ) {

            skillMatches++;

          }

        }
      );

    }

    if (skillMatches > 0) {

      const skillScore =
        Math.min(
          skillMatches * 5,
          20
        );

      score += skillScore;

      reasons.push(
        `${skillMatches} skill(s) match`
      );

    }


    /* =====================================================
       3. INTEREST MATCH
       Maximum: 20 points
    ===================================================== */

    let interestMatches = 0;

    if (
      Array.isArray(
        studentData.interests
      )
    ) {

      studentData.interests.forEach(
        (interest) => {

          if (
            careerInterests.includes(
              interest
            )
          ) {

            interestMatches++;

          }

        }
      );

    }

    if (interestMatches > 0) {

      const interestScore =
        Math.min(
          interestMatches * 5,
          20
        );

      score += interestScore;

      reasons.push(
        `${interestMatches} interest(s) match`
      );

    }


    /* =====================================================
       4. PERSONALITY MATCH
       Maximum: 10 points
    ===================================================== */

    if (
      studentData.personality &&
      careerPersonality.includes(
        studentData.personality
      )
    ) {

      score += 10;

      reasons.push(
        "Personality matches"
      );

    }


    /* =====================================================
       5. APTITUDE MATCH
       Maximum: 20 points
    ===================================================== */

    const aptitudeScore =
      Number(
        categoryScores[
          career.aptitude
        ] || 0
      );

    if (aptitudeScore > 0) {

      /*
        Assuming aptitude category score
        is out of 10.

        Convert it to maximum 20 points.
      */

      const aptitudePoints =
        Math.min(
          aptitudeScore * 2,
          20
        );

      score += aptitudePoints;

      reasons.push(
        "Aptitude result supports this career"
      );

    }


    /* =====================================================
       6. ACADEMIC PERFORMANCE
       Maximum: 10 points
    ===================================================== */

    const marks =
      Number(
        studentData.marks || 0
      );

    if (marks >= 80) {

      score += 10;

      reasons.push(
        "Strong academic performance"
      );

    }

    else if (marks >= 60) {

      score += 7;

      reasons.push(
        "Good academic performance"
      );

    }

    else if (marks >= 40) {

      score += 4;

    }


    /* =====================================================
       7. FINAL PERCENTAGE
       
       Maximum possible score = 100
    ===================================================== */

    const percentage =
      Math.min(
        Math.round(score),
        100
      );


    /* =====================================================
       ADD RESULT
    ===================================================== */

    results.push({

      id: career.id,

      name: career.name,

      category: career.category,

      route: career.route,

      percentage,

      reasons:
        reasons.length > 0
          ? reasons.slice(0, 4)
          : [
              "Limited matching information available"
            ],

    });

  });


  /* =======================================================
     SORT HIGH → LOW
  ======================================================= */

  results.sort(
    (a, b) => {

      if (
        b.percentage !==
        a.percentage
      ) {

        return (
          b.percentage -
          a.percentage
        );

      }

      /*
        If two careers have the same
        percentage, keep the original
        career-data order instead of
        creating an artificial score.
      */

      return 0;

    }
  );


  /* =======================================================
     RETURN TOP 3
  ======================================================= */

  return results.slice(0, 3);

};


export default calculateRecommendations;