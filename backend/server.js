const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// =====================================================
// ROUTES
// =====================================================

const chatRoutes = require("./routes/chatRoutes");
const comparisonRoutes = require("./routes/comparisonRoutes");
const collegeRoutes = require("./routes/collegeRoutes");
const coachingRoutes = require("./routes/coachingRoutes");
const jobRecommendationRoutes = require("./routes/jobRecommendationRoutes");
const newsRoutes = require("./routes/newsRoutes");
const locationRoutes = require("./routes/locationRoutes");
const aiRoutes = require("./routes/aiRoutes");

// COVER LETTER ROUTES
const coverLetterRoutes = require("./routes/coverLetterRoutes");

// =====================================================
// AUTH / PROFILE / CAREER ROUTES
// =====================================================

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/profile",
  require("./routes/profileRoutes")
);

app.use(
  "/api/careers",
  require("./routes/careerRoutes")
);


// =====================================================
// JOB / COLLEGE / COACHING
// =====================================================

app.use(
  "/api/jobs",
  jobRecommendationRoutes
);

app.use(
  "/api/college",
  collegeRoutes
);

app.use(
  "/api/coaching",
  coachingRoutes
);


// =====================================================
// LOCATION
// =====================================================

app.use(
  "/api/location",
  locationRoutes
);


// =====================================================
// CHAT
// =====================================================

app.use(
  "/api/chat",
  chatRoutes
);


// =====================================================
// CAREER COMPARISON
// =====================================================

app.use(
  "/api/career-comparison",
  comparisonRoutes
);


// =====================================================
// NEWS
// =====================================================

app.use(
  "/api/news",
  newsRoutes
);


// =====================================================
// AI
// =====================================================

app.use(
  "/api/ai",
  aiRoutes
);


// =====================================================
// COVER LETTER
// =====================================================
app.use(
  "/api/cover-letter",
  coverLetterRoutes
);

// =====================================================
// UPLOADS
// =====================================================

app.use(
  "/uploads",
  express.static("uploads")
);


// =====================================================
// MONGODB CONNECTION
// =====================================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("✅ MongoDB Connected");

  })
  .catch((err) => {

    console.error(
      "❌ MongoDB Error:",
      err
    );

  });


// =====================================================
// SERVER
// =====================================================

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  () => {

    console.log(
      `🚀 Server Running on Port ${PORT}`
    );

  }
);