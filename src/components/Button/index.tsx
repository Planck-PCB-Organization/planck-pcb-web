import clsx from "clsx";
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  rounded?: boolean;
  color?: "primary" | "secondary" | "white" | "black" | "sub";
}

const Button = (props: ButtonProps) => {
  const {
    children,
    title,
    onClick,
    className,
    disabled,
    type,
    style,
    rounded,
    color,
  } = props;

  return (
    <button
      title={title}
      onClick={onClick}
      className={clsx([
        className,
        styles["button-container"],
        color && styles[`button-container-${color}`],
        rounded && styles["button-rounded"],
      ])}
      disabled={disabled}
      type={type}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
