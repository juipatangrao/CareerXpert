// src/utils/recommendationEngine.js

import careerData from "../data/careerData";


const calculateRecommendations = (studentData, aptitude) => {


    let results = [];


    careerData.forEach((career)=>{


        let score = 0;

        let reasons = [];



        /* ===============================
              SUBJECT MATCHING
        =============================== */


        if(studentData.favoriteSubjects){

            studentData.favoriteSubjects.forEach((subject)=>{

                if(career.subjects.includes(subject)){

                    score += 10;

                    reasons.push(
                        `${subject} interest matches this career`
                    );

                }

            });

        }



        /* ===============================
              SKILLS MATCHING
        =============================== */


        if(studentData.skills){

            studentData.skills.forEach((skill)=>{


                if(career.skills.includes(skill)){


                    score += 12;


                    reasons.push(
                        `${skill} skill is suitable`
                    );


                }


            });


        }



        /* ===============================
              INTEREST MATCHING
        =============================== */


        if(studentData.interests){


            studentData.interests.forEach((interest)=>{


                if(career.interests.includes(interest)){


                    score += 15;


                    reasons.push(
                        `${interest} interest matches`
                    );


                }


            });


        }



        /* ===============================
              PERSONALITY MATCH
        =============================== */


        if(
            career.personality.includes(
                studentData.personality
            )
        ){

            score += 10;


            reasons.push(
                "Personality matches this career"
            );


        }




        /* ===============================
              APTITUDE CATEGORY MATCH
        =============================== */


        const categoryScores =
        aptitude.categoryScores;



        if(
            categoryScores &&
            categoryScores[career.aptitude]
        ){


            score += 
            categoryScores[career.aptitude] * 3;



            reasons.push(
                "Aptitude test result supports this career"
            );


        }



        /* ===============================
              MARKS BONUS
        =============================== */


        if(studentData.marks){


            let marks =
            Number(studentData.marks);



            if(marks >= 80){

                score += 10;

                reasons.push(
                    "Good academic performance"
                );

            }

            else if(marks >=60){

                score +=5;

            }


        }



        /* ===============================
              FINAL PERCENTAGE
        =============================== */


        let percentage =
        Math.min(
            Math.round(
                (score/80)*100
            ),
            99
        );



        results.push({

            id:career.id,

            name:career.name,

            category:career.category,

            route:career.route,

            percentage:percentage,


            reasons:
            reasons.length > 0
            ?
            reasons.slice(0,4)
            :
            [
              "Based on overall profile analysis"
            ]


        });



    });



    /* ===============================
          SORT TOP CAREERS
    =============================== */


    results.sort(
        (a,b)=>
        b.percentage-a.percentage
    );



    return results.slice(0,3);


};


export default calculateRecommendations;