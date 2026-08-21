const Chat = require("../models/Chat");
const generateResponse = require("../services/geminiService");
const User = require("../models/User");
exports.chat = async (req, res) => {
  try {

    const { message, userId } = req.body;
const user = await User.findById(userId);
    // Save user message
    await Chat.create({
      userId,
      role: "user",
      message,
    });

    // Get previous chats
    const history = await Chat.find({ userId })
      .sort({ createdAt: 1 })
      .limit(20);

const reply = await generateResponse(message, history, user); 
    // Save AI reply
    await Chat.create({
      userId,
      role: "assistant",
      message: reply,
    });

    res.json({
      success: true,
      reply,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};