import styles from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  icon?: string;
  text: string;
}

const Button = ({ icon, text, className }: ButtonProps) => {
  return (
    <div className={`${styles["Button"]} ${className}`}>
      {icon && <img src={icon} alt="icon" />}
      <p>{text}</p>
    </div>
  );
};

export default Button;
