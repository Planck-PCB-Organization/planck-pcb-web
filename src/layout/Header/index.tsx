import styles from "./Header.module.scss";

interface HeaderProps {
  id: string;
  logo: string;
  navLinks: {
    id: string;
    title: string;
  }[];
}

const Header = (props: HeaderProps) => {
  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles.logo}>
        <img src={props.logo} alt="logo" />
      </div>
      <ul className={styles["nav-wrapper"]}>
        {props.navLinks.map((link) => (
          <li className={styles["nav-item"]} key={link.id}>
            <a href={`${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
