import React from "react";
import "./portfolio.scss";
import ImageGallery from "../ImageGallery/ImageGallery";
const Portfolio = () => {
  return (
    <section className="container portfolioContainer">
      <div className="portfolioHeading">
        <p>PORTFOLIO</p>
        <h5>Discover the Art of Transformation</h5>
        <span>
          Browse through a curated gallery of my favorite creations, showcasing
          the versatility and precision of my makeup artistry. From subtle
          elegance to bold statements - every look tells a story.
        </span>
      </div>
      <ImageGallery />
    </section>
  );
};

export default Portfolio;
