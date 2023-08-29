import styles from "./Content.module.scss";

interface ContentProps {
  children: React.ReactNode;
}

const Content = (props: ContentProps) => {
  const { children } = props;

  return <div className={styles["content-wrapper"]}>{children}</div>;
};

export default Content;
