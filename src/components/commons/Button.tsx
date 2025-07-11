import styles from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  icon?: React.ReactNode;
  text: string;
}

const Button = ({ icon, text, className }: ButtonProps) => {
  return (
    <div className={`${styles["Button"]} ${className}`}>
      {icon && icon}
      <p>{text}</p>
    </div>
  );
};

export default Button;
