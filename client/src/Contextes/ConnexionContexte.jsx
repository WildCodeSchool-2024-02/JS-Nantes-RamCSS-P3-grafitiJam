import { createContext, useState, useMemo } from "react";

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

  // eslint-disable-next-line no-shadow
  const handleLogin = (alias, password) =>
    fetch(`${apiUrl}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ alias, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
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
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
        throw error;
      });

  const contextValue = useMemo(
    () => ({
      isConnected,
      handleLogin,
      alias,
      isVerify,
      isAdmin,
      profilePicture,
      graffitiGeekLevel,
      userId,
    }),
    [isConnected, alias, isVerify, isAdmin, profilePicture, graffitiGeekLevel, userId]

  );

  return (
    <ConnexionContext.Provider value={contextValue}>
      {children}
    </ConnexionContext.Provider>
  );
}
