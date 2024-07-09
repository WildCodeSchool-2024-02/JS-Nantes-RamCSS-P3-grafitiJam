/* eslint-disable react/prop-types */

import "./styles/artCard.css"; // Define your styles for ArtCard

function ArtCard({ art }) {
  const {
    artist,
    style,
    image,
    imageAlt,
    gpsLat,
    gpsLong,
    size,
    stillUp,
    verifierBy,
    graffitiDate,
    zone,
  } = art;

  return (
    <div className="art-card">
      <img src={image} alt={imageAlt} className="art-image" />
      <div className="art-info">
        <h3>{artist}</h3>
        <p>Style: {style}</p>
        <p>
          Location: {gpsLat}, {gpsLong}
        </p>
        <p>Size: {size}</p>
        <p>Still Up: {stillUp ? "Yes" : "No"}</p>
        <p>Verified By: {verifierBy}</p>
        <p>Graffiti Date: {graffitiDate}</p>
        <p>Zone: {zone}</p>
      </div>
    </div>
  );
}

export default ArtCard;
