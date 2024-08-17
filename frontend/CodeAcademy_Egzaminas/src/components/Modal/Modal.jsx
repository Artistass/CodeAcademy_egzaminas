import styles from "./Modal.module.css";

export default function Modal({ show, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}
