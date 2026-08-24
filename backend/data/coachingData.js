// Institutes per exam category (pan-India chains with known branches)
const examInstitutes = {
  "JEE (Engineering)": [
    { name: "Allen Career Institute", fees: "₹1,00,000 – 1,50,000/yr", knownFor: "JEE Main & Advanced rank improvement" },
    { name: "Aakash Institute", fees: "₹90,000 – 1,30,000/yr", knownFor: "Strong foundation + test series" },
    { name: "FIITJEE", fees: "₹1,20,000 – 1,60,000/yr", knownFor: "Advanced problem-solving" },
    { name: "Vidyamandir Classes", fees: "₹1,10,000 – 1,40,000/yr", knownFor: "Structured curriculum" }
  ],
  "NEET (Medical)": [
    { name: "Aakash Institute", fees: "₹1,00,000 – 1,40,000/yr", knownFor: "NEET Biology focus" },
    { name: "Allen Career Institute", fees: "₹1,10,000 – 1,50,000/yr", knownFor: "NEET rank improvement" },
    { name: "Narayana Institute", fees: "₹95,000 – 1,30,000/yr", knownFor: "Integrated school + NEET prep" }
  ],
  "UPSC (Civil Services)": [
    { name: "Vajiram & Ravi", fees: "₹1,50,000 – 2,00,000", knownFor: "GS foundation + mains answer writing" },
    { name: "Drishti IAS", fees: "₹80,000 – 1,20,000", knownFor: "Hindi + English medium, affordable" },
    { name: "Vision IAS", fees: "₹1,20,000 – 1,60,000", knownFor: "Test series & current affairs" }
  ],
  "CAT (MBA)": [
    { name: "TIME", fees: "₹35,000 – 50,000", knownFor: "CAT quant & test series" },
    { name: "CL (Career Launcher)", fees: "₹30,000 – 45,000", knownFor: "Structured CAT prep" },
    { name: "IMS", fees: "₹32,000 – 48,000", knownFor: "Mock CATs & analysis" }
  ],
  "CA Foundation": [
    { name: "VSI (Vidya Sagar Institute)", fees: "₹40,000 – 60,000", knownFor: "CA Foundation & Inter" },
    { name: "J.K. Shah Classes", fees: "₹45,000 – 65,000", knownFor: "CA/CS coaching" }
  ],
  "CLAT (Law)": [
    { name: "CLATapult", fees: "₹40,000 – 60,000", knownFor: "CLAT-focused test series" },
    { name: "Career Launcher", fees: "₹35,000 – 55,000", knownFor: "Law entrance coaching" }
  ],
  "GATE": [
    { name: "Made Easy", fees: "₹50,000 – 80,000", knownFor: "GATE Engineering prep" },
    { name: "ACE Engineering Academy", fees: "₹45,000 – 75,000", knownFor: "GATE + PSU prep" }
  ],
  "Banking (IBPS/SBI)": [
    { name: "Career Power (Adda247)", fees: "₹15,000 – 25,000", knownFor: "Bank PO/Clerk prep" },
    { name: "Bank Mahapack", fees: "₹10,000 – 20,000", knownFor: "Affordable online banking prep" }
  ],
  "SSC": [
    { name: "Adda247", fees: "₹12,000 – 20,000", knownFor: "SSC CGL/CHSL prep" },
    { name: "Kiran Prakashan Classes", fees: "₹10,000 – 18,000", knownFor: "SSC test series" }
  ],
  "NDA": [
    { name: "Major Kalshi Classes", fees: "₹25,000 – 40,000", knownFor: "NDA & Defence exam prep" }
  ],
  "Diploma Entrance (Polytechnic)": [
    { name: "MSBTE Guidance Classes", fees: "₹15,000 – 25,000", knownFor: "State polytechnic entrance prep" },
    { name: "Target Polytechnic Classes", fees: "₹12,000 – 20,000", knownFor: "Diploma CET coaching" }
  ],
  "Diploma to Degree (Lateral Entry)": [
    { name: "Lateral Entry Prep Institutes", fees: "₹15,000 – 25,000", knownFor: "Diploma to B.E./B.Tech lateral entrance" },
    { name: "Target Polytechnic Classes", fees: "₹12,000 – 22,000", knownFor: "Lateral entry CET coaching" }
  ],
  "Board Exam Tuition (11th/12th)": [
    { name: "Byju's", fees: "₹20,000 – 40,000/yr", knownFor: "Board exam concept clarity" },
    { name: "Vedantu", fees: "₹15,000 – 35,000/yr", knownFor: "Live doubt-solving classes" }
  ],
  "Foundation (8th-10th)": [
    { name: "PhysicsWallah Foundation", fees: "₹8,000 – 15,000/yr", knownFor: "Affordable foundation batches" },
    { name: "Byju's Foundation", fees: "₹15,000 – 25,000/yr", knownFor: "School + early JEE/NEET foundation" }
  ],
  "GRE/GMAT": [
    { name: "Manhattan Prep", fees: "₹30,000 – 50,000", knownFor: "GRE/GMAT quant & verbal" },
    { name: "Kaplan", fees: "₹35,000 – 55,000", knownFor: "Structured test prep" }
  ],
  "IELTS/TOEFL": [
    { name: "British Council", fees: "₹15,000 – 20,000", knownFor: "Official IELTS prep" },
    { name: "IDP Education", fees: "₹12,000 – 18,000", knownFor: "IELTS test familiarity" }
  ]
};

// Major city per state (for offline branch display)
const stateCity = {
  "Maharashtra": "Pune",
  "Gujarat": "Ahmedabad",
  "Delhi": "New Delhi",
  "Karnataka": "Bengaluru",
  "Tamil Nadu": "Chennai",
  "Kerala": "Kochi",
  "Punjab": "Chandigarh",
  "Rajasthan": "Jaipur",
  "Madhya Pradesh": "Indore",
  "Uttar Pradesh": "Lucknow"
};

module.exports = { examInstitutes, stateCity };