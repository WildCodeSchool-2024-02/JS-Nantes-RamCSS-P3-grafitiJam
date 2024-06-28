import { Link } from "react-router-dom";
import "./styles/home.css";


function Home() {
  return (
    <main className="homepage">
      <div>
        <img
          className="background"
          src="http://localhost:3310/assets/images/background.png"
          alt=""
        />
      </div>
      <ul>
        <li>
          <Link to="/terms">Terms</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
      </ul>
    </main>
  );
}

export default Home;
