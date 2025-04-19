import React from "react";
import rightArrow from "../../assets/images/form/rightArrow.svg";

import "./banner.scss";
import FadeUp from "../../utils/FadeUp";
const Banner = ({ image, heading, content }) => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="container bannerContainer"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="bannerContent">
        <FadeUp>
          <h2>{heading}</h2>
        </FadeUp>
        <FadeUp>
          <p>{content}</p>
        </FadeUp>
      </div>
      <button type="submit" className="submitbutton" onClick={scrollToForm}>
        <FadeUp>Book Your Dream Look Today!</FadeUp>
        <img src={rightArrow} alt="" />
      </button>
    </section>
  );
};

export default Banner;
