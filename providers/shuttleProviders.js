import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://ctcs-api.onrender.com/api/v1/shuttle";

function useGetActiveShuttles() {
  const [shuttles, setShuttles] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function fetchShuttles() {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/active`);
        const shuttlesData = response.data;
        setShuttles(shuttlesData);
        // const shuttles = await response;
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchShuttles();
  }, []);

  return { shuttles, error, isLoading };
}

export default useGetActiveShuttles;
