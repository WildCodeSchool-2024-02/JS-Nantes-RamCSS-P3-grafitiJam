/* eslint-disable react/prop-types */
import { Circle, Popup } from "react-leaflet";

function GraffitiMarker({ graffiti }) {
  console.warn("C'est quoi graffiti ?", graffiti)
  return (
    <Circle
      center={[graffiti.gpsLat, graffiti.gpsLong]}
      color="red"
      fillColor="#f03"
      fillOpacity={0.5}
      radius={graffiti.zone}
    >
      <Popup>
        <img
          src={graffiti.image}
          alt={graffiti.image_alt}
          style={{ width: "100px" }}
        />
        <br />
        {graffiti.artiste} - {graffiti.style}
      </Popup>
    </Circle>
  );
}

export default GraffitiMarker;


