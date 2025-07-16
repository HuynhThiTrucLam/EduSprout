import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatbotIcon from "../../assets/Icons/ChatbotIcon";
import Chatbox from "../../components/Chatbox/Chatbox";
import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";
import { useAuth } from "../../services/auth_service";
import styles from "./Homepage.module.scss";
import Introduction from "./Introduction/Introduction";
import Shopping from "./Shopping/Shopping";

const Homepage = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const navigate = useNavigate();

  const handleChatbotClick = () => {
    if (window.innerWidth > 768.5) {
      // Open Chatbox modal
      setIsChatboxOpen(!isChatboxOpen);
    } else {
      // Navigate to chat page
      navigate("/chat");
    }
  };
  const handleChatboxClose = () => {
    setIsChatboxOpen(false);
  };
  const { user } = useAuth();
  return (
    <div className={styles["Homepage"]}>
      <div className={styles["Homepage-container"]}>
        <Introduction />
        {user && <RecommendedProducts />}
        <Shopping />
        <div
          className={styles["Homepage-Chatbot"]}
          onClick={handleChatbotClick}
        >
          <ChatbotIcon />
        </div>
        {isChatboxOpen && <Chatbox onClose={handleChatboxClose} />}
      </div>
    </div>
  );
};

export default Homepage;
