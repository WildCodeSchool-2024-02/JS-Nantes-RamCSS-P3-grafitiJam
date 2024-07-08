import { Polygon, Popup } from "react-leaflet";

// eslint-disable-next-line react/prop-types
function ZonePolygon1({ positions }) {
  const handleClick = () => {
  };

  return (
    <Polygon
      positions={positions}
      color="yellow"
      fillColor="yellow"
      fillOpacity={0.1}
      onClick={handleClick}
    >
      <Popup>Voilà St Sebastien/Loire</Popup>
    </Polygon>
  );
}

export default ZonePolygon1;
