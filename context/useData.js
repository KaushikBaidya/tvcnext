import { useEffect, useState } from "react";

const useData = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // setUser(localStorage?.user);
    // setToken(localStorage?.token);
    setUser(localStorage.getItem("user"));
    setToken(localStorage.getItem("token"));
  }, []);

  const signOut = () => {
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    setUser(null);
    setToken(null);
  };

  return {
    user,
    setUser,
    token,
    setToken,
    signOut,
  };
};

export default useData;
