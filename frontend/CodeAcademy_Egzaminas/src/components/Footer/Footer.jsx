import styles from "./Footer.module.css";
import LogoImage from "../../Images/Header/Header-Logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <img className={styles.logoImage} src={LogoImage} alt="Logo_Image" />
        </div>
        <div className={styles.section}>
          <h4 className={styles.title}>Company</h4>
          <nav className={styles.nav}>
            <a href="" className={styles.link}>
              About Us
            </a>
            <a href="" className={styles.link}>
              Careers
            </a>
            <a href="" className={styles.link}>
              Blog
            </a>
            <a href="" className={styles.link}>
              Newsroom
            </a>
          </nav>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Resources</h4>
          <nav className={styles.nav}>
            <a href="" className={styles.link}>
              Help Center
            </a>
            <a href="" className={styles.link}>
              Guides
            </a>
            <a href="" className={styles.link}>
              Community
            </a>
            <a href="" className={styles.link}>
              Support
            </a>
          </nav>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Legal</h4>
          <nav className={styles.nav}>
            <a href="" className={styles.link}>
              Privacy Policy
            </a>
            <a href="" className={styles.link}>
              Terms of Service
            </a>
            <a href="" className={styles.link}>
              Cookie Policy
            </a>
            <a href="" className={styles.link}>
              Data Protection
            </a>
          </nav>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Follow Us</h4>
          <nav>
            <a href="https://www.facebook.com" className={styles.linkSoc}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" className={styles.linkSoc}>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" className={styles.linkSoc}>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" className={styles.linkSoc}>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2024 Supreme Drive. All rights reserved.</p>
      </div>
    </footer>
  );
}
