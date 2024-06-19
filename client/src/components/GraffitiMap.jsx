import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Circle,
} from "react-leaflet";

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
    zone: 1,
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
    zone: 1,
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
    zone: 1,
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
    zone: 1,
  },
];

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

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
      <Circle
        center={[47.241, -1.544]}
        color="red"
        fillColor="#f03"
        fillOpacity={0.5}
        radius={50}
      />
      <Marker position={[47.21151635589489, -1.5475728604681398]}>
        <Popup>Wild Code School - you can customize this popup</Popup>
      </Marker>
      {art.map((graffiti, id) => (
        // eslint-disable-next-line react/no-array-index-key
        <Marker key={id} position={[graffiti.gps_lat, graffiti.gps_long]}>
          <Popup>
            <img
              src={graffiti.image}
              alt={graffiti.image_alt}
              style={{ width: "100px" }}
            />
            <br />
            {graffiti.artiste} - {graffiti.style}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default GraffitiMap;
