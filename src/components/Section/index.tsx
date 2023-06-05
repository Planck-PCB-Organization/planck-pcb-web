import React from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  id: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  description,
  children,
  style,
}) => {
  return (
    <section
      style={{
        ...style,
      }}
      id={id}
      className={styles["section-wrapper"]}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </section>
  );
};

export default Section;
