const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();


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


// AI ROUTES - ADD THIS
const aiRoutes = require("./routes/aiRoutes");


// =====================================================
// MIDDLEWARE
// =====================================================


app.use(cors());

app.use(express.json());


// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/careers", require("./routes/careerRoutes"));
app.use("/api/jobs", jobRecommendationRoutes);
app.use("/api/college", collegeRoutes);
app.use("/api/coaching", coachingRoutes);
app.use("/api/location", locationRoutes);
// Image folder public
app.use("/uploads", express.static("uploads"));
app.use("/api/chat", chatRoutes);
app.use("/api/career-comparison", comparisonRoutes);
app.use("/api/news", newsRoutes);


// =====================================================
// API ROUTES
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

app.use(
  "/api/jobs",
  jobRecommendationRoutes
);

app.use(
  "/api/college",
  collegeRoutes
);

app.use(
  "/api/chat",
  chatRoutes
);

app.use(
  "/api/career-comparison",
  comparisonRoutes
);

app.use(
  "/api/news",
  newsRoutes
);


// =====================================================
// AI ROUTES
// =====================================================

app.use(
  "/api/ai",
  aiRoutes
);


// =====================================================
// IMAGE FOLDER
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

    console.log(
      "✅ MongoDB Connected"
    );

  })
  .catch((err) => {

    console.error(
      "MongoDB Error:",
      err
    );

  });


// =====================================================
// SERVER
// =====================================================

const PORT =
  process.env.PORT || 5000;

app.listen(
  PORT,
  () => {

    console.log(
      `🚀 Server Running on Port ${PORT}`
    );

  }
);