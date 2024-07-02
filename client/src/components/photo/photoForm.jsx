import { useState, useEffect } from "react";

import tags from "../tagsData";
import sizeData from "../sizeData";

import "./styles/PhotoForm.css";

// eslint-disable-next-line react/prop-types
function PhotoForm({ selectedImage }) {
  const [artist, setArtist] = useState("");
  const [style, setStyle] = useState("");
  const [size, setSize] = useState("");
  const [stillUp, setStillUp] = useState(false);
  const [graffitiDate, setGraffitiDate] = useState("");
  const [zone, setZone] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");


  const postData = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/art`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  };

  useEffect(() => {
    if (selectedImage) {
      // eslint-disable-next-line react/prop-types
      setLatitude(selectedImage.latitude);
      // eslint-disable-next-line react/prop-types
      setLongitude(selectedImage.longitude);
      // eslint-disable-next-line react/prop-types
      const timestamp = selectedImage.timestamp instanceof Date ? selectedImage.timestamp : new Date(selectedImage.timestamp);
      setGraffitiDate(timestamp.toISOString().split("T")[0]);
    }
  }, [selectedImage]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      userId: 2,
      isVerify: 1,
      imgDate: graffitiDate,
      artist,
      style,
      imgAlt: "photo",
      gpsLat: latitude,
      gpsLong: longitude,
      hoodId: 1,
      size,
      stillUp: stillUp ? 1 : 0,
      verifierBy: "John Doe",
      graffitiDate,
      zone: parseInt(zone, 10),
    };

    postData(formData)
        .then(data => {
          console.warn(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    const photoData = new FormData();
    console.warn(selectedImage);
    // eslint-disable-next-line react/prop-types
    photoData.append('image', selectedImage, selectedImage.name);
    fetch(`${import.meta.env.VITE_API_URL}/api/upload`, {
      method: 'POST',
      body: photoData,
    })
        .then(response => response.json())
        .then(data => {
          console.warn(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  };


  return (
    <card>
      <form className="Vignette" onSubmit={handleSubmit}>
        {/* eslint-disable-next-line react/prop-types */}
        {selectedImage && <img src={selectedImage.src} alt="Selected"/>}

        <label>
          Latitude:
          <input type="text" value={latitude} readOnly/>
        </label>
        <label>
          Longitude:
          <input type="text" value={longitude} readOnly/>
        </label>
        <label>
          Graffiti Date:
          <input type="date" value={graffitiDate} readOnly/>
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
