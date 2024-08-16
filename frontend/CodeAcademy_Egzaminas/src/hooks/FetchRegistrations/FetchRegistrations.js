import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function FetchRegistrations() {
  const [registrations, setRegistrations] = useState([]);

  const fetchRegistrations = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/registration`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setRegistrations(response.data);
    } catch (err) {
      if (err.response && err.response.status === 403) {
        localStorage.removeItem("token");
        
      } else {
        alert("Something went wrong");
      }
    }
  }, []);

  useEffect(() => {
    fetchRegistrations();
  }, [fetchRegistrations]);

  return [registrations, fetchRegistrations];
}
