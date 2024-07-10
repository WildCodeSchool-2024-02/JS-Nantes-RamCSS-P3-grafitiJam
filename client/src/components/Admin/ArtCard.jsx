/* eslint-disable react/prop-types */
import "./styles/artCard.css";

function ArtCard({ art, onVerify }) {
  const {
    id,
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
    isVerify, // Ensure this is the correct property
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
        <p>Status: {isVerify ? "Verified" : "Not Verified"}</p>
        {!isVerify && (
          <button type="button" onClick={() => onVerify(id)}>
            Verify
          </button>
        )}
      </div>
    </div>
  );
}

export default ArtCard;
