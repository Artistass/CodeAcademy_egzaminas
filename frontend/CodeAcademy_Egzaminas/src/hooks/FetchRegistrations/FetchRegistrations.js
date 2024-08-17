import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function FetchRegistrations() {
  const [registrations, setRegistrations] = useState([]);

  const fetchRegistrations = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/registration`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Pasijema tokena del auth
        },
      });
      setRegistrations(response.data);
    } catch (err) {
      // Tikrina ar tokenas yra ir dar yra validus "1h"
      if (err.response && err.response.status === 403) {
        // Istrina tokena is localStorage jeigu nera priejimo
        localStorage.removeItem("token");
      } else {
        alert("Something went wrong");
      }
    }
  }, []);

  useEffect(() => {
    fetchRegistrations();
  }, [fetchRegistrations]);

  // Graziname registracijos data ir funkcija re-fetch
  return [registrations, fetchRegistrations];
}
