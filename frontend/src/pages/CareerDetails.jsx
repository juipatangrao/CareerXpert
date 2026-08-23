import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CareerTemplate from "../component/CareerTemplate";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const CareerDetails = () => {
  const location = useLocation();

  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
   * =====================================================
   * GET CURRENT CAREER PATH
   * =====================================================
   *
   * Example:
   *
   * /engineering/computer
   *        ↓
   * /engineering
   *
   * /it/frontend
   *        ↓
   * /it
   *
   * /government/ias
   *        ↓
   * /government
   *
   * /doctor/Cardiologist
   *        ↓
   * /doctor
   */

  const pathParts = location.pathname
    .split("/")
    .filter(Boolean);

  /*
   * =====================================================
   * CATEGORY MAP
   * =====================================================
   */

  const categoryMap = {
    engineering: "/engineering",
    it: "/it",
    "banking-finance": "/banking-and-finance",
    "banking-and-finance": "/banking-and-finance",
    law: "/law",
    aviation: "/aviation",
    "hotel-management": "/hotel-management",
    "merchant-navy": "/merchant-navy",
    "science-research": "/science-research",
    "media-and-journalism": "/media-and-journalism",
    "space-astronomy": "/space-astronomy",
    environmental: "/environmental",
    design: "/design",
    doctor: "/doctor",
    government: "/government",

    /*
     * Old Government routes
     */
    ias: "/government",
    ips: "/government",
    police: "/government",
    army: "/government",
    "income-tax": "/government",
    railway: "/government",
    forest: "/government",
    food: "/government",
    talathi: "/government",

    /*
     * Old Doctor routes
     */
    cardiologist: "/doctor",
    neurologist: "/doctor",
    mbbs: "/doctor",
    gynecologist: "/doctor",
    dermatologist: "/doctor",
    psychiatrist: "/doctor",
    dentist: "/doctor",
    urologist: "/doctor",
    radiologist: "/doctor",
  };

  let parentCareerPath = "/home";

  if (pathParts.length > 1) {

    const firstPart = pathParts[0].toLowerCase();

    parentCareerPath =
      categoryMap[firstPart] || `/${pathParts[0]}`;

  } else if (pathParts.length === 1) {

    const currentPath = pathParts[0].toLowerCase();

    parentCareerPath =
      categoryMap[currentPath] || "/home";

  }


  /*
   * =====================================================
   * FETCH CAREER
   * =====================================================
   */

  useEffect(() => {

    let isMounted = true;

    const fetchCareer = async () => {

      setLoading(true);
      setError("");

      try {

        const response = await axios.get(
          `${API_BASE_URL}/careers/by-route`,
          {
            params: {
              path: location.pathname,
            },
          }
        );

        if (isMounted) {

          setCareer(response.data);

        }

      } catch (err) {

        if (isMounted) {

          setCareer(null);

          setError(
            err.response?.data?.message ||
              "Unable to load this career right now."
          );

        }

      } finally {

        if (isMounted) {

          setLoading(false);

        }

      }

    };

    fetchCareer();

    return () => {

      isMounted = false;

    };

  }, [location.pathname]);


  /*
   * =====================================================
   * LOADING
   * =====================================================
   */

  if (loading) {

    return (

      <div className="career-template-page">

        <div className="career-template-content">

          <div className="career-template-tab-content">

            <h2>
              Loading Career...
            </h2>

          </div>

        </div>

      </div>

    );

  }


  /*
   * =====================================================
   * ERROR
   * =====================================================
   */

  if (error || !career) {

    return (

      <div className="career-template-page">

        <div className="career-template-content">

          <div className="career-template-tab-content">

            <h2>
              Career Not Found
            </h2>

            <p className="career-template-about-text">

              {error ||
                "The requested career could not be found."}

            </p>

          </div>

        </div>

      </div>

    );

  }


  /*
   * =====================================================
   * CAREER DETAILS
   * =====================================================
   */

  return (

    <CareerTemplate

      title={
        career.title ||
        career.name
      }

      subtitle={
        career.subtitle
      }

      logo={
        career.logo
      }

      banner={
        career.banner
      }

      overview={
        career.overview
      }

      education={
        career.education
      }

      skills={
        career.skills || []
      }

      exams={
        career.exams || []
      }

      scope={
        career.scope
      }

      salary={
        career.salary
      }

      dayToDayWork={
        career.dayToDayWork || []
      }

      careerTest={
        career.careerTest || []
      }

      roadmap={
        career.roadmap || []
      }

      realityCheck={
        career.realityCheck || {}
      }

      parentCareerPath={
        parentCareerPath
      }

    />

  );

};

export default CareerDetails;