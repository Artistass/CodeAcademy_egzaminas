import axios from "axios";
import Modal from "../Modal/Modal";
import styles from "./DeleteConfirm.module.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function DeleteConfirm({ registration, onClose, onDelete }) {
  const handleDelete = async () => {
    if (registration) {
      try {
        await axios.delete(`${API_URL}/registration/${registration._id}`);
        onDelete(); // Notify parent to refresh the list
        onClose(); // Close the modal
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <Modal show={!!registration} onClose={onClose}>
      <h2 className={styles.header}>Confirm Deletion</h2>
      <p className={styles.headerText}>
        Are you sure you want to delete {registration?.firstName}{" "}
        {registration?.lastName}'s registration?
      </p>
      <div className={styles.buttonContainer}>
        <button
          onClick={handleDelete}
          className={`${styles.button} ${styles.confirmButton}`}
        >
          Confirm
        </button>
        <button
          onClick={onClose}
          className={`${styles.button} ${styles.cancelButton}`}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
