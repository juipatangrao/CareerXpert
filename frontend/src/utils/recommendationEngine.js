// src/utils/recommendationEngine.js

import careerData from "../data/careerData";


/* =========================================================
   CALCULATE CAREER RECOMMENDATIONS
========================================================= */

const calculateRecommendations = (
    studentData = {},
    aptitude = {}
) => {

    const results = [];


    /* =====================================================
       APTITUDE CATEGORY SCORES
    ===================================================== */

    const categoryScores =
        aptitude?.categoryScores || {};


    /* =====================================================
       CHECK EACH CAREER
    ===================================================== */

    careerData.forEach((career) => {

        let score = 0;

        const reasons = [];


        /* =================================================
           SAFE CAREER DATA
        ================================================= */

        const careerSubjects =
            career.subjects || [];

        const careerSkills =
            career.skills || [];

        const careerInterests =
            career.interests || [];

        const careerPersonality =
            career.personality || [];


        /* =================================================
           SUBJECT MATCHING
        ================================================= */

        if (
            Array.isArray(
                studentData.favoriteSubjects
            )
        ) {

            studentData.favoriteSubjects.forEach(
                (subject) => {

                    if (
                        careerSubjects.includes(
                            subject
                        )
                    ) {

                        score += 10;

                        reasons.push(
                            `${subject} interest matches this career`
                        );

                    }

                }
            );

        }


        /* =================================================
           SKILLS MATCHING
        ================================================= */

        if (
            Array.isArray(
                studentData.skills
            )
        ) {

            studentData.skills.forEach(
                (skill) => {

                    if (
                        careerSkills.includes(
                            skill
                        )
                    ) {

                        score += 12;

                        reasons.push(
                            `${skill} skill is suitable`
                        );

                    }

                }
            );

        }


        /* =================================================
           INTEREST MATCHING
        ================================================= */

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

                        score += 15;

                        reasons.push(
                            `${interest} interest matches`
                        );

                    }

                }
            );

        }


        /* =================================================
           PERSONALITY MATCHING
        ================================================= */

        if (
            studentData.personality &&
            careerPersonality.includes(
                studentData.personality
            )
        ) {

            score += 10;

            reasons.push(
                "Personality matches this career"
            );

        }


        /* =================================================
           APTITUDE CATEGORY MATCHING
        ================================================= */

        const aptitudeScore =
            categoryScores[
                career.aptitude
            ];


        if (
            aptitudeScore !== undefined &&
            aptitudeScore !== null
        ) {

            score +=
                Number(aptitudeScore) * 3;

            reasons.push(
                "Aptitude test result supports this career"
            );

        }


        /* =================================================
           ACADEMIC MARKS BONUS
        ================================================= */

        if (
            studentData.marks !== undefined &&
            studentData.marks !== ""
        ) {

            const marks =
                Number(
                    studentData.marks
                );


            if (!Number.isNaN(marks)) {

                if (marks >= 80) {

                    score += 10;

                    reasons.push(
                        "Good academic performance"
                    );

                }

                else if (marks >= 60) {

                    score += 5;

                }

            }

        }


        /* =================================================
           FINAL PERCENTAGE
        ================================================= */

        const percentage =
            Math.min(
                Math.round(
                    (score / 80) * 100
                ),
                99
            );


        /* =================================================
           ADD RESULT
        ================================================= */

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
                        "Based on overall profile analysis"
                    ]

        });

    });


    /* =====================================================
       SORT BY HIGHEST MATCH
    ===================================================== */

    results.sort(
        (a, b) =>
            b.percentage -
            a.percentage
    );


    /* =====================================================
       RETURN TOP 3 CAREERS
    ===================================================== */

    return results.slice(0, 3);

};


export default calculateRecommendations;