const comparisonService = require("../services/comparisonService");


exports.compareCareers = async (
  req,
  res
) => {

  try {

    const {
      career1,
      career2,
    } = req.body;


    if (
      !career1 ||
      !career2
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Please select both careers.",

      });

    }


    if (
      career1.trim().toLowerCase() ===
      career2.trim().toLowerCase()
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Please select two different careers.",

      });

    }


    const comparison =
      await comparisonService(
        career1,
        career2
      );


    if (!comparison.found) {

      return res.status(404).json({

        success: false,

        message:
          comparison.message,

      });

    }


    return res.json({

      success: true,

      comparison,

    });

  } catch (error) {

    console.error(
      "Career comparison controller error:",
      error
    );


    return res.status(500).json({

      success: false,

      message:
        "Failed to compare careers.",

    });

  }

};