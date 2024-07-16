import { createContext, useState, useEffect, useMemo } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export const ConnexionContext = createContext();

// eslint-disable-next-line react/prop-types
export function ConnexionProvider({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const [alias, setAlias] = useState(null);
  const [isVerify, setIsVerify] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [graffitiGeekLevel, setGraffitiGeekLevel] = useState(0);
  const [userId, setUserId] = useState(null);

  // Check for token on initial load or after rerender
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // eslint-disable-next-line no-use-before-define
      fetchUserData(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only runs on component mount

  // Function to fetch user data from backend
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
        // Handle valid token case
        setAlias(data.alias);
        setIsConnected(true);
        setIsVerify(data.isVerify === 1);
        setIsAdmin(data.isAdmin === 1);
        setProfilePicture(data.profilePicture);
        setGraffitiGeekLevel(data.graffitiGeekLevel || 0);
        setUserId(data.id);
      } else {
        // Handle invalid token case
        // eslint-disable-next-line no-use-before-define
        handleLogout();
      }
    } catch (error) {
      console.error("Error validating token:", error);
      // eslint-disable-next-line no-use-before-define
      handleLogout(); // Handle any unexpected errors
    }
  };

  // Function to handle logout
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

  // Function to handle login
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
      console.error("There was a problem with the fetch operation: ", error);
      throw error;
    }
  };

  // Memoized context value
  const contextValue = useMemo(
    () => ({
      isConnected,
      handleLogin,
      handleLogout, // Make sure to include handleLogout here
      alias,
      isVerify,
      isAdmin,
      profilePicture,
      graffitiGeekLevel,
      userId,
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
