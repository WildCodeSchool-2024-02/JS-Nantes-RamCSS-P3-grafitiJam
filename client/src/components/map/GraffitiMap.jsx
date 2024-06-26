import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import GraffitiMarker from "./GraffitiMarker";
import ZonePolygon from './ZonePolygon';

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
      <ZonePolygon positions={
        [
          [47.19674,-1.54813], [47.1968,-1.5552], [47.1969,-1.56206], [47.19723,-1.57179], [47.19687,-1.57573], [47.19594,-1.57856], [47.19528,-1.58253], [47.1944,-1.58428], [47.19288,-1.58935], [47.19141,-1.59693], [47.18642,-1.59806], [47.18539,-1.60099], [47.18388,-1.60392], [47.18033,-1.6074], [47.17744,-1.59966], [47.17303,-1.59227], [47.17113,-1.58719], [47.16994,-1.58143], [47.1639,-1.56568], [47.16076,-1.5542], [47.15937,-1.54427], [47.15974,-1.53694], [47.16156,-1.53001], [47.16446,-1.52458], [47.17069,-1.5186], [47.17529,-1.51039], [47.17961,-1.51291], [47.18077,-1.5227], [47.18297,-1.53189], [47.18646,-1.53534], [47.18963,-1.53654], [47.19161,-1.53916], [47.193,-1.54221]
        ]
      } />
    </MapContainer>
  );
}

export default GraffitiMap;
