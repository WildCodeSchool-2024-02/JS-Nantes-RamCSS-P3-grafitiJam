import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

import LocationMarker from "./LocationMarker";
import GraffitiMarker from "./GraffitiMarker";
import ZoneReze from "./zones/ZoneReze";
import ZoneNantes from "./zones/ZoneNantes";
import ZoneStSebastien from "./zones/ZoneStSebastien";
import ZoneNantesMetropole from "./zones/ZoneNantesMetropole";

function GraffitiMap() {
  const [graffitis, setGraffitis] = useState([]);

  useEffect(() => {
    const fetchGraffitiData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/art?verify=true`);
        const data = await response.json();
        // eslint-disable-next-line no-use-before-define
        const adjustedData = adjustGraffitiPositions(data);
        setGraffitis(adjustedData);
      } catch (error) {
        console.error("Failed to fetch graffiti data:", error);
      }
    };

    // eslint-disable-next-line no-shadow
    const adjustGraffitiPositions = (graffitis) => {
      const OFFSET = 0.00005; // Offset pour éviter les superpositions
      const adjustedGraffitis = [];

      graffitis.forEach((newGraffiti) => {
        while (
          adjustedGraffitis.some(
            (existingGraffiti) =>
              existingGraffiti.gpsLat === newGraffiti.gpsLat &&
              existingGraffiti.gpsLong === newGraffiti.gpsLong
          )
        ) {
          // eslint-disable-next-line no-param-reassign
          newGraffiti.gpsLat += OFFSET;
          // eslint-disable-next-line no-param-reassign
          newGraffiti.gpsLong += OFFSET;
        }
        adjustedGraffitis.push(newGraffiti);
      });

      return adjustedGraffitis;
    };

    fetchGraffitiData();
    const intervalId = setInterval(fetchGraffitiData, 10000); // Mise à jour toutes les 10 secondes

    return () => clearInterval(intervalId);
  }, []);

  /*
    const adjustGraffitiPositions = (graffitis) => {
        let adjustedGraffitis = [];

        graffitis.forEach((newGraffiti) => {
            while (adjustedGraffitis.some(existingGraffiti => existingGraffiti.gpsLat === newGraffiti.gpsLat && existingGraffiti.gpsLong === newGraffiti.gpsLong)) {
                const randomOffsetLat = Math.random() * 0.0001 - 0.00005;
                const randomOffsetLng = Math.random() * 0.0001 - 0.00005;
                newGraffiti.gpsLat += randomOffsetLat;
                newGraffiti.gpsLong += randomOffsetLng;
            }
            adjustedGraffitis.push(newGraffiti);
        });

        return adjustedGraffitis;
    };
    */

  return (
    <MapContainer
      center={{ lat: 47.2184, lng: -1.5536 }}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: "450px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ZoneNantesMetropole
        positions={[
          [47.32719, -1.55088],
          [47.27061, -1.69284],
          [47.20465, -1.78811],
          [47.13422, -1.61877],
          [47.12633, -1.52633],
          [47.1442, -1.46505],
          [47.23603, -1.32669],
          [47.30909, -1.36754],
          [47.31451, -1.47672],
        ]}
      />
      <LocationMarker />

      <ZoneReze
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
      <ZoneNantes
        positions={[
          [47.2465, -1.57732],
          [47.24317, -1.58513],
          [47.23914, -1.58916],
          [47.23563, -1.58384],
          [47.23001, -1.59002],
          [47.23158, -1.59242],
          [47.22904, -1.59784],
          [47.22509, -1.60258],
          [47.2214, -1.60313],
          [47.21425, -1.6068],
          [47.20442, -1.61493],
          [47.19342, -1.61825],
          [47.19101, -1.64027],
          [47.1896, -1.63208],
          [47.18853, -1.63111],
          [47.18699, -1.62773],
          [47.18503, -1.62287],
          [47.18413, -1.60917],
          [47.18423, -1.60588],
          [47.18526, -1.60346],
          [47.18698, -1.59826],
          [47.19117, -1.59386],
          [47.19798, -1.57496],
          [47.19756, -1.55879],
          [47.19734, -1.54932],
          [47.19537, -1.54995],
          [47.19327, -1.54923],
          [47.19455, -1.54433],
          [47.19082, -1.53719],
          [47.18865, -1.536],
          [47.18624, -1.5348],
          [47.18302, -1.53147],
          [47.18182, -1.52551],
          [47.18075, -1.51807],
          [47.18296, -1.51692],
          [47.18377, -1.51609],
          [47.1856, -1.51721],
          [47.18686, -1.51756],
          [47.18753, -1.51649],
          [47.18611, -1.51425],
          [47.18727, -1.51278],
          [47.18843, -1.51445],
          [47.18948, -1.51374],
          [47.18977, -1.51896],
          [47.19196, -1.52561],
          [47.19451, -1.52584],
          [47.19649, -1.52475],
          [47.19625, -1.5279],
          [47.19724, -1.53111],
          [47.19855, -1.52867],
          [47.19946, -1.52832],
          [47.20026, -1.52677],
          [47.20268, -1.52908],
          [47.20384, -1.52964],
          [47.20604, -1.52556],
          [47.20918, -1.52024],
          [47.21337, -1.51612],
          [47.2157, -1.51431],
          [47.21732, -1.51062],
          [47.22174, -1.49487],
          [47.22523, -1.48356],
          [47.22767, -1.47929],
          [47.23449, -1.48599],
          [47.24408, -1.48629],
          [47.24877, -1.4926],
          [47.25028, -1.49353],
          [47.25051, -1.49531],
          [47.25488, -1.4969],
          [47.25663, -1.49649],
          [47.25761, -1.49411],
          [47.2609, -1.49413],
          [47.26221, -1.49502],
          [47.25776, -1.50696],
          [47.26053, -1.50922],
          [47.26349, -1.50756],
          [47.26672, -1.51358],
          [47.27536, -1.50819],
          [47.27601, -1.51326],
          [47.27678, -1.51567],
          [47.28016, -1.51413],
          [47.28296, -1.51153],
          [47.28633, -1.50933],
          [47.28837, -1.50813],
          [47.29271, -1.50837],
          [47.29485, -1.50926],
          [47.29379, -1.51247],
          [47.29542, -1.51702],
          [47.29507, -1.51883],
          [47.29367, -1.52176],
          [47.29454, -1.52624],
          [47.29457, -1.5283],
          [47.29309, -1.53208],
          [47.28265, -1.52679],
          [47.27791, -1.52715],
          [47.2724, -1.53167],
          [47.26906, -1.53657],
          [47.26494, -1.53745],
          [47.2609, -1.53647],
          [47.25748, -1.5376],
          [47.25483, -1.54055],
          [47.25474, -1.55019],
          [47.25862, -1.55503],
          [47.26293, -1.55466],
          [47.26556, -1.55859],
          [47.27027, -1.55875],
          [47.26993, -1.56412],
          [47.27168, -1.56779],
          [47.27273, -1.57975],
          [47.27368, -1.59222],
          [47.26604, -1.58695],
          [47.25331, -1.57607],
        ]}
      />
      <ZoneStSebastien
        positions={[
          [47.22488, -1.48187],
          [47.22049, -1.49615],
          [47.21599, -1.50939],
          [47.21387, -1.51253],
          [47.21033, -1.51762],
          [47.20756, -1.52041],
          [47.20319, -1.52993],
          [47.2001, -1.52659],
          [47.1997, -1.52804],
          [47.19866, -1.52838],
          [47.19716, -1.53095],
          [47.19613, -1.52743],
          [47.1965, -1.52425],
          [47.19437, -1.52518],
          [47.19179, -1.52526],
          [47.18972, -1.51852],
          [47.18802, -1.49251],
          [47.18703, -1.4762],
          [47.1884, -1.47393],
          [47.19004, -1.47296],
          [47.19314, -1.47471],
          [47.19536, -1.47689],
          [47.19816, -1.47578],
          [47.20038, -1.47565],
          [47.20125, -1.47661],
          [47.2016, -1.47809],
          [47.2034, -1.47912],
          [47.20595, -1.47861],
          [47.20751, -1.4811],
          [47.21197, -1.48157],
          [47.21176, -1.4841],
          [47.21342, -1.48318],
          [47.21456, -1.48406],
          [47.2162, -1.48264],
          [47.21692, -1.48427],
          [47.22154, -1.4811],
        ]}
      />
      {graffitis.map((graffiti) => (
        <GraffitiMarker key={graffiti.id} graffiti={graffiti} />
      ))}
    </MapContainer>
  );
}

export default GraffitiMap;
