import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";

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

import GetStarted from "./component/GetStarted";
import ProtectedRoute from "./component/ProtectedRoute";

import CareerDetails from "./pages/CareerDetails";
import CareerRecommendation from "./pages/CareerRecommendation";
import AptitudeTest from "./pages/AptitudeTest";
import CareerResult from "./pages/CareerResult";
import EditProfile from "./pages/EditProfile";
import CareerComparison from "./pages/CareerComparison";
import CollegeRecommendation from "./pages/CollegeRecommendation";
import AIJobRecommendation from "./pages/AIJobRecommendation";
import Settings from "./pages/Settings";
import PortfolioGenerator from "./pages/PortfolioGenerator";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            MAIN / AUTH
        ========================= */}

        <Route path="/" element={<GetStarted />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>


        {/* =========================
            MAIN CAREER CATEGORIES
        ========================= */}

        <Route path="/government" element={<Government />} />

        <Route path="/it" element={<IT />} />

        <Route
          path="/banking-and-finance"
          element={<BankingANDFinance />}
        />

        <Route path="/law" element={<Law />} />

        <Route path="/aviation" element={<Aviation />} />

        <Route
          path="/hotel-management"
          element={<HotelManagement />}
        />

        <Route
          path="/merchant-navy"
          element={<MerchantNavy />}
        />

        <Route path="/engineering" element={<Engineering />} />

        <Route path="/doctor" element={<Doctor />} />

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

        <Route path="/design" element={<Design />} />


        {/* =========================
            ENGINEERING SUB-CAREERS
        ========================= */}

        <Route
          path="/engineering/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            IT SUB-CAREERS
        ========================= */}

        <Route
          path="/it/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            BANKING & FINANCE
            Actual JSON route:
            /banking-finance/...
        ========================= */}

        <Route
          path="/banking-finance/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            LAW SUB-CAREERS
        ========================= */}

        <Route
          path="/law/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            AVIATION SUB-CAREERS
        ========================= */}

        <Route
          path="/aviation/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            HOTEL MANAGEMENT
        ========================= */}

        <Route
          path="/hotel-management/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            MERCHANT NAVY
        ========================= */}

        <Route
          path="/merchant-navy/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            SCIENCE & RESEARCH
        ========================= */}

        <Route
          path="/science-research/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            SPACE & ASTRONOMY
        ========================= */}

        <Route
          path="/space-astronomy/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            ENVIRONMENTAL
        ========================= */}

        <Route
          path="/environmental/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            MEDIA & JOURNALISM
        ========================= */}

        <Route
          path="/media-and-journalism/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            DESIGN
            Your JSON uses /Design/...
        ========================= */}

        <Route
          path="/Design/:careerId"
          element={<CareerDetails />}
        />

        {/* Also support lowercase URLs */}
        <Route
          path="/design/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            DOCTOR / MEDICAL
            Your JSON contains both:
            /Doctor/...
            /doctor/...
        ========================= */}

        <Route
          path="/Doctor/:careerId"
          element={<CareerDetails />}
        />

        <Route
          path="/doctor/:careerId"
          element={<CareerDetails />}
        />


        {/* =========================
            GOVERNMENT CAREER LEGACY ROUTES
            Government.jsx currently
            generates:
            /ias
            /ips
            /police
            /army
            /railway
            /forest
            /talathi
            /food
            /income-tax
        ========================= */}

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
          path="/railway"
          element={<CareerDetails />}
        />

        <Route
          path="/forest"
          element={<CareerDetails />}
        />

        <Route
          path="/talathi"
          element={<CareerDetails />}
        />

        <Route
          path="/food"
          element={<CareerDetails />}
        />

        <Route
          path="/income-tax"
          element={<CareerDetails />}
        />


        {/* =========================
            CAREER FEATURES
        ========================= */}

        <Route
          path="/career-recommendation"
          element={<CareerRecommendation />}
        />

        <Route
          path="/aptitude-test"
          element={<AptitudeTest />}
        />

        <Route
          path="/career-result"
          element={<CareerResult />}
        />

        <Route
          path="/career-comparison"
          element={<CareerComparison />}
        />

        <Route
          path="/college-recommendation"
          element={<CollegeRecommendation />}
        />

        <Route
          path="/job-recommendation"
          element={<AIJobRecommendation />}
        />


        {/* =========================
            USER / PROFILE
        ========================= */}

        <Route
          path="/edit-profile"
          element={<EditProfile />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/portfolio-generator"
          element={<PortfolioGenerator />}
        />


        {/* =========================
            FALLBACK
        ========================= */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;