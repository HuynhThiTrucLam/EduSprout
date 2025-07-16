import { SendIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "../../assets/Icons/ChatbotIcon";
import Close from "../../assets/Icons/Close";
import {
  initialMessages,
  mockNearlyTopics,
  type Message,
} from "../../types/chatbox";
import styles from "./Chatbox.module.scss";

interface ChatboxProps {
  onClose: () => void;
}

const Chatbox = ({ onClose }: ChatboxProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [nearlyTopics, setNearlyTopics] = useState<string[]>([]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

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
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className={styles["Chatbox"]}>
      <div className={styles["Chatbox-container"]}>
        <div className={styles["Chatbox-header"]}>
          <div className={styles["Chatbox-header-left"]}>
            <span className={styles["Chatbox-header-bounce"]}>
              <ChatbotIcon />
            </span>
            <p>EduSprout bot</p>
          </div>
          <div className={styles["Chatbox-header-right"]}>
            {/* <ReloadIcon /> */}
            <Close onClick={onClose} />
          </div>
        </div>
        <div className={styles["Chatbox-messages"]}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={
                msg.type === "user"
                  ? styles["Chatbox-message-user"]
                  : styles["Chatbox-message-bot"]
              }
            >
              {msg.message}
            </div>
          ))}
          {isTyping && (
            <div className={styles["Chatbox-message-bot"]}>
              <span className={styles["Chatbox-typing"]}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className={styles["Chatbox-input-row"]}>
          <div className={styles["Chatbox-nearly"]}>
            {nearlyTopics.map((topic) => (
              <div className={styles["Chatbox-nearly-item"]} key={topic}>
                <p key={topic}>{topic}</p>
              </div>
            ))}
          </div>
          <input
            className={styles["Chatbox-input"]}
            type="text"
            placeholder="Nhập tin nhắn..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
          <div className={styles["Chatbox-send"]} onClick={handleSend}>
            <SendIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
