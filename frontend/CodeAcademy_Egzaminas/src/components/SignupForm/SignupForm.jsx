import axios from "axios";
import { AddInput } from "../../hooks/AddInput/AddInput";
import { useState } from "react";
import styles from "./SignupForm.module.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function SignupForm({ onSignupSuccess, onClose }) {
  const name = AddInput("");
  const password = AddInput("");

  const [errors, setErrors] = useState({});
  const [signupSuccessful, setSignupSuccessful] = useState(false);

  function validate() {
    const newErrors = {};
    if (name.value === "") {
      newErrors.name = "Name is required.";
    } else if (name.value.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (password.value === "") {
      newErrors.password = "Password is required.";
    } else if (password.value.length < 8) {
      newErrors.password = "Name must be at least 8 characters long.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (!validate()) return;

    const body = {
      name: name.value,
      password: password.value,
    };

    try {
      await axios.post(`${API_URL}/register`, body);
      setSignupSuccessful(true);

      setTimeout(() => {
        if (onSignupSuccess) onSignupSuccess();
      }, 3000);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.header}>Signup</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name.value}
          onChange={name.onChange}
          autoComplete="off"
          className={styles.input}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
        <br />

        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password.value}
          onChange={password.onChange}
          autoComplete="off"
          className={styles.input}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <br />

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Sign up
          </button>
          <button type="button" onClick={onClose} className={styles.button}>
            Cancel
          </button>
        </div>
      </form>
      {signupSuccessful && (
        <p className={styles.successMessage}>
          <span className={styles.successMessageSpan}>Signup successful!</span>{" "}
          <br /> You will soon be redirected to the login form.
        </p>
      )}
    </div>
  );
}
