const ChatMessage = ({ sender, text }) => {
  return (
    <div
      className={
        sender === "user"
          ? "message user-message"
          : "message ai-message"
      }
    >
      {text}
    </div>
  );
};

export default ChatMessage;