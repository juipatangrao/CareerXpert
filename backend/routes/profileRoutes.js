// const express = require("express");
// const router = express.Router();

// const upload = require("../middleware/upload");
// const User = require("../models/User");

// const {
//   uploadProfileImage,
//   getProfile,
//   updateProfile
// } = require("../controllers/profileController");

// // Upload Profile Image
// router.post("/upload", upload.single("image"), uploadProfileImage);

// // Image route FIRST
// router.get("/image/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (!user || !user.profileImage || !user.profileImage.data) {
//       return res.status(404).json({
//         message: "Image not found",
//       });
//     }

//     res.set("Content-Type", user.profileImage.contentType);
//     res.send(user.profileImage.data);

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
// // Get Profile
// router.get("/:id", getProfile);
// router.put("/update/:id", updateProfile);
// // Get Profile Image
// router.get("/image/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (!user || !user.profileImage || !user.profileImage.data) {
//       return res.status(404).json({
//         message: "Image not found",
//       });
//     }

//     res.set("Content-Type", user.profileImage.contentType);
//     res.send(user.profileImage.data);

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const {
  uploadProfileImage,
  getProfile,
  updateProfile,
  getProfileImage,
  deleteProfile,
} = require("../controllers/profileController");


// Upload Profile Image
router.post(
  "/upload",
  upload.single("image"),
  uploadProfileImage
);

// Get Profile Image
router.get("/image/:id", getProfileImage);

// Get Profile
router.get("/:id", getProfile);

// Update Profile
router.put(
  "/update/:id",
  upload.single("image"),
  updateProfile
);

// Delete Profile
router.delete("/delete/:id", deleteProfile);


module.exports = router;