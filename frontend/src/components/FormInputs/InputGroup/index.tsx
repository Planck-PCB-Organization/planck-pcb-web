import React from "react";
import styles from "./style.module.scss";

export interface InputGroupProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const InputGroup = (props: InputGroupProps) => {
  const { children, style } = props;
  return (
    <div style={style} className={styles["input-group"]}>
      {children}
    </div>
  );
};

export default InputGroup;
