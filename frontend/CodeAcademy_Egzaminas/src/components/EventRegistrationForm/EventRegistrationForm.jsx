import axios from "axios";
import { AddInput } from "../../hooks/AddInput/AddInput";
import { useState } from "react";
import styles from "./EventRegistrationForm.module.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function EventRegistrationForm({ onSubmit, onClose }) {
  const firstName = AddInput("");
  const lastName = AddInput("");
  const email = AddInput("");
  const age = AddInput("");

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!firstName.value) {
      newErrors.firstName = "First Name is required.";
    } else if (firstName.value.length < 2) {
      newErrors.firstName = "First Name must be at least 2 characters.";
    } else if (firstName.value.length > 20) {
      newErrors.firstName = "First Name is too long.";
    }

    if (!lastName.value) {
      newErrors.lastName = "Last Name is required.";
    } else if (lastName.value.length < 2) {
      newErrors.lastName = "Last Name must be at least 2 characters.";
    } else if (lastName.value.length > 20) {
      newErrors.lastName = "Last Name is too long.";
    }

    if (!email.value) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      newErrors.email = "Email is invalid.";
    }

    if (!age.value) {
      newErrors.age = "Age is required.";
    } else if (age.value < 18) {
      newErrors.age = "You are too young.";
    } else if (age.value > 100) {
      newErrors.age = "You are too old.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function createNewRegistration() {
    if (!validate()) return;
    try {
      await axios.post(`${API_URL}/registration`, {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        age: age.value,
      });
      
      onSubmit(); // Trigger onSubmit to notify parent component
    } catch (error) {
      alert(error.message); // Handle any errors
    }
  }

  return (
    <form className={styles.form}>
      <label htmlFor="firstName" className={styles.label}>
        First Name:
      </label>
      <input
        type="text"
        id="firstName"
        value={firstName.value}
        onChange={firstName.onChange}
        autoComplete="off"
        className={styles.input}
      />
      {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
      <br />

      <label htmlFor="lastName" className={styles.label}>
        Last Name:
      </label>
      <input
        type="text"
        id="lastName"
        value={lastName.value}
        onChange={lastName.onChange}
        autoComplete="off"
        className={styles.input}
      />
      {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
      <br />

      <label htmlFor="email" className={styles.label}>
        Email:
      </label>
      <input
        type="text"
        id="email"
        value={email.value}
        onChange={email.onChange}
        autoComplete="off"
        className={styles.input}
      />
      {errors.email && <p className={styles.error}>{errors.email}</p>}
      <br />

      <label htmlFor="age" className={styles.label}>
        Age:
      </label>
      <input
        type="number"
        id="age"
        value={age.value}
        onChange={age.onChange}
        autoComplete="off"
        className={styles.input}
      />
      {errors.age && <p className={styles.error}>{errors.age}</p>}
      <br />

     <div className={styles.buttonContainer}>
      <button
        type="button"
        onClick={createNewRegistration}
        className={styles.button}
      >
        Register
      </button>
      <button type="button" onClick={onClose} className={styles.button}>
        Cancel
      </button>
     </div>
    </form>
  );
}
