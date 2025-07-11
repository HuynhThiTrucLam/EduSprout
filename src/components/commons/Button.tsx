import styles from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
}

const Button = ({ icon, text, className, onClick }: ButtonProps) => {
  return (
    <div
      className={`${styles["Button"]} ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {icon && icon}
      <p>{text}</p>
    </div>
  );
};

export default Button;
