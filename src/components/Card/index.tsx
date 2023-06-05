import clsx from "clsx";
import styles from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = (props: CardProps) => {
  const { children } = props;
  return (
    <div className={clsx([styles["card-wrapper"], props.className])}>
      {children}
    </div>
  );
};

export default Card;
