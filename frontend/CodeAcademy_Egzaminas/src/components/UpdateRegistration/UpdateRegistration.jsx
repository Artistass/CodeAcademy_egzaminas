import axios from "axios";
import Modal from "../Modal/Modal";
import { AddInput } from "../../hooks/AddInput/AddInput";
import { useState } from "react";
import styles from "./UpdateRegistration.module.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function UpdateRegistration({
  registration,
  onClose,
  onUpdate,
}) {
  const firstName = AddInput(registration.firstName);
  const lastName = AddInput(registration.lastName);
  const email = AddInput(registration.email);
  const age = AddInput(registration.age);

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!firstName.value) {
      newErrors.firstName = "First Name is required.";
    } else if (!/^[a-zA-Z0-9]+$/.test(firstName.value)) {
      newErrors.firstName = "Name must only contain letters and numbers.";
    } else if (firstName.value.length < 2) {
      newErrors.firstName = "First Name must be at least 2 characters.";
    } else if (firstName.value.length > 20) {
      newErrors.firstName = "First Name is too long.";
    }

    if (!lastName.value) {
      newErrors.lastName = "Last Name is required.";
    } else if (!/^[a-zA-Z0-9]+$/.test(lastName.value)) {
      newErrors.lastName = "Name must only contain letters and numbers.";
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

  async function handleUpdate() {
    if (!validate()) return;

    const body = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      age: age.value,
    };

    try {
      await axios.put(`${API_URL}/registration/${registration._id}`, body);
      onUpdate();
      onClose();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Modal show={!!registration} onClose={onClose}>
      {/* 
    We use !!registration to explicitly convert the registration object into a boolean.
    - If registration is truthy (e.g., an object), !!registration will evaluate to true, showing the modal.
    - If registration is falsy (e.g., null or undefined), !!registration will evaluate to false, hiding the modal.
    This ensures that the show prop is always a boolean, making the code more predictable and clear.
  */}
      <h2 className={styles.header}>Update Registration</h2>
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
            onClick={handleUpdate}
            className={styles.button}
          >
            Update
          </button>
          <button type="button" onClick={onClose} className={styles.button}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
