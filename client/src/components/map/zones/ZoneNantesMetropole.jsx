import { Polygon, Popup } from "react-leaflet";

// eslint-disable-next-line react/prop-types
function ZoneNantesMetropole({ positions }) {
  const handleClick = () => {};

  return (
    <Polygon
      positions={positions}
      color="blue"
      fillColor="blue"
      fillOpacity={0.1}
      onClick={handleClick}
    >
      <Popup>Nantes Metropole</Popup>
    </Polygon>
  );
}

export default ZoneNantesMetropole;
