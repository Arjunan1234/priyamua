
import React from "react";
import "./ImageGallery.scss";

import image1 from "../../assets/images/imageGallery/image1.png";
import image2 from "../../assets/images/imageGallery/image2.png";
import image3 from "../../assets/images/imageGallery/image3.png";
import image4 from "../../assets/images/imageGallery/image4.png";
import image5 from "../../assets/images/imageGallery/image5.png";
import image6 from "../../assets/images/imageGallery/image6.png";
import image7 from "../../assets/images/imageGallery/image7.png";
import image8 from "../../assets/images/imageGallery/image8.png";

const images = [image1, image5, image2, image6, image3, image7, image4, image8];

const ImageGallery = () => {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <div className="gallery-item" key={index}>
          <img src={src} alt={`Gallery ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
