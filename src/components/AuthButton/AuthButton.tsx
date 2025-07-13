import { useAuth } from "../../services/auth_service";
import { useNavigate } from "react-router-dom";
import Button from "../commons/Button";
import styles from "./AuthButton.module.scss";

const AuthButton = () => {
  const { user, isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      signOut();
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className={styles["AuthButton"]}>
      {isAuthenticated ? (
        <div className={styles["AuthButton-user"]}>
          <span className={styles["AuthButton-welcome"]}>
            Welcome, {user?.name}
          </span>
          <Button
            text="Sign Out"
            onClick={handleAuthClick}
            className={styles["AuthButton-signout"]}
          />
        </div>
      ) : (
        <Button
          text="Sign In"
          onClick={handleAuthClick}
          className={styles["AuthButton-signin"]}
        />
      )}
    </div>
  );
};

export default AuthButton;
