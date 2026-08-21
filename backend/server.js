const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");

dns.setServers(['1.1.1.1' , '8.8.8.8'])
dotenv.config();

const app = express();
const chatRoutes = require("./routes/chatRoutes");
const comparisonRoutes = require("./routes/comparisonRoutes");
const collegeRoutes = require("./routes/collegeRoutes");
const jobRecommendationRoutes = require("./routes/jobRecommendationRoutes");
const newsRoutes = require("./routes/newsRoutes");


app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/careers", require("./routes/careerRoutes"));
app.use("/api/jobs", jobRecommendationRoutes);
app.use("/api/college", collegeRoutes);
// Image folder public
app.use("/uploads", express.static("uploads"));
app.use("/api/chat", chatRoutes);
app.use("/api/career-comparison", comparisonRoutes);
app.use("/api/news", newsRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Error:", err);
  });

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});