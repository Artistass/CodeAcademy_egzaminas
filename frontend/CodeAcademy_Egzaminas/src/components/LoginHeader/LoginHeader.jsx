import { useState } from "react";
import Modal from "../Modal/Modal";
import SignupForm from "../SignupForm/SignupForm";
import SigninForm from "../SigninForm/SigninForm";
import styles from "./LoginHeader.module.css";
import LogoImage from "../../Images/Header/Header-Logo.png";
import { useNavigate } from "react-router-dom";

export default function LoginHeader() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navigate = useNavigate();

  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsDropdownOpen(false);
  };

  const openSignIn = () => {
    setIsSignUpOpen(false); // Close the sign-up modal if it's open
    setIsSignInOpen(true); // Then open the sign-in modal
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsDropdownOpen(false);
    // Add additional logic for logout if needed
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logoContainer}>
        <a className={styles.logoHomeTag} onClick={() => navigate("/")}>
          {" "}
          <img className={styles.logo} src={LogoImage} alt="Logo image" />
        </a>
        <h3 className={styles.logoName}>Supreme Drive</h3>
      </div>

      <div className={styles.dropdown}>
        <button className={styles.dropdownToggle} onClick={toggleDropdown}>
          <i className="fa-solid fa-user"></i> {/* Font Awesome icon */}
        </button>
        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            <button className={styles.dropdownMenuButton} onClick={openSignUp}>Signup</button>
            <button className={styles.dropdownMenuButton} onClick={openSignIn}>Login</button>
            <button className={styles.dropdownMenuButton} onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      <Modal show={isSignUpOpen} onClose={() => setIsSignUpOpen(false)}>
        <SignupForm
          onSignupSuccess={openSignIn}
          onClose={() => setIsSignUpOpen(false)}
        />
      </Modal>

      <Modal show={isSignInOpen} onClose={() => setIsSignInOpen(false)}>
        <SigninForm
          onSigninSuccess={() => setIsSignInOpen(false)}
          onClose={() => setIsSignInOpen(false)}
        />
      </Modal>
    </div>
  );
}
