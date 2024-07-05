import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from 'react';

import LocationMarker from "./LocationMarker";
import GraffitiMarker from "./GraffitiMarker";
import ZonePolygon1 from "./ZonePolygon1";
import ZonePolygon2 from "./ZonePolygon2";
import ZonePolygon3 from "./ZonePolygon3";

function GraffitiMap() {
    const [graffitis, setGraffitis] = useState([]);

    console.warn("Nature de graffiti", graffitis);


    // const [isLoading, setIsLoading] = useState(true);


    /* const fetchGraffitis = async () => {
        try {
            const response = await axios.get('http://localhost:3310/api/art');
            console.log("API Response:", response.data);

            if (response.status === 200) {
                response.data.forEach(item => console.log('Item avant filtrage:', item));

                 const validData = response.data.filter(item => {
                     const isValid = item.gps_lat != null &&
                         item.gps_long != null &&
                         item.zone != null &&
                         item.image != null &&
                         item.image_alt != null;

                     console.log(`Filtrage pour l'item ${item.id} - valide: ${isValid}`, item);
                     return isValid;
                 });



                setGraffitis(response.data);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des graffitis:", error);
        }
    };


    */
    useEffect(() => {
       fetch('http://localhost:3310/api/art')
           .then((res) => res.json())
           .then((data) => setGraffitis(data));
    }, []);

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


      <ZonePolygon1
        positions={[
          [47.19674, -1.54813],
          [47.1968, -1.5552],
          [47.1969, -1.56206],
          [47.19723, -1.57179],
          [47.19687, -1.57573],
          [47.19594, -1.57856],
          [47.19528, -1.58253],
          [47.1944, -1.58428],
          [47.19288, -1.58935],
          [47.19141, -1.59693],
          [47.18642, -1.59806],
          [47.18539, -1.60099],
          [47.18388, -1.60392],
          [47.18033, -1.6074],
          [47.17744, -1.59966],
          [47.17303, -1.59227],
          [47.17113, -1.58719],
          [47.16994, -1.58143],
          [47.1639, -1.56568],
          [47.16076, -1.5542],
          [47.15937, -1.54427],
          [47.15974, -1.53694],
          [47.16156, -1.53001],
          [47.16446, -1.52458],
          [47.17069, -1.5186],
          [47.17529, -1.51039],
          [47.17961, -1.51291],
          [47.18077, -1.5227],
          [47.18297, -1.53189],
          [47.18646, -1.53534],
          [47.18963, -1.53654],
          [47.19161, -1.53916],
          [47.193, -1.54221],
        ]}
      />
      <ZonePolygon2
        positions={[
          [47.26735, -1.56255],
          [47.26753, -1.57225],
          [47.26724, -1.57817],
          [47.2663, -1.58315],
          [47.26514, -1.58847],
          [47.26345, -1.60615],
          [47.25783, -1.621],
          [47.24849, -1.62036],
          [47.23846, -1.62355],
          [47.23418, -1.62513],
          [47.22849, -1.62069],
          [47.22147, -1.6214],
          [47.21545, -1.62545],
          [47.21098, -1.6267],
          [47.2077, -1.6257],
          [47.20203, -1.62073],
          [47.19368, -1.61276],
          [47.19321, -1.60096],
          [47.19496, -1.59077],
          [47.19933, -1.57348],
          [47.19919, -1.54939],
          [47.19527, -1.5437],
          [47.19016, -1.53604],
          [47.1855, -1.5341],
          [47.18259, -1.52919],
          [47.18102, -1.51866],
          [47.17976, -1.51185],
          [47.1761, -1.51051],
          [47.18792, -1.49439],
          [47.18924, -1.50951],
          [47.18983, -1.51861],
          [47.19266, -1.52809],
          [47.19992, -1.53449],
          [47.20275, -1.5359],
          [47.20498, -1.52906],
          [47.21531, -1.51465],
          [47.22712, -1.48307],
          [47.23302, -1.47449],
          [47.24576, -1.49801],
          [47.25318, -1.51543],
          [47.25805, -1.55521],
          [47.26294, -1.55854],
        ]}
      />
      <ZonePolygon3
        positions={[
          [47.20068, -1.53406],
          [47.19281, -1.52749],
          [47.1898, -1.5188],
          [47.18808, -1.49406],
          [47.19371, -1.48816],
          [47.19658, -1.48602],
          [47.1998, -1.48457],
          [47.20279, -1.48403],
          [47.2059, -1.48416],
          [47.21124, -1.48538],
          [47.21421, -1.48109],
          [47.21604, -1.47921],
          [47.21694, -1.48041],
          [47.21651, -1.48513],
          [47.21419, -1.49376],
          [47.21461, -1.49644],
          [47.21313, -1.50825],
          [47.21209, -1.51347],
          [47.20878, -1.51883],
          [47.20747, -1.51868],
          [47.20518, -1.52289],
          [47.20387, -1.52689],
        ]}
      />
        {graffitis.map((graffiti) => (
            <GraffitiMarker key={graffiti.id} graffiti={graffiti} />
        ))}

    </MapContainer>
        );

}



export default GraffitiMap;
