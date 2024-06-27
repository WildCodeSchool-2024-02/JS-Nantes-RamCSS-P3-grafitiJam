import { Link } from "react-router-dom";
import "../pages/styles/navbar.css"
/* import GallerieIcon from "../../../server/public/assets/icones/Gallerie.svg";
import MapIcon from "../../../server/public/assets/icones/Map.svg";
import PhotoIcon from "../../../server/public/assets/icones/Photo.svg";
import ToHomeIcon from "../../../server/public/assets/icones/toHome.svg"; */

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/auth">Auth</Link></li>
        {/* <li><Link to="/profile">Profile</Link></li> */}
        <li><Link to="/terms">Terms</Link></li>
 
        {/* <li><Link to="/map"><img src={MapIcon} alt="Map" /></Link></li> */}
        {/* <li><Link to="/photo"><img src={PhotoIcon} alt="Photo" /></Link></li> */}
        {/* <li><Link to="/galerie"><img src={GallerieIcon} alt="Gallerie" /></Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
