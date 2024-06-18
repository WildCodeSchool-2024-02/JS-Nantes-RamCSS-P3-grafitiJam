import GraffitiMap from "../components/GraffitiMap";
import { Photo2 } from "../components/Photo2";

function Home() {
  return (
    <main>
      <h1>WELCOME HOME</h1>
      {/* <div id="map" style={{ height: "180px" }} /> */}

      <GraffitiMap />
      <Photo2 />
    </main>
  );
}

export default Home;
