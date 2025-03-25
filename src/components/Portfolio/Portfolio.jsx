import React from "react";
import "./portfolio.scss";
import ImageGallery from "../ImageGallery/ImageGallery";
import FadeUp from "../../utils/FadeUp";
const Portfolio = () => {
  return (
    <section className="container portfolioContainer" id="portfolio">
      <div className="portfolioHeading">
        <FadeUp>
          <p>PORTFOLIO</p>
        </FadeUp>
        <FadeUp>
          <h5>Discover the Art of Transformation</h5>
        </FadeUp>
        <FadeUp>
          <span>
            Browse through a curated gallery of my favorite creations,
            showcasing the versatility and precision of my makeup artistry. From
            subtle elegance to bold statements - every look tells a story.
          </span>
        </FadeUp>
      </div>
      <ImageGallery />
    </section>
  );
};

export default Portfolio;
