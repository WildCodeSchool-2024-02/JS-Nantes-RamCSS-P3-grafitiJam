import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnexionContext } from "../../Contextes/ConnexionContexte";

import "./styles/navbar.css";

function Navbar() {
  const { alias, isAdmin, isConnected, profilePicture } =
    useContext(ConnexionContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              src="http://localhost:3310/assets/icones/toHome.svg"
              alt="Retour à l'accueil"
            />
          </Link>
        </li>
        {isAdmin && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
        <li>
          <Link to="/auth">Auth</Link>
        </li>

        <li>
          <Link to="/terms">Terms</Link>
        </li>
        <li>
          <Link to="/map">
            <img
              src="http://localhost:3310/assets/icones/Map.svg"
              alt="Carte des oeuvres de street art"
            />
          </Link>
        </li>
        {isConnected && (
          <li>
            <Link to="/photo">
              <img
                src="http://localhost:3310/assets/icones/Photo.svg"
                alt="Capture une oeuvre de street art"
              />
            </Link>
          </li>
        )}

        {alias && (
          <li className="greeting">
            <Link to="/profile">
              <img
                src={profilePicture}
                alt={`${alias}'s avatar`}
                className="profile-picture"
              />
            </Link>
            <span className="alias">{alias}</span>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
