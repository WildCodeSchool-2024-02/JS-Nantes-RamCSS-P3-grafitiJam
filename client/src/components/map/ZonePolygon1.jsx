import { Polygon, Popup } from "react-leaflet";

// eslint-disable-next-line react/prop-types
function ZonePolygon1({ positions }) {
  const handleClick = () => {
    // eslint-disable-next-line no-alert
    alert("Vous avez cliqué sur le polygone");
  };

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

export default ZonePolygon1;
