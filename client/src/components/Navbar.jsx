import { Link } from "react-router-dom";

import "../pages/styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li className="left-item">
          <Link to="/profile">Profil</Link>
        </li>
        <li>
          <Link to="/">
            {" "}
            <img
              src="http://localhost:3310/assets/icones/toHome.svg"
              alt="Retour à l'accueil"
            />
          </Link>
        </li>
        <li>
          <Link to="/galerie">
            <img
              src="http://localhost:3310/assets/icones/Gallerie.svg"
              alt="Gallerie des oeuvres de street art"
            />
          </Link>
        </li>
        <li>
          <Link to="/photo">
            <img
              src="http://localhost:3310/assets/icones/Photo.svg"
              alt="Capture une oeuvre de street art"
            />
          </Link>
        </li>
        <li>
          <Link to="/map">
            <img
              src="http://localhost:3310/assets/icones/Map.svg"
              alt="Carte des oeuvres de street art"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
