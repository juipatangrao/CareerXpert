import ReactMarkdown from "react-markdown";

const ChatMessage = ({ sender, text }) => {
  return (
    <div
      className={
        sender === "user"
          ? "message user-message"
          : "message ai-message"
      }
    >
      {sender === "ai" ? (
        <div className="chatbot-message-content">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      ) : (
        text
      )}
    </div>
  );
};

export default ChatMessage;
