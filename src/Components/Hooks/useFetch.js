import { useState, useEffect } from "react";

export const useFetch = () => {
  const [response, setResponce] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const json = await fetch('DB.json');
        const res = await json.json();
        setResponce(res);
      } catch (err) {
        setError(err)
      }
    })();
  }, [])

  return { response, error }
}