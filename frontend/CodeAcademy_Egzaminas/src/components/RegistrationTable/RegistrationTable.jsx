import { useState } from "react";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";
import UpdateRegistration from "../UpdateRegistration/UpdateRegistration";
import EventRegistrationForm from "../../components/EventRegistrationForm/EventRegistrationForm";
import FetchRegistrations from "../../hooks/FetchRegistrations/FetchRegistrations";
import styles from "./RegistrationTable.module.css";

export default function RegistrationTable() {
  const [registrations, fetchRegistrations] = FetchRegistrations();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedRegistration, setSelectedRegistration] = useState(null);

  const handleDeleteClick = (registration) => {
    setSelectedRegistration(registration);
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = (registration) => {
    setSelectedRegistration(registration);
    setIsUpdateModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedRegistration(null);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedRegistration(null);
  };

  const handleDelete = () => {
    fetchRegistrations(); // Refresh the list after deletion
  };

  const handleUpdate = () => {
    fetchRegistrations(); // Refresh the list after updating
  };
  //

  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = async () => {
    fetchRegistrations();
    setShowForm(false); // Hide form after successful submission
  };

  const handleFormClose = () => {
    setShowForm(false); // Close form without submitting
  };

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>First name</th>
            <th className={styles.th}>Last name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Age</th>
            <th className={styles.th}></th>
            <th className={styles.th}></th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {registrations.map((registration) => (
            <tr key={registration._id} className={styles.tr}>
              <td className={styles.td}>{registration.firstName}</td>
              <td className={styles.td}>{registration.lastName}</td>
              <td className={styles.td}>{registration.email}</td>
              <td className={styles.td}>{registration.age}</td>

              <td className={styles.buttonCell}>
                <button
                  onClick={() => handleEditClick(registration)}
                  className={styles.button}
                >
                  <i className="fa-solid fa-pen"></i>
                </button>
              </td>
              <td className={styles.buttonCell}>
                <button
                  onClick={() => handleDeleteClick(registration)}
                  className={styles.button}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isDeleteModalOpen && (
        <DeleteConfirm
          registration={selectedRegistration}
          onClose={handleCloseDeleteModal}
          onDelete={handleDelete}
        />
      )}

      {isUpdateModalOpen && (
        <UpdateRegistration
          registration={selectedRegistration}
          onClose={handleCloseUpdateModal}
          onUpdate={handleUpdate}
        />
      )}

      <button
        className={styles.registrationButton}
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Registration Form" : "Register Here!"}
      </button>
      <br />
      {showForm && (
        <EventRegistrationForm
          onSubmit={handleFormSubmit}
          onClose={handleFormClose}
        />
      )}
    </>
  );
}
