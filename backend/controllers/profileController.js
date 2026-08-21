const User = require("../models/User");

// Upload Profile Image
exports.uploadProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No image selected",
      });
    }

    const user = await User.findById(req.body.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.profileImage = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };

    await user.save();

    res.json({
      message: "Image uploaded successfully",
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

// Get Profile Image
exports.getProfileImage = async (req, res) => {

  try {

    const user = await User.findById(req.params.id);

    if (!user || !user.profileImage || !user.profileImage.data) {
      return res.status(404).send("Image not found");
    }

    res.set("Content-Type", user.profileImage.contentType);

    res.send(user.profileImage.data);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};// Get Profile
exports.getProfile = async (req, res) => {
  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      phone: user.phone,
      gender: user.gender,
      dob: user.dob,
      college: user.college,
      course: user.course,
      year: user.year,
      semester: user.semester,
      skills: user.skills,
      interests: user.interests,
      careerGoal: user.careerGoal,
      address: user.address,
      city: user.city,
      state: user.state,
      country: user.country,
profileImage:
  user.profileImage && user.profileImage.data
    ? `/api/profile/image/${user._id}`
    : null,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
// Update Profile
exports.updateProfile = async (req, res) => {
  try {
console.log("REQ.FILE =", req.file);
    console.log("BODY =", req.body);
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.phone = req.body.phone || "";
    user.gender = req.body.gender || "";
    user.dob = req.body.dob || null;
    user.college = req.body.college || "";
    user.course = req.body.course || "";
    user.year = req.body.year || "";
    user.semester = req.body.semester || "";

    user.skills = req.body.skills
      ? req.body.skills.split(",").map(item => item.trim())
      : [];

    user.interests = req.body.interests
      ? req.body.interests.split(",").map(item => item.trim())
      : [];

    user.careerGoal = req.body.careerGoal || "";
    user.address = req.body.address || "";
    user.city = req.body.city || "";
    user.state = req.body.state || "";
    user.country = req.body.country || "";

    // Update image if selected
    if (req.file) {
      user.profileImage = {
        data: req.file.buffer,
        contentType: req.file.mimetype
      };
    }

    await user.save();

    res.status(200).json({
  success: true,
  message: "Profile updated successfully",
  user,
});

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};
// Delete Profile
exports.deleteProfile = async (req, res) => {
  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Profile deleted successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};