import { useContext } from 'react';
import { Link } from "react-router-dom";
import { ConnexionContext } from '../Contextes/ConnexionContexte';

import "../pages/styles/navbar.css";

function Navbar() {
  const { alias } = useContext(ConnexionContext);

  console.warn(alias);

  return (
      <nav>
        <ul>
          <li><Link to="/"> <img src="http://localhost:3310/assets/icones/toHome.svg" alt="Retour à l'accueil" /></Link></li>
          <li><Link to="/auth">Auth</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/terms">Terms</Link></li>
          <li><Link to="/map"><img src="http://localhost:3310/assets/icones/Map.svg" alt="Carte des oeuvres de street art" /></Link></li>
          <li><Link to="/photo"><img src="http://localhost:3310/assets/icones/Photo.svg" alt="Capture une oeuvre de street art" /></Link></li>
          <li><Link to="/galerie"><img src="http://localhost:3310/assets/icones/Gallerie.svg" alt="Gallerie des oeuvres de street art" /></Link></li>
          {alias && <li>Bonjour, {alias}</li>}
        </ul>
      </nav>
  );
}

export default Navbar;
