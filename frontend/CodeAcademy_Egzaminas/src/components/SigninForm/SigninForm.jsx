import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AddInput } from "../../hooks/AddInput/AddInput";
import { useState } from "react";
import styles from "./SigninForm.module.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function SigninForm({ onSigninSuccess, onClose }) {
  const name = AddInput("");
  const password = AddInput("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSignin(e) {
    e.preventDefault();

    const body = {
      name: name.value,
      password: password.value,
    };

    try {
      const response = await axios.post(API_URL + "/login", body);
      const token = response.data.token; //Pasijamam tokena

      if (token) {
        localStorage.setItem("token", token); // Issaugojame tokena i localStorage
        if (onSigninSuccess) onSigninSuccess();
        navigate("/");
      } else {
        alert("Failed to receive token.");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("There is no such user.");
      } else {
        setError("Login failed: " + error.message);
      }
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Login</h2>
      <form onSubmit={handleSignin} className={styles.form}>
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
          minLength={2}
          maxLength={20}
          required
        />
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
          minLength={8}
          required
        />
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.button}>
            Sign in
          </button>
          <button type="button" onClick={onClose} className={styles.button}>
            Cancel
          </button>
        </div>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
