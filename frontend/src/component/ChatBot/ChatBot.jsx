import { useState } from "react";
import "./ChatBot.css";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import axios from "axios";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I am CareerXpert AI. Ask me anything about careers.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === "" || loading) return;

    const question = input.trim();

    const userMessage = {
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Get logged-in user safely
      let loggedInUser = null;

      const storedUser = localStorage.getItem("loggedInUser");

      if (storedUser) {
        try {
          loggedInUser = JSON.parse(storedUser);
        } catch (parseError) {
          console.error(
            "Invalid loggedInUser in localStorage:",
            storedUser
          );
        }
      }

      // Get user ID from loggedInUser or fallback to userId
      const userId =
        loggedInUser?._id ||
        loggedInUser?.id ||
        localStorage.getItem("userId");

      if (!userId) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: "⚠️ Please log in again before using the AI chatbot.",
          },
        ]);

        setLoading(false);
        return;
      }

      console.log("Sending chatbot request for user:", userId);

      const res = await axios.post(
        "http://localhost:5000/api/chat",
        {
          message: question,
          userId: userId,
        }
      );

      console.log("Chatbot response:", res.data);

      // Backend returns:
      // {
      //   success: true,
      //   reply: "..."
      // }

      const aiReply =
        res.data?.reply ||
        "⚠️ I couldn't generate a response. Please try again.";

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiReply,
        },
      ]);
    } catch (error) {
      console.error("Axios Error:", error);

      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
      }

      const errorMessage =
        error.response?.data?.message ||
        "⚠️ Server connection failed. Please try again.";

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: errorMessage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "ai",
        text: "👋 Hello! I am CareerXpert AI. Ask me anything about careers.",
      },
    ]);
  };

  return (
    <>
      <div className="chat-toggle-wrapper">
        <button
          className="chat-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          💬
        </button>

        <span className="chat-tooltip">
          AI Chatbot
        </span>
      </div>

      {isOpen && (
        <div className="chat-window">

          <div className="chat-header">
            🤖 CareerXpert AI

            <button onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>

          <div className="chat-body">

            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                sender={msg.sender}
                text={msg.text}
              />
            ))}

            {loading && (
              <ChatMessage
                sender="ai"
                text="Thinking..."
              />
            )}

            <button onClick={clearChat}>
              Clear Chat
            </button>

          </div>

          <ChatInput
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
          />

        </div>
      )}
    </>
  );
};

export default ChatBot;