import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const getItems = useCallback(async () => {
    //check for network and protocol
    try {
      const response = await fetch(url);
      if (response.status !== 200) {
        console.log("protocole error");
      }
      const items = await response.json();
      setItems(items);
      setLoading(false);
    } catch (err) {
      console.log("no internet", err);
    }
  }, [url]);

  useEffect(() => {
    getItems();
  }, [url, getItems]);
  return { loading, items };
};
