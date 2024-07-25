import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ConnexionContext } from "../../Contextes/ConnexionContexte";
import tags from "../tagsData";
import sizeData from "../sizeData";
import "./styles/PhotoForm.css";

// Ce composant permet à l'utilisateur de soumettre des informations sur une photo de graffiti, y compris les détails de l'artiste, le style, et la localisation.
// eslint-disable-next-line react/prop-types
function PhotoForm({ selectedImage }) {
  const [artist, setArtist] = useState(""); // État pour stocker le nom de l'artiste.
  const [style, setStyle] = useState(""); // État pour stocker le style du graffiti.
  const [size, setSize] = useState(""); // État pour stocker la taille du graffiti.
  const [stillUp, setStillUp] = useState(false); // État pour indiquer si le graffiti est toujours présent.
  const [graffitiDate, setGraffitiDate] = useState(""); // État pour stocker la date du graffiti.
  const [latitude, setLatitude] = useState(""); // État pour stocker la latitude de l'emplacement du graffiti.
  const [longitude, setLongitude] = useState(""); // État pour stocker la longitude de l'emplacement du graffiti.
  const navigate = useNavigate();
  const { userId } = useContext(ConnexionContext);

  // Fonction pour télécharger l'image sur le serveur.
  const uploadImage = async () => {
    // eslint-disable-next-line react/prop-types
    let response = await fetch(selectedImage.src);
    let data = await response.blob(); // Récupère les données de l'image.
    const metadata = {
      // Crée un objet de métadonnées pour l'image.
      type: "image/jpeg",
    };

    const file = new File([data], "Photo.jpg", metadata); // Crée un fichier à partir des données de l'image.

    const formData = new FormData();
    formData.append("file", file, file.name);

    response = await fetch(`${import.meta.env.VITE_API_URL}/api/upload`, {
      // Envoie le fichier au serveur.
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`message: ${errorMessage}`); // Gère les erreurs.
    }

    data = await response.json(); // Récupère les données de l'image téléchargée.

    return data.filename; // Retourne le nom du fichier téléchargé.
  };

  // Fonction pour envoyer les données du formulaire au serveur.
  const postData = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/art`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };

  // Met à jour les états de latitude, longitude et date du graffiti lorsque l'image sélectionnée change.
  useEffect(() => {
    if (selectedImage) {
      // eslint-disable-next-line react/prop-types
      setLatitude(selectedImage.latitude);
      // eslint-disable-next-line react/prop-types
      setLongitude(selectedImage.longitude);
      const timestamp =
          // eslint-disable-next-line react/prop-types
          selectedImage.timestamp instanceof Date
              ? // eslint-disable-next-line react/prop-types
              selectedImage.timestamp
              : // eslint-disable-next-line react/prop-types
              new Date(selectedImage.timestamp);
      setGraffitiDate(timestamp.toISOString().split("T")[0]);
    }
  }, [selectedImage]);

  // Gère la soumission du formulaire.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const uploadedImageUrl = await uploadImage();
      const formData = {
        userId,
        isVerify: 0,
        imgDate: graffitiDate,
        artist,
        style,
        imgAlt: "photo",
        gpsLat: latitude,
        gpsLong: longitude,
        hoodId: 1,
        size,
        stillUp: stillUp ? 1 : 0,
        verifierBy: "moi",
        graffitiDate,
        zone: 2,
        image: `${import.meta.env.VITE_API_URL}/uploadsPhotos/${uploadedImageUrl}`, // Lien vers l'image téléchargée.
      };
      await postData(formData);
      navigate("/map"); // Redirige l'utilisateur vers la carte.
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
      <card>
        <form className="Vignette" onSubmit={handleSubmit}>
          {/* eslint-disable-next-line react/prop-types */}
          {selectedImage && <img src={selectedImage.src} alt="Selected" />}

          <label>
            Latitude:
            <input type="text" value={latitude} readOnly />
          </label>
          <label>
            Longitude:
            <input type="text" value={longitude} readOnly />
          </label>
          <label>
            Graffiti Date:
            <input type="date" value={graffitiDate} readOnly />
          </label>
          <label>
            Artist:
            <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
            />
          </label>
          <label>
            Style:
            <select value={style} onChange={(e) => setStyle(e.target.value)}>
              {tags.map((tag) => (
                  <option key={tag.title} value={tag.title}>
                    {tag.title}
                  </option>
              ))}
            </select>
          </label>
          <label>
            Size:
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              {sizeData.map((sizeOption) => (
                  <option key={sizeOption.title} value={sizeOption.title}>
                    {sizeOption.title}
                  </option>
              ))}
            </select>
          </label>
          <label>
            Still Up:
            <input
                type="checkbox"
                checked={stillUp}
                onChange={(e) => setStillUp(e.target.checked)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </card>
  );
}

export default PhotoForm;
