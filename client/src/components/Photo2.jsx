import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import "./styles/Photo2.css";

// eslint-disable-next-line import/prefer-default-export
export function Photo2() {
  const webcamRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const newImage = {
      src: imageSrc,
      timestamp: new Date(),
      latitude,
      longitude,
    };
    setCapturedImages([newImage, ...capturedImages].slice(0, 3));
  };

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

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const videoConstraints = {
    facingMode: isMobile ? "environment" : "user",
  };

  return (

      <card>
        <Webcam
          className="webcam"
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={capture}>Capture photo</button>

        {capturedImages.map((image, index) => (
            // eslint-disable-next-line react/no-array-index-key
          <div className="reçu" key={index}>
            <img className="prise" src={image.src} alt="Captured" />
            <div className="mapOuter">
              <p>Latitude: {image.latitude}</p>
              <p>Longitude: {image.longitude}</p>
              <p>{image.timestamp.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </card>

  );
}
