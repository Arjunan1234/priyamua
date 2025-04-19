import React from "react";
import "./ImageGallery.scss";

import first from "../../assets/images/imageGallery/image1.png";
import third from "../../assets/images/imageGallery/image2.png";
import image3 from "../../assets/images/imageGallery/image3.png";
import image4 from "../../assets/images/imageGallery/image4.png";
import image5 from "../../assets/images/imageGallery/image5.png";
import second from "../../assets/images/imageGallery/image6.png";
import image7 from "../../assets/images/imageGallery/image7.png";
import image8 from "../../assets/images/imageGallery/image8.png";

// const images = [image1, image5, image2, image6, image3, image7, image4, image8];
const images = [first, third, second, image5, image3, image7, image8, image4];

const ImageGallery = () => {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <div className="gallery-item" key={index}>
          <img
            src={src}
            alt={`Gallery ${index}`}
            style={index === 7 ? { height: "265px", width: "220px" } : {}}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
