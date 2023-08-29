import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import Check from "../svgs/Check";

interface ButtonProps {
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  style?: React.CSSProperties;
  rounded?: boolean;
  color?: "primary" | "secondary" | "white" | "black" | "sub";
  selected?: boolean;
  variant?: "contained" | "outlined";
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
    selected,
    variant = "contained",
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
        selected && styles["button-selected"],
        variant && styles[`button-${variant}`],
        disabled && styles["button-disabled"],
      ])}
      disabled={disabled}
      type={type}
      style={style}
    >
      {children}
      {selected && (
        <Check className={styles["is-selected"]} width={12} height={12} />
      )}
    </button>
  );
};

export default Button;
