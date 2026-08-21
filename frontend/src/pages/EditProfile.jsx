import React, { useState, useEffect } from "react";
import "../style/EditProfile.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import defaultProfile from "../assets/defaultProfile.png";

import axios from "axios";
function EditProfile() {

  const [formData, setFormData] = useState({
  phone: "",
  gender: "",
  dob: "",
  college: "",
  course: "",
  year: "",
  semester: "",
  skills: "",
  interests: "",
  careerGoal: "",
  address: "",
  city: "",
  state: "",
  country: ""
});
const userId = localStorage.getItem("userId");
const navigate = useNavigate();
const [profileImage, setProfileImage] = useState(null);
const [preview, setPreview] = useState(defaultProfile);
const [editPersonal, setEditPersonal] = useState(false);

const [editEducation, setEditEducation] = useState(false);

const [editCareer, setEditCareer] = useState(false);

const [editAddress, setEditAddress] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
  fetchProfile();
}, []);

const fetchProfile = async () => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/profile/${userId}`
    );

    setFormData({
      phone: res.data.phone || "",
      gender: res.data.gender || "",
      dob: res.data.dob
        ? res.data.dob.split("T")[0]
        : "",
      college: res.data.college || "",
      course: res.data.course || "",
      year: res.data.year || "",
      semester: res.data.semester || "",
      skills: Array.isArray(res.data.skills)
        ? res.data.skills.join(", ")
        : "",
      interests: Array.isArray(res.data.interests)
        ? res.data.interests.join(", ")
        : "",
      careerGoal: res.data.careerGoal || "",
      address: res.data.address || "",
      city: res.data.city || "",
      state: res.data.state || "",
      country: res.data.country || "",
    });

 if (res.data.profileImage && res.data.profileImage.data) {
  setPreview(
    `http://localhost:5000/api/profile/image/${userId}?t=${Date.now()}`
  );
} else {
  setPreview(defaultProfile);
}

  } catch (err) {
    console.log(err);
  }
};
  const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    setProfileImage(file);
    setPreview(URL.createObjectURL(file));
  }
};
// useEffect(() => {
//     fetchProfile();
// }, []);
// const fetchProfile = async () => {
//   try {

//     const res = await axios.get(
//       `http://localhost:5000/api/profile/${userId}`
//     );

//     setFormData({
//       phone: res.data.phone || "",
//       gender: res.data.gender || "",
//       dob: res.data.dob || "",
//       college: res.data.college || "",
//       course: res.data.course || "",
//       year: res.data.year || "",
//       semester: res.data.semester || "",
//       skills: res.data.skills || "",
//       interests: res.data.interests || "",
//       careerGoal: res.data.careerGoal || "",
//       address: res.data.address || "",
//       city: res.data.city || "",
//       state: res.data.state || "",
//       country: res.data.country || ""
//     });

//     if (res.data.image) {
//       setPreview(
//         `http://localhost:5000/uploads/${res.data.image}`
//       );
//     }

