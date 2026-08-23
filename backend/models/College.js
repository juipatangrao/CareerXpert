const mongoose = require("mongoose");

const programSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    careerCategory: {
      type: String,
      required: true,
      trim: true,
    },

    level: {
      type: String,
      enum: ["Diploma", "UG", "PG", "Professional"],
      required: true,
    },

    entranceExams: {
      type: [String],
      default: [],
    },

    eligibility: {
      type: String,
      default: "",
    },

    cutoff: {
      type: Number,
      default: null,
    },

    annualFees: {
      type: Number,
      default: null,
    },
  },
  { _id: false }
);

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    shortName: {
      type: String,
      trim: true,
    },

    location: {
      city: {
        type: String,
        required: true,
      },

      state: {
        type: String,
        required: true,
        index: true,
      },
    },

    type: {
      type: String,
      enum: ["Government", "Private"],
      required: true,
      index: true,
    },

    // Career categories supported by this college
    careerCategories: {
      type: [String],
      default: [],
      index: true,
    },

    programs: {
      type: [programSchema],
      default: [],
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    accreditation: {
      naacGrade: {
        type: String,
        default: "",
      },

      nirf: {
        rank: {
          type: Number,
          default: null,
        },

        category: {
          type: String,
          default: "",
        },

        year: {
          type: Number,
          default: null,
        },
      },
    },

    lastVerified: {
      type: Date,
      default: null,
    },

    placement: {
      averagePackage: {
        type: Number,
        default: null,
      },

      highestPackage: {
        type: Number,
        default: null,
      },

      recruiters: {
        type: [String],
        default: [],
      },
    },

    facilities: {
      type: [String],
      default: [],
    },

    hostel: {
      type: Boolean,
      default: false,
    },

    scholarshipAvailable: {
      type: Boolean,
      default: false,
    },

    website: {
      type: String,
      default: "",
    },

    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for faster college recommendations
collegeSchema.index({
  "location.state": 1,
  "programs.careerCategory": 1,
  type: 1,
});

collegeSchema.index({
  careerCategories: 1,
  "location.state": 1,
  type: 1,
});

module.exports = mongoose.model("College", collegeSchema);