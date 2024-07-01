import { useState, useEffect } from "react";

import tags from "../tagsData";
import sizeData from "../sizeData";

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
                  {tags.map((tag) => (
                      <option key={tag.title} value={tag.title}>
                          <img src={tag.image} alt={tag.alt}/> {tag.title}
                      </option>
                  ))}
              </select>
          </label>
          <label>
                Size:
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                  {sizeData.map((sizeOption) => (
                      <option key={sizeOption.title} value={sizeOption.title}>
                        <img src={sizeOption.image} alt={sizeOption.alt}/> {sizeOption.title}
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
