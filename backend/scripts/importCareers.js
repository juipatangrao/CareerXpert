require("dotenv").config();

const mongoose = require("mongoose");
const Career = require("../models/Career");
const careers = require("../data/career.json");

const importCareers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    let inserted = 0;
    let updated = 0;

    for (const career of careers) {
      const existingCareer = await Career.findOne({
        name: career.name,
      });

      if (existingCareer) {
        await Career.updateOne(
          { _id: existingCareer._id },
          {
            $set: career,
          }
        );

        updated++;
      } else {
        await Career.create(career);

        inserted++;
      }
    }

    console.log(`Inserted: ${inserted}`);
    console.log(`Updated: ${updated}`);
    console.log(
      "Career data import completed successfully."
    );

    await mongoose.connection.close();
  } catch (error) {
    console.error(
      "Career import failed:",
      error
    );

    process.exit(1);
  }
};

importCareers();