import { useState } from "react";

import Photographie from "../components/photo/photographie";
import PhotoForm from "../components/photo/photoForm";

function Photo() {
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setShowForm(true);
  };

  return (
    <div>
      {showForm ? (
        <PhotoForm selectedImage={selectedImage} />
      ) : (
        <Photographie onImageSelect={handleImageSelect} />
      )}
    </div>
  );
}

export default Photo;
