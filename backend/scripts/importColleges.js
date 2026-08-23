require("dotenv").config();

const mongoose = require("mongoose");
const College = require("../models/College");
const colleges = require("../data/colleges.json");

const importColleges = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    let inserted = 0;
    let updated = 0;

    for (const college of colleges) {
      const existingCollege = await College.findOne({
        name: college.name,
        "location.city": college.location.city,
      });

      if (existingCollege) {
        await College.updateOne(
          { _id: existingCollege._id },
          { $set: college }
        );

        updated++;
      } else {
        await College.create(college);
        inserted++;
      }
    }

    console.log(`Inserted: ${inserted}`);
    console.log(`Updated: ${updated}`);
    console.log("College data import completed.");

    await mongoose.connection.close();
  } catch (error) {
    console.error("College import failed:", error);
    process.exit(1);
  }
};

importColleges();