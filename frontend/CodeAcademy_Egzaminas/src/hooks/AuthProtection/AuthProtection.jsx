import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import styles from "./AuthProtection.module.css";

export default function AuthProtection({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Trkim auth +
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsAuthenticated(false); // Setinam false jei nera tokeno
      setIsModalVisible(true);
    }
  }, []);

  const handleModalClose = () => {
    setIsModalVisible(false);
    navigate("/");
  };

  return (
    <>
      {isModalVisible && (
        <Modal show={isModalVisible} onClose={handleModalClose}>
          <div className={styles.message}>
            Please signup or login to receive more information.
          </div>
          <div className={styles.messageButtonContainer}>
            <button className={styles.messageButton} onClick={handleModalClose}>
              OK
            </button>
          </div>
        </Modal>
      )}
      {isAuthenticated && children} {/* Jei yra auth renderinam children */}
    </>
  );
}
