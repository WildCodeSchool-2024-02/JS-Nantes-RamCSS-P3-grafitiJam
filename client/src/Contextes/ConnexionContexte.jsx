/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-catch */
import { createContext, useState, useMemo, useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export const ConnexionContext = createContext();

export function ConnexionProvider({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const [alias, setAlias] = useState(null);
  const [isVerify, setIsVerify] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [graffitiGeekLevel, setGraffitiGeekLevel] = useState(0);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch(`${apiUrl}/api/user/validateToken`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.valid) {
        setAlias(data.alias);
        setIsConnected(true);
        setIsVerify(data.isVerify === 1);
        setIsAdmin(data.isAdmin === 1);
        setProfilePicture(data.profilePicture);
        setGraffitiGeekLevel(data.graffitiGeekLevel || 0);
        setUserId(data.id);
      } else {
        handleLogout();
      }
    } catch (error) {
      handleLogout();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAlias(null);
    setIsConnected(false);
    setIsVerify(false);
    setIsAdmin(false);
    setProfilePicture(null);
    setGraffitiGeekLevel(0);
    setUserId(null);
  };

  // eslint-disable-next-line no-shadow
  const handleLogin = async (alias, password) => {
    try {
      const response = await fetch(`${apiUrl}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ alias, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        setAlias(alias);
        setIsConnected(true);
        setIsVerify(data.isVerify === 1);
        setIsAdmin(data.isAdmin === 1);
        setProfilePicture(data.profilePicture);
        setGraffitiGeekLevel(data.graffitiGeekLevel || 0);
        setUserId(data.id);
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      throw error;
    }
  };

  const updateProfilePicture = (newProfilePicture) => {
    setProfilePicture(newProfilePicture);
  };

  const contextValue = useMemo(
    () => ({
      isConnected,
      handleLogin,
      handleLogout,
      alias,
      isVerify,
      isAdmin,
      profilePicture,
      graffitiGeekLevel,
      userId,
      updateProfilePicture,
    }),
    [
      isConnected,
      alias,
      isVerify,
      isAdmin,
      profilePicture,
      graffitiGeekLevel,
      userId,
    ]
  );

  return (
    <ConnexionContext.Provider value={contextValue}>
      {children}
    </ConnexionContext.Provider>
  );
}
