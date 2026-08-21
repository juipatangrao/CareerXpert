const ChatInput = ({ input, setInput, sendMessage }) => {
  return (
    <div className="chat-footer">

      <input
        type="text"
        placeholder="Ask your career question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />

      <button onClick={sendMessage}>
        Send
      </button>

    </div>
  );
};

export default ChatInput;