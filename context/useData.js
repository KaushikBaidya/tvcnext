import { useState } from "react";
import Cookies from "universal-cookie";
const useData = () => {
  const cookie = new Cookies();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const signOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    cookie.remove("token");
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
