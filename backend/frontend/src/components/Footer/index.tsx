import styles from './footer.module.scss';
import Section from "../Section";

const Footer: React.FC = () => {
    return (
        <Section id="section-5">
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.column}>
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={styles.column}>
                        <h3>Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Adres</h3>
                        <p>Hacı Bayram Veli Mahalllesi</p>
                        <p>İstanbul cad. No:10/30</p>
                        <p>Altındağ / Ankara</p>
                    </div>
                </div>
                <div className={styles.bottomBar}>
                    <p>&copy; 2024 Planck.</p>
                </div>
            </footer>
        </Section>
    );
};

export default Footer;
