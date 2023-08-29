import React from "react";
import styles from "./Section.module.scss";
import clsx from "clsx";

interface SectionProps {
  id: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  style,
  className,
}) => {
  return (
    <section
      style={{
        ...style,
      }}
      id={id}
      className={clsx(styles["section-wrapper"], className)}
    >
      {children}
    </section>
  );
};

export default Section;
