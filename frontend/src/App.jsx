import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

// =========================================================
// AUTH / MAIN COMPONENTS
// =========================================================
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import LandingPage from "./component/LandingPage";
import ProtectedRoute from "./component/ProtectedRoute";

// =========================================================
// CAREER PAGES
// =========================================================
import Government from "./component/Government";
import IT from "./component/IT";
import BankingANDFinance from "./component/BankingANDFinance";
import Law from "./component/Law";
import Aviation from "./component/Aviation";
import HotelManagement from "./component/HotelManagement";
import MerchantNavy from "./component/MerchantNavy";
import Engineering from "./component/Engineering";
import Doctor from "./component/Doctor";
import ScienceResearch from "./component/ScienceResearch";
import SpaceAstronomy from "./component/SpaceAstronomy";
import Environmental from "./component/Environmental";
import MediaJournalism from "./component/MediaJournalism";
import Design from "./component/Design";

// =========================================================
// CAREER FEATURES
// =========================================================
import CareerDetails from "./pages/CareerDetails";
import CareerRecommendation from "./pages/CareerRecommendation";
import AptitudeTest from "./pages/AptitudeTest";
import CareerResult from "./pages/CareerResult";
import CareerComparison from "./pages/CareerComparison";
import CollegeRecommendation from "./pages/CollegeRecommendation";
import AIJobRecommendation from "./pages/AIJobRecommendation";
import CoachingRecommendation from "./pages/CoachingRecommendation";

// =========================================================
// USER / OTHER FEATURES
// =========================================================
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";
import PortfolioGenerator from "./pages/PortfolioGenerator";

// =========================================================
// FRIEND'S FEATURES
// =========================================================
import SkillGapAnalysis from "./pages/SkillGapAnalysis";
import SkillGapResult from "./pages/SkillGapResult";
import StudyPlanner from "./pages/StudyPlanner";
import CareerRoadmap from "./pages/CareerRoadmap";
import CareerRoadmapResult from "./pages/CareerRoadmapResult";

// =========================================================
// COVER LETTER
// =========================================================
import CoverLetter from "./pages/CoverLetter";

// =========================================================
// CSS
// =========================================================
import "./App.css";

// =========================================================
// SCROLL TO TOP
// =========================================================
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// =========================================================
// APP
// =========================================================
function App() {
  return (
    <BrowserRouter>

      {/* Keep every new route at the top */}
      <ScrollToTop />

      <Routes>

        {/* =================================================
            AUTH / START
            ================================================= */}

<Route
  path="/"
  element={<LandingPage />}
/>

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/login"
          element={<Login />}
        />


        {/* =================================================
            PROTECTED HOME
            ================================================= */}

        <Route element={<ProtectedRoute />}>
          <Route
            path="/home"
            element={<Home />}
          />
        </Route>


        {/* =================================================
            MAIN CAREER CATEGORY PAGES
            ================================================= */}

        <Route
          path="/government"
          element={<Government />}
        />

        <Route
          path="/it"
          element={<IT />}
        />

        <Route
          path="/banking-and-finance"
          element={<BankingANDFinance />}
        />

        <Route
          path="/law"
          element={<Law />}
        />

        <Route
          path="/aviation"
          element={<Aviation />}
        />

        <Route
          path="/hotel-management"
          element={<HotelManagement />}
        />

        <Route
          path="/merchant-navy"
          element={<MerchantNavy />}
        />

        <Route
          path="/engineering"
          element={<Engineering />}
        />

        <Route
          path="/doctor"
          element={<Doctor />}
        />

        <Route
          path="/science-research"
          element={<ScienceResearch />}
        />

        <Route
          path="/media-and-journalism"
          element={<MediaJournalism />}
        />

        <Route
          path="/space-astronomy"
          element={<SpaceAstronomy />}
        />

        <Route
          path="/environmental"
          element={<Environmental />}
        />

        <Route
          path="/design"
          element={<Design />}
        />


        {/* =================================================
            CAREER DETAILS
            ================================================= */}

        <Route
          path="/engineering/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/it/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/banking-finance/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/banking-and-finance/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/law/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/aviation/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/hotel-management/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/merchant-navy/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/science-research/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/media-and-journalism/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/space-astronomy/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/environmental/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/design/:careerId"
          element={<CareerDetails />}
        />

        {/* Compatibility for old /Design/... URLs */}
        <Route
          path="/Design/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/doctor/:careerId"
          element={<CareerDetails />}
        />

        {/* Compatibility for old /Doctor/... URLs */}
        <Route
          path="/Doctor/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/government/:careerId"
          element={<CareerDetails />}
        />


        {/* =================================================
            OLD GOVERNMENT ROUTES
            ================================================= */}

        <Route
          path="/ias"
          element={<CareerDetails />}
        />

        <Route
          path="/ips"
          element={<CareerDetails />}
        />

        <Route
          path="/police"
          element={<CareerDetails />}
        />

        <Route
          path="/army"
          element={<CareerDetails />}
        />

        <Route
          path="/income-tax"
          element={<CareerDetails />}
        />

        <Route
          path="/railway"
          element={<CareerDetails />}
        />

        <Route
          path="/forest"
          element={<CareerDetails />}
        />

        <Route
          path="/food"
          element={<CareerDetails />}
        />

        <Route
          path="/talathi"
          element={<CareerDetails />}
        />


        {/* =================================================
            CAREER RECOMMENDATION
            ================================================= */}

        <Route
          path="/career-recommendation"
          element={<CareerRecommendation />}
        />


        {/* =================================================
            APTITUDE TEST
            ================================================= */}

        <Route
          path="/aptitude-test"
          element={<AptitudeTest />}
        />


        {/* =================================================
            CAREER RESULT
            ================================================= */}

        <Route
          path="/career-result"
          element={<CareerResult />}
        />


        {/* =================================================
            EDIT PROFILE
            ================================================= */}

        <Route
          path="/edit-profile"
          element={<EditProfile />}
        />


        {/* =================================================
            CAREER COMPARISON
            ================================================= */}

        <Route
          path="/career-comparison"
          element={<CareerComparison />}
        />


        {/* =================================================
            COLLEGE RECOMMENDATION
            ================================================= */}

        <Route
          path="/college-recommendation"
          element={<CollegeRecommendation />}
        />


        {/* =================================================
            COACHING RECOMMENDATION
            ================================================= */}

        <Route
          path="/coaching-recommendation"
          element={<CoachingRecommendation />}
        />


        {/* =================================================
            JOB RECOMMENDATION
            ================================================= */}

        <Route
          path="/job-recommendation"
          element={<AIJobRecommendation />}
        />


        {/* =================================================
            SETTINGS
            ================================================= */}

        <Route
          path="/settings"
          element={<Settings />}
        />


        {/* =================================================
            PORTFOLIO GENERATOR
            ================================================= */}

        <Route
          path="/portfolio-generator"
          element={<PortfolioGenerator />}
        />


        {/* =================================================
            COVER LETTER
            ================================================= */}

        <Route
          path="/cover-letter"
          element={<CoverLetter />}
        />


        {/* =================================================
            FRIEND'S FEATURES
            ================================================= */}

        <Route
          path="/skill-gap"
          element={<SkillGapAnalysis />}
        />

        <Route
          path="/skill-gap-result"
          element={<SkillGapResult />}
        />

        <Route
          path="/study-planner"
          element={<StudyPlanner />}
        />

        <Route
          path="/career-roadmap"
          element={<CareerRoadmap />}
        />

        <Route
          path="/career-roadmap-result"
          element={<CareerRoadmapResult />}
        />


        {/* =================================================
            FALLBACK
            ================================================= */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;