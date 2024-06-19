import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import GraffitiMarker from "./GraffitiMarker";

const art = [
  {
    id: 1,
    is_verify: true,
    img_date: "2020-07-01",
    artiste: "Banksy",
    style: "Stencil",
    image:
      "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff1.JPG",
    image_alt: "Banksy",
    gps_lat: 47.2566,
    gps_long: -1.5482,
    hood_id: 1,
    size: "M",
    still_up: true,
    verifier_by: "John Doe",
    graffiti_date: "2020-07-01",
    zone: 150,
  },
  {
    id: 2,
    is_verify: true,
    img_date: "2020-07-01",
    artiste: "Banksy",
    style: "Stencil",
    image:
      "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff2.png",
    image_alt: "Banksy",
    gps_lat: 47.2157,
    gps_long: -1.5985,
    hood_id: 1,
    size: "M",
    still_up: true,
    verifier_by: "John Doe",
    graffiti_date: "2020-07-01",
    zone: 75,
  },
  {
    id: 3,
    is_verify: true,
    img_date: "2020-07-01",
    artiste: "Banksy",
    style: "Stencil",
    image:
      "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff3.jpg",
    image_alt: "Banksy",
    gps_lat: 47.2415,
    gps_long: -1.5725,
    hood_id: 1,
    size: "M",
    still_up: true,
    verifier_by: "John Doe",
    graffiti_date: "2020-07-01",
    zone: 100,
  },
  {
    id: 4,
    is_verify: true,
    img_date: "2020-07-01",
    artiste: "Banksy",
    style: "Stencil",
    image:
      "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/images/graff4.jpg",
    image_alt: "Banksy",
    gps_lat: 47.2664,
    gps_long: -1.5172,
    hood_id: 1,
    size: "M",
    still_up: true,
    verifier_by: "John Doe",
    graffiti_date: "2020-07-01",
    zone: 50,
  },
];

function GraffitiMap() {
  return (
    <MapContainer
      center={{ lat: 47.2184, lng: -1.5536 }}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "450px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      <Marker position={[47.21151635589489, -1.5475728604681398]}>
        <Popup>Wild Code School - you can customize this popup</Popup>
      </Marker>
      {art.map((graffiti) => (
        <GraffitiMarker key={graffiti.id} graffiti={graffiti} />
      ))}
    </MapContainer>
  );
}

export default GraffitiMap;
