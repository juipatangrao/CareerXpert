// const User = require("../models/User");
// const comparisonService = require("../services/comparisonService");

// exports.compareCareers = async (req, res) => {
//   try {
//     const { career1, career2, userId } = req.body;

//     if (!career1 || !career2) {
//       return res.status(400).json({
//         success: false,
//         message: "Please select both careers.",
//       });
//     }

//     const user = await User.findById(userId);

// // const prompt = `
// // Compare these careers:

// // Career 1: ${career1}

// // Career 2: ${career2}

// // Generate a professional comparison.

// // Use HTML only.

// // Include:

// // <h2>Overview</h2>

// // <p>...</p>

// // <h2>Education</h2>

// // <table>
// // ...
// // </table>

// // <h2>Skills</h2>

// // <ul>
// // ...
// // </ul>

// // <h2>Salary</h2>

// // <h2>Future Scope</h2>

// // <h2>Final Recommendation</h2>

// // Rules:

// // Return ONLY HTML.

// // Do NOT return JSON.

// // Do NOT use markdown.

// // Do NOT use \`\`\`.

// // Start directly with <h2>.
// // `;
// const reply = comparisonService(career1, career2);
// const reply = await generateComparison(prompt);
//     res.json({
//       success: true,
//       comparison: reply,
//     });

//   } catch (err) {
//     console.log(err);

//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

const comparisonService = require("../services/comparisonService");

exports.compareCareers = async (req, res) => {

  try {

    const { career1, career2 } = req.body;

    if (!career1 || !career2) {

      return res.status(400).json({
        success: false,
        message: "Please select both careers."
      });

    }

    const comparison = comparisonService(career1, career2);

    res.json({
      success: true,
      comparison
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message
    });

  }

};