import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ConnexionContext } from "../Contextes/ConnexionContexte";
import "./styles/profile.css";

const apiUrl = import.meta.env.VITE_API_URL;

function Profile() {
  const {
    isConnected,
    alias,
    graffitiGeekLevel,
    userId,
    handleLogout,
    profilePicture,
  } = useContext(ConnexionContext);

  const navigate = useNavigate();
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const fetchUserBadges = async (userId) => {
      try {
        const response = await fetch(`${apiUrl}/api/user/badge/${userId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBadges(data); // Update badges state
      } catch (error) {
        console.error("Error fetching badges:", error);
      }
    };

    if (isConnected) {
      fetchUserBadges(userId);
    }
  }, [isConnected, userId]);

  const handleDisconnect = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <main>
      <div className="profile-picture-container">
        {profilePicture && (
          <img
            src={profilePicture}
            alt={`${alias}'s avatar`}
            className="profile-picture"
          />
        )}
      </div>
      <div className="infos-profile-container">
        <div className="alias-container">
          {isConnected && <h2 className="alias-text">Alias : {alias}</h2>}
        </div>

        <div className="geek-level-container">
          <h2 className="geek-level-text">Geek level</h2>
          <div className="level-indicators">
            {Array.from({ length: graffitiGeekLevel }).map((_, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={`level-${userId}-${index}`}
                className="level-indicator"
              />
            ))}
          </div>
        </div>

        <div className="badges-container">
          <p className="badges-heading">Badges</p>
          <ul className="badges-list">
            {badges.map((badge) => (
              <li key={badge.name} className="badge-item">
                <p>{badge.name}</p>
                <img src={badge.img} alt={badge.name} className="badge-img" />
                <p>{badge.scenario}</p>
                <p>Level: {badge.level}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="disconnect-button-container">
          <button
            className="disconnect-button"
            onClick={handleDisconnect}
            type="button"
          >
            Disconnect
          </button>
        </div>
      </div>
    </main>
  );
}

export default Profile;
