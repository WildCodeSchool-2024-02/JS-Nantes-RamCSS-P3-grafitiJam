
// eslint-disable-next-line import/extensions
import { Photo } from "../components/Photo.jsx";

import GraffitiMap from "../components/GraffitiMap";



function Home() {
  return (
    <main>
      <h1>WELCOME HOME</h1>





      {/* <div id="map" style={{ height: "180px" }} /> */}

      <GraffitiMap />
      <Photo />

    </main>
  );
}

export default Home;
