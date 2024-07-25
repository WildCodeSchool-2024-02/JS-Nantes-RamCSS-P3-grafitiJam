import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import "./styles/Photo.css";

// Ce composant permet à l'utilisateur de prendre des photos avec sa webcam et d'enregistrer la position géographique au moment de la prise.
function Photographie(props) {
  const webcamRef = useRef(null); // Référence à l'élément Webcam pour accéder à ses méthodes.
  const [capturedImages, setCapturedImages] = useState([]); // Stocke les images capturées, leurs coordonnées et le timestamp.
  const [latitude, setLatitude] = useState(0); // Stocke la latitude actuelle.
  const [longitude, setLongitude] = useState(0); // Stocke la longitude actuelle.
  const [selectedImage, setSelectedImage] = useState(null); // Image sélectionnée par l'utilisateur.

  // Fonction pour capturer une image avec la webcam.
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const newImage = {
      src: imageSrc,
      timestamp: new Date(),
      latitude,
      longitude,
    };
    // Ajoute la nouvelle image au début du tableau et garde seulement les 3 premières images.
    setCapturedImages([newImage, ...capturedImages].slice(0, 3));
  };

  // Récupère la position géographique de l'utilisateur au chargement du composant.
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      console.warn("Geolocation is not supported");
      return;
    }

    geo.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.warn(error);
      }
    );
  }, []);

  // Détermine si l'appareil utilisé est mobile pour ajuster la caméra utilisée.
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const videoConstraints = {
    facingMode: isMobile ? "environment" : "user",
  };

  // Sélectionne une image et passe l'information au composant parent via une fonction passée en props.
  const selectImage = (image) => {
    setSelectedImage(image);
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    props.onImageSelect(image);
  };

  return (
      <main>
        <h1>Photographiez les graffitis </h1>
        <h2>Selectionnez une photo et partagez-la avec la communauté</h2>
        <card>
          <Webcam
              className="webcam"
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
          />
          <button className="capture" onClick={capture} type="button">
            CLICK !
          </button>

          {selectedImage ? (
              <div
                  className="reçu"
                  role="button"
                  tabIndex={0}
                  onClick={() => selectImage(null)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      selectImage(null);
                    }
                  }}
              >
                <img className="prise" src={selectedImage.src} alt="Captured" />
                <div className="mapOuter">
                  <p>Latitude: {selectedImage.latitude}</p>
                  <p>Longitude: {selectedImage.longitude}</p>
                  <p>{selectedImage.timestamp.toLocaleString()}</p>
                </div>
              </div>
          ) : (
              capturedImages.map((image) => (
                  <div
                      className="reçu"
                      key={image.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => selectImage(image)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          selectImage(image);
                        }
                      }}
                  >
                    <img
                        className="prise"
                        src={image.src}
                        alt="Captured"
                        style={{ width: "60%" }}
                    />
                    <div className="mapOuter">
                      <p>Latitude: {image.latitude}</p>
                      <p>Longitude: {image.longitude}</p>
                      <p>{image.timestamp.toLocaleString()}</p>
                    </div>
                  </div>
              ))
          )}
        </card>
      </main>
  );
}

export default Photographie;
