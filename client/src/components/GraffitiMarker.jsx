/* eslint-disable react/prop-types */
import { Circle, Popup } from "react-leaflet";

function GraffitiMarker({ graffiti }) {
  return (
    <Circle
      center={[graffiti.gps_lat, graffiti.gps_long]}
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
