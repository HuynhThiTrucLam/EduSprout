import { SendIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "../../assets/Icons/ChatbotIcon";
import Button from "../../components/commons/Button";
import {
  initialMessages,
  mockNearlyTopics,
  type Message,
} from "../../types/chatbox";
import styles from "./Chat.module.scss";

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [nearlyTopics, setNearlyTopics] = useState<string[]>([]);
  const [startChat, setStartChat] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      type: "user",
      message: input,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: "bot",
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    setNearlyTopics(mockNearlyTopics.map((topic) => topic.name));
    setMessages(initialMessages);
  }, []);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setStartChat(true);
      handleSend();
    }
  };

  return (
    <div className={styles["Chat"]}>
      <div className={styles["Chat-container"]}>
        <div className={styles["Chat-content"]}>
          {startChat ? (
            <div className={styles["Chat-messages"]}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={
                    msg.type === "user"
                      ? styles["Chat-message-user"]
                      : styles["Chat-message-bot"]
                  }
                >
                  {msg.message}
                </div>
              ))}
              {isTyping && (
                <div className={styles["Chat-message-bot"]}>
                  <span className={styles["Chat-typing"]}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          ) : (
            <div className={styles["Chat-start"]}>
              <div className={styles["Chat-start-icon"]}>
                <ChatbotIcon />
              </div>
              <p>Tôi là EduSprout bot, hãy bắt đầu cuộc trò chuyện với tôi</p>
              <div className={styles["Chat-start-tags"]}>
                {nearlyTopics.map((topic) => (
                  <div className={styles["Chat-start-tag"]} key={topic}>
                    <p>{topic}</p>
                  </div>
                ))}
              </div>
              <Button
                text="Bắt đầu trò chuyện"
                className={styles["Chat-start-button"]}
                onClick={() => setStartChat(true)}
              />
            </div>
          )}
          <div className={styles["Chat-input-row"]}>
            <input
              className={styles["Chat-input"]}
              type="text"
              placeholder="Nhập tin nhắn..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
            />
            <div className={styles["Chat-send"]} onClick={handleSend}>
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
