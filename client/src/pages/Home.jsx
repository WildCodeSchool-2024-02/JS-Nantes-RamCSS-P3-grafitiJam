import { Link } from "react-router-dom";
import "./styles/home.css";

function Home() {
  return (
    <main className="homepage">
      <section className="pres">
        <h1 className="titre">GRAFFITI JAM</h1>

        <p>
          Découvrez "Graffiti Jam", l'application innovante dédiée à la chasse
          aux graffitis dans la magnifique ville de Nantes. GraffNantes permet
          aux passionnés d'art urbain de découvrir, partager et immortaliser les
          œuvres de street art qui embellissent notre ville. Grâce à une
          interface conviviale, les utilisateurs peuvent facilement prendre des
          photos des graffitis qu'ils rencontrent et les ajouter à notre base de
          données collaborative.
        </p>
        <p>
          Chaque graffiti est géolocalisé et enrichi des contributions de la
          communauté, permettant ainsi de créer une carte interactive de l'art
          urbain à Nantes. Que vous soyez un amateur d'art, un photographe ou
          simplement curieux, GraffNantes vous offre une nouvelle manière
          d'explorer la ville tout en participant à la valorisation de son
          patrimoine artistique. Rejoignez-nous et faites partie de cette
          aventure collective en téléchargeant GraffNantes dès aujourd'hui!
        </p>
      </section>

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