//   } catch (err) {
//     console.log(err);
//   }
// };

  const handleSave = async () => {
  try {
    const data = new FormData();

    data.append("phone", formData.phone);
    data.append("gender", formData.gender);
    data.append("dob", formData.dob);
    data.append("college", formData.college);
    data.append("course", formData.course);
    data.append("year", formData.year);
    data.append("semester", formData.semester);
    data.append("skills", formData.skills);
    data.append("interests", formData.interests);
    data.append("careerGoal", formData.careerGoal);
    data.append("address", formData.address);
    data.append("city", formData.city);
    data.append("state", formData.state);
    data.append("country", formData.country);

    if (profileImage) {
      data.append("image", profileImage);
    }

    const res = await axios.put(
      `http://localhost:5000/api/profile/update/${userId}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert(res.data.message);

    navigate("/home", {
      state: {
        refresh: Date.now(),
      },
    });

  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message || "Profile update failed");
  }
  };


const filledFields = Object.values(formData).filter(
  value => value !== ""
).length;   

const progress = Math.round(
  (filledFields / Object.keys(formData).length) * 100
);

return (
  <div className="edit-profile-page">
    <Link to="/home" className="back-btn">
      ← Back
    </Link>

    <div className="edit-profile-card">

      <div className="edit-profile-header">
        <h2>Edit Profile</h2>
        <p>Complete your CareerXpert Profile</p>
      </div>

      <div className="profile-top">

        <div className="profile-image-wrapper">

         <img
  src={preview}
  alt="profile"
  className="profile-preview"
/>

<input
  type="file"
  id="profileImage"
  accept="image/*"
  onChange={handleImageChange}
  hidden
/>

<label
  htmlFor="profileImage"
  className="change-photo-btn"
>
  Change Photo
</label>

        </div>

        <div className="profile-progress">

          <h3>Profile Completion</h3>

          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <span>{progress}% Completed</span>

        </div>

      </div>

      {/* ---------------- Personal Information ---------------- */}

      <div className="profile-section">

        <div className="section-header">

          <h3>👤 Personal Information</h3>

          <button
            type="button"
            className="change-btn"
            onClick={() => setEditPersonal(!editPersonal)}
          >
            {editPersonal ? "Cancel" : "Change"}
          </button>

        </div>

        <div className="form-grid">

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!editPersonal}
              placeholder="Enter Phone Number"
            />

          </div>

          <div className="form-group">

            <label>Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              disabled={!editPersonal}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

          </div>

          <div className="form-group">

            <label>Date of Birth</label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              disabled={!editPersonal}
            />

          </div>

          <div className="form-group">

            <label>Username</label>

            <input
              value={localStorage.getItem("loggedInUser")}
              readOnly
            />

          </div>

        </div>

      </div>

{/* ---------------- Education ---------------- */}

<div className="profile-section">

  <div className="section-header">

    <h3>🎓 Education</h3>

    <button
      type="button"
      className="change-btn"
      onClick={() => setEditEducation(!editEducation)}
    >
      {editEducation ? "Cancel" : "Change"}
    </button>

  </div>

  <div className="form-grid">

    <div className="form-group">

      <label>College</label>

      <input
        name="college"
        value={formData.college}
        onChange={handleChange}
        disabled={!editEducation}
      />

    </div>

    <div className="form-group">

      <label>Course</label>

      <input
        name="course"
        value={formData.course}
        onChange={handleChange}
        disabled={!editEducation}
      />

    </div>

    <div className="form-group">

      <label>Year</label>

      <input
        name="year"
        value={formData.year}
        onChange={handleChange}
        disabled={!editEducation}
      />

    </div>

    <div className="form-group">

      <label>Semester</label>

      <input
        name="semester"
        value={formData.semester}
        onChange={handleChange}
        disabled={!editEducation}
      />

    </div>

  </div>

</div>

{/* ---------------- Career Information ---------------- */}

<div className="profile-section">

  <div className="section-header">

    <h3>💻 Career Information</h3>

    <button
      type="button"
      className="change-btn"
      onClick={() => setEditCareer(!editCareer)}
    >
      {editCareer ? "Cancel" : "Change"}
    </button>

  </div>

  <div className="form-grid">

    <div className="form-group">

      <label>Skills</label>

      <input
        type="text"
        name="skills"
        placeholder="React, Java, Python..."
        value={formData.skills}
        onChange={handleChange}
        disabled={!editCareer}
      />

    </div>

    <div className="form-group">

      <label>Interests</label>

      <input
        type="text"
        name="interests"
        placeholder="AI, Web Development..."
        value={formData.interests}
        onChange={handleChange}
        disabled={!editCareer}
      />

    </div>

  </div>

  <div className="form-group full-width">

    <label>Career Goal</label>

    <textarea
      name="careerGoal"
      value={formData.careerGoal}
      onChange={handleChange}
      placeholder="Describe your dream career..."
      disabled={!editCareer}
    />

  </div>

</div>
{/* ---------------- Address ---------------- */}

<div className="profile-section">

  <div className="section-header">

    <h3>📍 Address</h3>

    <button
      type="button"
      className="change-btn"
      onClick={() => setEditAddress(!editAddress)}
    >
      {editAddress ? "Cancel" : "Change"}
    </button>

  </div>

  <div className="form-group full-width">

    <label>Address</label>

    <textarea
      name="address"
      value={formData.address}
      onChange={handleChange}
      placeholder="Enter your address"
      disabled={!editAddress}
    />

  </div>

  <div className="form-grid">

    <div className="form-group">

      <label>City</label>

      <input
        name="city"
        value={formData.city}
        onChange={handleChange}
        disabled={!editAddress}
      />

    </div>

    <div className="form-group">

      <label>State</label>

      <input
        name="state"
        value={formData.state}
        onChange={handleChange}
        disabled={!editAddress}
      />

    </div>

    <div className="form-group">

      <label>Country</label>

      <input
        name="country"
        value={formData.country}
        onChange={handleChange}
        disabled={!editAddress}
      />

    </div>

  </div>

</div>

{/* ---------------- Buttons ---------------- */}

<div className="button-group">

  <button
    type="button"
    className="cancel-btn"
    onClick={() => navigate("/home")}
  >
    Cancel
  </button>

  <button
    type="button"
    className="save-btn"
    onClick={async () => {
      await handleSave();

      setEditPersonal(false);
      setEditEducation(false);
      setEditCareer(false);
      setEditAddress(false);
    }}
  >
    💾 Save Changes
  </button>

</div>

</div>
</div>

);
}

export default EditProfile;

// import React, { useState } from "react";
// import "../style/EditProfile.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// function EditProfile() {

//   const [formData, setFormData] = useState({
//   phone: "",
//   gender: "",
//   dob: "",
//   college: "",
//   course: "",
//   year: "",
//   semester: "",
//   skills: "",
//   interests: "",
//   careerGoal: "",
//   address: "",
//   city: "",
//   state: "",
//   country: ""
// });
// const userId = localStorage.getItem("userId");
// const navigate = useNavigate();
// const [profileImage, setProfileImage] = useState(null);
// const [preview, setPreview] = useState(
//   "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
// );
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
//   const handleImageChange = (e) => {
//   const file = e.target.files[0];

//   if (file) {
//     setProfileImage(file);
//     setPreview(URL.createObjectURL(file));
//   }
// };

//   const handleSave = async () => {
//   try {
//     const data = new FormData();

//     data.append("phone", formData.phone);
//     data.append("gender", formData.gender);
//     data.append("dob", formData.dob);
//     data.append("college", formData.college);
//     data.append("course", formData.course);
//     data.append("year", formData.year);
//     data.append("semester", formData.semester);
//     data.append("skills", formData.skills);
//     data.append("interests", formData.interests);
//     data.append("careerGoal", formData.careerGoal);
//     data.append("address", formData.address);
//     data.append("city", formData.city);
//     data.append("state", formData.state);
//     data.append("country", formData.country);

//     if (profileImage) {
//       data.append("image", profileImage);
//     }

//     const res = await axios.put(
//       `http://localhost:5000/api/profile/update/${userId}`,
//       data,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     alert(res.data.message);

//     navigate("/home", {
//       state: {
//         refresh: Date.now(),
//       },
//     });

//   } catch (error) {
//     console.log(error);
//     alert(error.response?.data?.message || "Profile update failed");
//   }
//   };


// const filledFields = Object.values(formData).filter(
//   value => value !== ""
// ).length;   

// const progress = Math.round(
//   (filledFields / Object.keys(formData).length) * 100
// );

// return (
//   <div className="edit-profile-page">
//     <Link to="/home">
//     Back
//     </Link>
//   <div className="edit-profile-card">

//     <div className="edit-profile-header">

//       <h2>Edit Profile</h2>

//       <p>Complete your CareerXpert Profile</p>

//     </div>

//     <div className="profile-top">

//       <div className="profile-image-wrapper">

//         <img
//   src={preview}
//   alt="profile"
//   className="profile-preview"
// />

// <input
//   type="file"
//   id="profileImage"
//   accept="image/*"
//   onChange={handleImageChange}
//   hidden
// />

// <label
//   htmlFor="profileImage"
//   className="change-photo-btn"
// >
//   Change Photo
// </label>
//       </div>

//       <div className="profile-progress">

//         <h3>Profile Completion</h3>

//         <div className="progress">

//   <div
//     className="progress-fill"
//     style={{ width: `${progress}%` }}
//   ></div>

// </div>

// <span>{progress}% Completed</span>


//       </div>

//     </div>

//     <div className="profile-section">

//       <h3>👤 Personal Information</h3>

//       <div className="form-grid">

//         <div className="form-group">

//           <label>Phone Number</label>

//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Enter Phone Number"
//           />

//         </div>

//         <div className="form-group">

//           <label>Gender</label>

//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//           >

//             <option>Select Gender</option>

//             <option>Male</option>

//             <option>Female</option>

//             <option>Other</option>

//           </select>

//         </div>

//         <div className="form-group">

//           <label>Date of Birth</label>

//           <input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//           />

//         </div>

//         <div className="form-group">

//           <label>Username</label>

//           <input
//             value={localStorage.getItem("loggedInUser")}
//             readOnly
//           />

//         </div>

//       </div>

//     </div>

//     <div className="profile-section">

//       <h3>🎓 Education</h3>

//       <div className="form-grid">

//         <div className="form-group">

//           <label>College</label>

//           <input
//             name="college"
//             value={formData.college}
//             onChange={handleChange}
//           />

//         </div>

//         <div className="form-group">

//           <label>Course</label>

//           <input
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//           />

//         </div>

//         <div className="form-group">

//           <label>Year</label>

//           <input
//             name="year"
//             value={formData.year}
//             onChange={handleChange}
//           />

//         </div>

//         <div className="form-group">

//           <label>Semester</label>

//           <input
//             name="semester"
//             value={formData.semester}
//             onChange={handleChange}
//           />

//         </div>

//       </div>

//     </div>
//     <div className="profile-section">

//   <h3>💻 Career Information</h3>

//   <div className="form-grid">

//     <div className="form-group">

//       <label>Skills</label>

//       <input
//         type="text"
//         name="skills"
//         placeholder="React, Java, Python..."
//         value={formData.skills}
//         onChange={handleChange}
//       />

//     </div>

//     <div className="form-group">

//       <label>Interests</label>

//       <input
//         type="text"
//         name="interests"
//         placeholder="AI, Web Development..."
//         value={formData.interests}
//         onChange={handleChange}
//       />

//     </div>

//   </div>

//   <div className="form-group full-width">

//     <label>Career Goal</label>

//     <textarea
//       name="careerGoal"
//       value={formData.careerGoal}
//       onChange={handleChange}
//       placeholder="Describe your dream career..."
//     />

//   </div>

// </div>
// <div className="profile-section">

//   <h3>📍 Address</h3>

//   <div className="form-group full-width">

//     <label>Address</label>

//     <textarea
//       name="address"
//       value={formData.address}
//       onChange={handleChange}
//       placeholder="Enter your address"
//     />

//   </div>

//   <div className="form-grid">

//     <div className="form-group">

//       <label>City</label>

//       <input
//         name="city"
//         value={formData.city}
//         onChange={handleChange}
//       />

//     </div>

//     <div className="form-group">

//       <label>State</label>

//       <input
//         name="state"
//         value={formData.state}
//         onChange={handleChange}
//       />

//     </div>

//     <div className="form-group">

//       <label>Country</label>

//       <input
//         name="country"
//         value={formData.country}
//         onChange={handleChange}
//       />

//     </div>

//   </div>

// </div>
// <div className="button-group">

//   <button
//     className="cancel-btn"
//     onClick={() => window.history.back()}
//   >
//     Cancel
//   </button>

//   <button
//     className="save-btn"
//     onClick={handleSave}
//   >
//     💾 Save Changes
//   </button>

// </div>
//     </div>
//   </div>

// );
// }

// export default EditProfile;