import React from "react";

import choose from "../../assets/images/choose/choose.png";
import chooseMobile from "../../assets/images/choose/chooseMobile.png";

import top from "../../assets/images/choose/top.svg";
import available from "../../assets/images/choose/available.svg";
import certified from "../../assets/images/choose/certified.svg";
import custome from "../../assets/images/choose/custome.svg";
import premium from "../../assets/images/choose/premium.svg";
import "./chooseMe.scss";
import FadeUp from "../../utils/FadeUp";
import { useMediaQuery } from "react-responsive";

const chooseItems = [
  {
    id: 1,
    image: top,
    text: "Top-Rated Bridal & Party Makeup Artist in Dwarka",
  },
  {
    id: 2,
    image: certified,
    text: "Certified Makeup Professional with 6+ Years of Experience",
  },
  {
    id: 3,
    image: custome,
    text: "Customized Makeup Looks for Every Skin Type & Occasion",
  },
  {
    id: 4,
    image: premium,
    text: "Premium Brands Used - MAC, Huda Beauty, Estee Lauder, Charlotte Tilbury",
  },
  {
    id: 5,
    image: available,
    text: "Available for Destination Weddings & Events Across India",
  },
];

const ChooseMe = () => {
  const isLargeScreen = useMediaQuery({ maxWidth: 992 });
  return (
    <section className="container chooseMeContainer">
      <div className="chooseHeading">
        <FadeUp>
          <p>Qualities</p>
        </FadeUp>
        <FadeUp>
          <h5>Why Choose Me?</h5>
        </FadeUp>
      </div>
      <div
        className="backgroundContainer"
        style={{
          backgroundImage: `url(${isLargeScreen ? chooseMobile : choose} )`,
        }}
      >
        <div className="chooseContent">
          {chooseItems.map((item) => (
            <div className="chooseSpecific" key={item.id}>
              <img src={item.image} alt="icon" />
              <FadeUp>
                <p>{item.text}</p>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseMe;
