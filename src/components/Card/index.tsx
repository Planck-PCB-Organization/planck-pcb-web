import clsx from "clsx";
import styles from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: "low" | "medium" | "high";
}

const Card = (props: CardProps) => {
  const { children, shadow = "low", className } = props;
  return (
    <div
      className={clsx([
        styles["card-wrapper"],
        shadow && styles[`card-shadow-${shadow}`],
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default Card;
