const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    username:{
        type:String
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    profileImage: {
  data: {
    type: Buffer,
    default: Buffer.alloc(0)
  },
  contentType: {
    type: String,
    default: ""
  }
},
    
    phone: {
    type: String,
    default: ""
    },

    gender: {
        type: String,
        default: ""
    },

    dob: {
        type: Date,
        default: null
    },

    college: {
        type: String,
        default: ""
    },

    course: {
        type: String,
        default: ""
    },

    year: {
        type: String,
        default: ""
    },

    semester: {
        type: String,
        default: ""
    },

    skills: {
        type: [String],
        default: []
    },

    interests: {
        type: [String],
        default: []
    },

    careerGoal: {
        type: String,
        default: ""
    },

    address: {
        type: String,
        default: ""
    },

    city: {
        type: String,
        default: ""
    },

    state: {
        type: String,
        default: ""
    },

    country: {
        type: String,
        default: ""
    }

});

module.exports = mongoose.model("User", userSchema);