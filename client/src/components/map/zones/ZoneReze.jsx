import { Polygon, Popup } from "react-leaflet";

// eslint-disable-next-line react/prop-types
function ZoneReze({ positions }) {
  const handleClick = () => {};

  return (
    <Polygon
      positions={positions}
      color="blue"
      fillColor="blue"
      fillOpacity={0.1}
      onClick={handleClick}
    >
      <Popup>Ici c'est Rezé</Popup>
    </Polygon>
  );
}

export default ZoneReze;
