import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import EditProfile from "./pages/EditProfile";
import CareerComparison from "./pages/CareerComparison";
import CollegeRecommendation from "./pages/CollegeRecommendation";
import Government from "./component/Government";
import IT from "./component/IT";
import BankingANDFinance from "./component/BankingANDFinance";
import Law from "./component/Law";
import Aviation from "./component/Aviation";
import HotelManagement from "./component/HotelManagement";
import MerchantNavy from "./component/MerchantNavy";
import Engineering from "./component/Engineering";
import Doctor from "./component/Doctor";
//Science & Research
import ScienceResearch from "./component/ScienceResearch";
import SpaceAstronomy from "./component/SpaceAstronomy";
import Environmental from "./component/Environmental";
import MediaJournalism from "./component/MediaJournalism";
import AIJobRecommendation from "./pages/AIJobRecommendation";
import Design from "./component/Design";
//Government
//IT


//Banking and Finance pages

//Law pages

//Aviation pages

//Science and Research pages

//Engineering pages

//Hotel Management pages

//environmental

//navy

//Designer

//Space

import "./App.css";
// import ChatBot from "./component/ChatBot/ChatBot";
import GetStarted from "./component/GetStarted";
import CareerRecommendation from "./pages/CareerRecommendation";
import AptitudeTest from "./pages/AptitudeTest";
import CareerResult from "./pages/CareerResult";

import Settings from "./pages/Settings";
import PortfolioGenerator from "./pages/PortfolioGenerator";
import ProtectedRoute from "./component/ProtectedRoute";
import CareerDetails from "./pages/CareerDetails";
function App() {
  return (
    <BrowserRouter>
      {/* <ChatBot /> */}

      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        

        <Route path="/government" element={<Government />} />
        <Route path="/it" element={<IT />} />
        <Route path="/banking-and-finance" element={<BankingANDFinance />} />
        <Route path="/law" element={<Law />} />
        <Route path="/aviation" element={<Aviation />} />
        <Route path="/hotel-management" element={<HotelManagement />} />
        <Route path="/merchant-navy" element={<MerchantNavy />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/science-research" element={<ScienceResearch />} />
        
        
        
        
        
        
        
        
        
        <Route path="/media-and-journalism" element={<MediaJournalism />} />
        <Route path="/space-astronomy" element={<SpaceAstronomy />} />
        <Route path="/environmental" element={<Environmental />} />
        <Route path="/design" element={<Design />} />
        
        
        
        
        
        
        
        
        
        
        {/* Banking and Finance routes */}
        
        
        
        
        
        
        {/* Law */}
        
        
        
        
        
        
        {/* Aviation */}
        
        
        
        
        
        
        {/* Science and Research */}
        
        
        
        
        
        
        {/* Engineering */}
        
        
        
        
        
        
        
        
        {/* Hotel Management */}
        
        
        
        
        {/*Environment*/}
        
        
        
        {/* Merchant Navy */}
        
        
        
        
        

        {/*Design */}
        
        
        
        

        {/*Space*/}
        
        
        
        
        {/*Doctor*/}
        
        
        
        
        
        
        
        
        
        <Route
          path="/career-recommendation"
          element={<CareerRecommendation />}
        />

        <Route path="/aptitude-test" element={<AptitudeTest />} />

        <Route path="/career-result" element={<CareerResult />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/career-comparison" element={<CareerComparison />} />
        <Route
          path="/college-recommendation"
          element={<CollegeRecommendation />}
        />
        <Route path="/job-recommendation" element={<AIJobRecommendation />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/portfolio-generator" element={<PortfolioGenerator />} />
        <Route path="*" element={<CareerDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
