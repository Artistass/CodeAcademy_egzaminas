import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal"; // Adjust the path to your Modal component
import { useNavigate } from "react-router-dom";
import styles from "./AuthProtection.module.css"

export default function AuthProtection({ children }) {
  
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Assume authenticated initially
  const [isModalVisible, setIsModalVisible] = useState(false);

const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsAuthenticated(false); // Set to false if no token is found
      setIsModalVisible(true); // Show the modal
    }
  }, []);

  const handleModalClose = () => {
    setIsModalVisible(false);
    navigate("/")
    // Optional: Redirect to a registration page or another route
    // navigate("/register"); // Uncomment if navigation is needed
  };

  return (
    <>
      {isModalVisible && (
        <Modal show={isModalVisible} onClose={handleModalClose}>
          <div className={styles.message}>Please signup or login to receive more information.</div>
          <div className={styles.messageButtonContainer}>
          <button className={styles.messageButton} onClick={handleModalClose}>OK</button>

          </div>
        </Modal>
      )}
      {isAuthenticated && children} {/* Only render children if authenticated */}
    </>
  );
}
