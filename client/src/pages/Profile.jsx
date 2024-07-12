import "./styles/profile.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ConnexionContext } from "../Contextes/ConnexionContexte";

function Profile() {
  const { isConnected, alias, graffitiGeekLevel, userId, handleLogout } =
    useContext(ConnexionContext);
  const navigate = useNavigate();

  const handleDisconnect = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <main>
      <div className="infos-profile-container">
        <div className="alias-container">
          {isConnected && <p className="alias-text">Alias : {alias}</p>}
        </div>

        <div className="geek-level-container">
          <p className="geek-level-text">Geek level</p>
          <div className="level-indicators">
            {Array.from({ length: graffitiGeekLevel }).map(() => (
              <div key={`level-${userId}`} className="level-indicator" />
            ))}
          </div>
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
