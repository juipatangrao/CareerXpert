// const mongoose=require("mongoose");


// const chatSchema=new mongoose.Schema({

// userId:{
// type:String,
// default:"guest"
// },

// question:{
// type:String,
// required:true
// },

// answer:{
// type:String,
// required:true
// },

// createdAt:{
// type:Date,
// default:Date.now
// }

// });


// module.exports=mongoose.model(
// "Chat",
// chatSchema
// );
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "assistant"],
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);