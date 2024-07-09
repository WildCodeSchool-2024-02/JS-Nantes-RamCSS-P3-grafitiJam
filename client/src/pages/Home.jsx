import { Link } from "react-router-dom";
import "./styles/home.css";

function Home() {
  return (
    <main className="homepage">
      <div>
        <img
          className="background"
          src={`${import.meta.env.VITE_API_URL}/images/background.png`}
          alt=""
        />
      </div>
      <ul>
        <li>
            <Link to="/terms">
                <img
                    src={`${import.meta.env.VITE_API_URL}/icones/Lexique.svg`}
                    alt="Elements de compréhension"
                />
            </Link>
        </li>
        <li>
            <Link to="/auth">
                <img
                    src={`${import.meta.env.VITE_API_URL}/icones/Auth.svg`}
                    alt="authentification"
                />
            </Link>
        </li>
      </ul>
    </main>
  );
}

export default Home;
