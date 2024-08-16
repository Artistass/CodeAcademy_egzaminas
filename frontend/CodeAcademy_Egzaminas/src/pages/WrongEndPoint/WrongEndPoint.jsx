import { Link } from "react-router-dom";
import styles from "./WrongEndPoint.module.css";

export default function WrongEndPoint() {
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
        <p className={styles.emoji}>😕</p>
        <Link to="/" className={styles.homeButton}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
