import Photographie from "../components/photo/photographie";
import script from "../scripts/script.json";

function Photo() {
  return (
    <>
      <h1>{script.photo.title}</h1>
      <Photographie />
    </>
  );
}

export default Photo;
