import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import "./styles/Photo.css";

function Photographie(props) {
  const webcamRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const selectImage = (image) => {
    setSelectedImage(image);
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    props.onImageSelect(image);
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
      <button className="capture" onClick={capture}>
        CLICK !
      </button>

      {selectedImage ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className="reçu" onClick={() => selectImage(null)}>
          <img className="prise" src={selectedImage.src} alt="Captured" />
          <div className="mapOuter">
            <p>Latitude: {selectedImage.latitude}</p>
            <p>Longitude: {selectedImage.longitude}</p>
            <p>{selectedImage.timestamp.toLocaleString()}</p>
          </div>
        </div>
      ) : (
        capturedImages.map((image, index) => (
          // eslint-disable-next-line react/no-array-index-key,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div className="reçu" key={index} onClick={() => selectImage(image)}>
            <img
              className="prise"
              src={image.src}
              alt="Captured"
              style={{ width: "100px" }}
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
  );
}

export default Photographie;
