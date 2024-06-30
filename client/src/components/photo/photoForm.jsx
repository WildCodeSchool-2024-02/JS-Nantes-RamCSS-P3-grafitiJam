import { useState, useEffect } from "react";

import "./styles/PhotoForm.css";

// eslint-disable-next-line react/prop-types
function PhotoForm({ selectedImage, onSubmit }) {
  const [artist, setArtist] = useState("");
  const [style, setStyle] = useState("");
  const [size, setSize] = useState("");
  const [stillUp, setStillUp] = useState(false);
  const [graffitiDate, setGraffitiDate] = useState("");
  const [zone, setZone] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [styles, setStyles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/style") // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setStyles(data));
  }, []);

  useEffect(() => {
    if (selectedImage) {
      // eslint-disable-next-line react/prop-types
      setLatitude(selectedImage.latitude);
      // eslint-disable-next-line react/prop-types
      setLongitude(selectedImage.longitude);
      // eslint-disable-next-line react/prop-types
      setGraffitiDate(selectedImage.timestamp.toISOString().split("T")[0]);
    }
  }, [selectedImage]);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      // eslint-disable-next-line react/prop-types
      image: selectedImage.src,
      image_alt: "Graffiti Art",
      gps_lat: latitude,
      gps_long: longitude,
      artist,
      style,
      size,
      still_up: stillUp,
      graffiti_date: graffitiDate,
      zone,
    });
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
            {styles.map((styleOption) => (
              <option key={styleOption.id} value={styleOption.name}>
                {styleOption.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Size:
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
        <label>
          Still Up:
          <input
            type="checkbox"
            checked={stillUp}
            onChange={(e) => setStillUp(e.target.checked)}
          />
        </label>
        <label>
          Zone:
          <input
            type="number"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </card>
  );
}

export default PhotoForm;
