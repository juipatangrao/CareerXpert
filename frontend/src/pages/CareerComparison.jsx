import React, { useEffect, useState } from "react";
import "../style/CareerComparison.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* =========================================================
   LIST SECTION
   ========================================================= */

const ListSection = ({ title, items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="comparison-section">
      <h4>{title}</h4>

      <div className="comparison-tags">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};


/* =========================================================
   CAREER COLUMN
   ========================================================= */

const CareerColumn = ({ career, isWinner }) => {
  return (
    <div
      className={`career-column ${
        isWinner ? "winner" : ""
      }`}
    >

      {isWinner && (
        <div className="winner-badge">
          Better Match
        </div>
      )}

      <div className="career-column-header">
        <h3>{career.name}</h3>

        {career.category && (
          <span>{career.category}</span>
        )}
      </div>


      {/* SCORE */}

      <div className="career-score">
        <strong>
          {career.score ?? 0}%
        </strong>

        <span>
          Comparison Score
        </span>
      </div>


      {/* OVERVIEW */}

      {career.overview && (
        <div className="comparison-section">
          <h4>Overview</h4>

          <p>
            {career.overview}
          </p>
        </div>
      )}


      {/* EDUCATION */}

      {career.education && (
        <div className="comparison-section">
          <h4>Education</h4>

          <p>
            {career.education}
          </p>
        </div>
      )}


      {/* SALARY */}

      {career.salary && (
        <div className="comparison-section">
          <h4>Salary</h4>

          <p>
            {career.salary}
          </p>
        </div>
      )}


      {/* FUTURE SCOPE */}

      {career.scope && (
        <div className="comparison-section">
          <h4>Future Scope</h4>

          <p>
            {career.scope}
          </p>
        </div>
      )}


      {/* APTITUDE */}

      {career.aptitude && (
        <div className="comparison-section">
          <h4>Aptitude</h4>

          <p>
            {career.aptitude}
          </p>
        </div>
      )}


      {/* SKILLS */}

      <ListSection
        title="Skills"
        items={career.skills}
      />


      {/* ELIGIBILITY */}

      <ListSection
        title="Eligibility"
        items={career.eligibility}
      />


      {/* ENTRANCE EXAMS */}

      <ListSection
        title="Entrance Exams"
        items={career.exams}
      />


      {/* SUBJECTS */}

      <ListSection
        title="Subjects"
        items={career.subjects}
      />


      {/* INTERESTS */}

      <ListSection
        title="Interests"
        items={career.interests}
      />


      {/* PERSONALITY */}

      <ListSection
        title="Personality"
        items={career.personality}
      />


      {/* CAREER PATH */}

      <ListSection
        title="Career Path"
        items={career.careerPath}
      />


      {/* COMPANIES */}

      <ListSection
        title="Top Companies"
        items={career.companies}
      />


      {/* DAY TO DAY WORK */}

      <ListSection
        title="Day-to-Day Work"
        items={career.dayToDayWork}
      />

    </div>
  );
};


/* =========================================================
   CANONICAL CAREER NAMES
   ========================================================= */

/*
   These are the names that should appear in the dropdown.

   Multiple MongoDB names can point to one canonical name.
*/

const careerAliases = {

  "aerospace engineering":
    "Aerospace Engineer",

  "automobile engineering":
    "Automobile Engineer",

};


/* =========================================================
   GET CANONICAL CAREER NAME
   ========================================================= */

const getCanonicalCareerName = (career) => {

  const originalName = (
    career.title ||
    career.name ||
    ""
  ).trim();

  if (!originalName) {
    return "";
  }

  const lowerName =
    originalName.toLowerCase();

  return (
    careerAliases[lowerName] ||
    originalName
  );
};


/* =========================================================
   CAREER COMPARISON COMPONENT
   ========================================================= */

function CareerComparison() {

  const navigate = useNavigate();


  /* =======================================================
     STATE
     ======================================================= */

  const [careerList, setCareerList] =
    useState([]);

  const [career1, setCareer1] =
    useState("");

  const [career2, setCareer2] =
    useState("");

  const [loadingCareers, setLoadingCareers] =
    useState(true);

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);


  /* =======================================================
     FETCH CAREERS FROM MONGODB
     ======================================================= */

  useEffect(() => {

    const fetchCareers = async () => {

      try {

        setLoadingCareers(true);

        const res = await axios.get(
          "http://localhost:5000/api/careers"
        );

        console.log(
          "Careers loaded:",
          res.data
        );

        setCareerList(
          Array.isArray(res.data)
            ? res.data
            : []
        );

      } catch (error) {

        console.error(
          "Failed to load careers:",
          error
        );

        alert(
          "Failed to load careers from database."
        );

      } finally {

        setLoadingCareers(false);

      }
    };


    fetchCareers();

  }, []);


  /* =======================================================
     CREATE CLEAN UNIQUE CAREER LIST
     ======================================================= */

  const uniqueCareerList =
    Array.from(

      new Map(

        careerList
          .map((career) => {

            const displayName =
              getCanonicalCareerName(
                career
              );

            if (!displayName) {
              return null;
            }

            return [
              displayName.toLowerCase(),
              {
                ...career,
                displayName,
              },
            ];

          })
          .filter(Boolean)

      ).values()

    );


  /* =======================================================
     COMPARE CAREERS
     ======================================================= */

  const handleCompare = async () => {

    if (!career1 || !career2) {

      alert(
        "Please select both careers."
      );

      return;
    }


    if (career1 === career2) {

      alert(
        "Please select two different careers."
      );

      return;
    }


    try {

      setLoading(true);

      setResult(null);


      console.log(
        "Comparing:",
        {
          career1,
          career2,
        }
      );


      const res = await axios.post(

        "http://localhost:5000/api/career-comparison",

        {
          career1,
          career2,
        }

      );


      console.log(
        "Comparison response:",
        res.data
      );


      if (!res.data.success) {

        throw new Error(
          res.data.message ||
          "Comparison failed."
        );

      }


      setResult(
        res.data.comparison
      );


    } catch (error) {

      console.error(
        "Career comparison error:",
        error
      );


      alert(
        error.response?.data?.message ||
        error.message ||
        "Comparison failed."
      );


    } finally {

      setLoading(false);

    }
  };


  /* =======================================================
     RECOMMENDED CAREER
     ======================================================= */

  const preferredCareer =
    result?.recommendation?.preferredCareer;


  /* =======================================================
     UI
     ======================================================= */

  return (
    <>

      {/* BACK BUTTON */}

      <button
        className="back-btn"
        onClick={() =>
          navigate("/home")
        }
      >
        ← Back to Home
      </button>


      <div className="comparison-page">


        {/* =================================================
            MAIN CARD
            ================================================= */}

        <div className="comparison-card">


          {/* HEADER */}

          <div className="comparison-header">

            <span className="comparison-badge">
              CAREER EXPLORER
            </span>

            <h1>
              Career Comparison Dashboard
            </h1>

            <p>
              Compare two careers using
              education, skills, salary,
              scope and career information.
            </p>

          </div>


          {/* =================================================
              DROPDOWNS
              ================================================= */}

          <div className="dropdown-group">


            {/* CAREER 1 */}

            <div className="dropdown-box">

              <label>
                Career 1
              </label>

              <select
                value={career1}
                onChange={(e) =>
                  setCareer1(
                    e.target.value
                  )
                }
                disabled={
                  loadingCareers ||
                  loading
                }
              >

                <option value="">

                  {loadingCareers
                    ? "Loading careers..."
                    : "Select Career"}

                </option>


                {uniqueCareerList.map(
                  (career) => (

                    <option
                      key={
                        career._id ||
                        career.id ||
                        career.displayName
                      }
                      value={
                        career.displayName
                      }
                    >

                      {career.displayName}

                    </option>

                  )
                )}

              </select>

            </div>


            {/* VS */}

            <div className="vs-text">
              VS
            </div>


            {/* CAREER 2 */}

            <div className="dropdown-box">

              <label>
                Career 2
              </label>

              <select
                value={career2}
                onChange={(e) =>
                  setCareer2(
                    e.target.value
                  )
                }
                disabled={
                  loadingCareers ||
                  loading
                }
              >

                <option value="">

                  {loadingCareers
                    ? "Loading careers..."
                    : "Select Career"}

                </option>


                {uniqueCareerList.map(
                  (career) => (

                    <option
                      key={
                        career._id ||
                        career.id ||
                        career.displayName
                      }
                      value={
                        career.displayName
                      }
                    >

                      {career.displayName}

                    </option>

                  )
                )}

              </select>

            </div>

          </div>


          {/* =================================================
              COMPARE BUTTON
              ================================================= */}

          <button
            className="compare-btn"
            onClick={
              handleCompare
            }
            disabled={
              loading ||
              loadingCareers
            }
          >

            {loading
              ? "Comparing..."
              : "Compare Careers"}

          </button>

        </div>


        {/* =================================================
            LOADING
            ================================================= */}

        {loading && (

          <div className="comparison-loading">

            <div className="spinner"></div>

            <h3>
              Comparing career information
            </h3>

            <p>
              Fetching career data
              from the database...
            </p>

          </div>

        )}


        {/* =================================================
            RESULT
            ================================================= */}

        {result?.found && (

          <div className="comparison-result">


            {/* RESULT HEADER */}

            <div className="result-header">

              <span className="comparison-badge">
                COMPARISON RESULT
              </span>


              <h2>

                {result.career1.name}

                {" "}

                <span>
                  VS
                </span>

                {" "}

                {result.career2.name}

              </h2>


              {preferredCareer && (

                <div className="recommendation-box">

                  <h3>

                    Recommended:
                    {" "}
                    {preferredCareer}

                  </h3>

                  <p>

                    {
                      result
                        .recommendation
                        ?.reason
                    }

                  </p>

                </div>

              )}

            </div>


            {/* CAREER CARDS */}

            <div className="career-columns">

              <CareerColumn
                career={
                  result.career1
                }
                isWinner={
                  preferredCareer ===
                  result.career1.name
                }
              />


              <CareerColumn
                career={
                  result.career2
                }
                isWinner={
                  preferredCareer ===
                  result.career2.name
                }
              />

            </div>

          </div>

        )}

      </div>

    </>
  );
}


export default CareerComparison;