import { useState, useEffect } from "react";

const useToken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Retrieve token from local storage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveToken = (newToken) => {
    // Save token to local storage
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };
  const removeToken = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    setToken("");
  };
  return [token, saveToken, removeToken];
};

export default useToken;
