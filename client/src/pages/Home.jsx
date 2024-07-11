import { Link } from "react-router-dom";
import "./styles/home.css";

function Home() {
  return (
    <main className="homepage">
      <section className="pres">
        <h1 className="titre">GRAFFITI JAM</h1>

        <p>
          Découvrez "Graffiti Jam", partez à la chasse aux graffitis dans la
          magnifique ville de Nantes. Graffiti Jam permet aux passionnés d'art
          urbain de découvrir, partager et immortaliser les œuvres éphémères qui
          colorent notre ville. Grâce à une interface conviviale, les
          utilisateurs peuvent facilement prendre des photos des graffitis
          qu'ils rencontrent et les ajouter à notre base de données
          collaborative.
        </p>
        <p>
          Chaque graffiti est géolocalisé et enrichi des contributions de la
          communauté, permettant ainsi de créer une carte interactive de l'art
          urbain à Nantes. Que vous soyez un amateur d'art, un photographe ou
          simplement curieux, Graffiti Jam vous offre une nouvelle manière
          d'explorer la ville tout en participant à la valorisation de son
          patrimoine artistique. Rejoignez-nous et faites partie de cette
          aventure collective en téléchargeant GraffNantes dès aujourd'hui!
        </p>
      </section>

      <section className="lexique">
        <p>Vous trouverez ici, des infos sur l'appli.</p>
        <li>
          <Link to="/terms">
            <img
              src={`${import.meta.env.VITE_API_URL}/icones/Lexique.svg`}
              alt="Elements de compréhension"
            />
          </Link>
        </li>
      </section>

      <section className="auth">
        <p>
          Connectez-vous pour accéder à votre compte et profiter pleinement de
          l'expérience Graffiti Jam.
        </p>
        <li>
          <Link to="/auth">
            <img
              src={`${import.meta.env.VITE_API_URL}/icones/Auth.svg`}
              alt="authentification"
            />
          </Link>
        </li>
      </section>
    </main>
  );
}

export default Home;
