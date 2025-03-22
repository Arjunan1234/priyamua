import React from "react";
import { useMediaQuery } from "react-responsive";

import aboutImage from "../../assets/images/about/aboutImage.png";
import aboutMobile from "../../assets/images/about/aboutMobile.png";
import star from "../../assets/images/about/star.svg";
import "./about.scss";
import FadeUp from "../../utils/FadeUp";

const About = () => {
  const isLargeScreen = useMediaQuery({ maxWidth: 992 });
  console.log(isLargeScreen, "isLargeScreen");

  return (
    <section className="container aboutContainer">
      <div>
        <img src={isLargeScreen ? aboutMobile : aboutImage} alt="" />
      </div>
      <div className="aboutContent">
        <div className="aboutHeading">
          <FadeUp>
            <p>ABOUT US</p>
          </FadeUp>
          <FadeUp>
            <h5>From Corporate to Creativity - My Makeup Journey</h5>
          </FadeUp>
        </div>
        <div className="aboutDetail">
          <FadeUp>
            <p>
              In 2018, I took a bold step—leaving my corporate job to pursue my
              passion for makeup artistry. Today, I'm a certified makeup artist
              in Dwarka, trained at Parul Garg's Makeup Academy, with 6+ years
              of experience in bridal, party, and editorial makeup.
            </p>
          </FadeUp>
          <FadeUp>
            <p>
              With 100+ happy brides and clients, my mission is to create
              stunning, confidence-boosting looks for every occasion. Whether
              you're a bride-to-be or someone looking for a glow-up, I'm here to
              make you shine!
            </p>
          </FadeUp>
        </div>
        <div className="aboutStar">
          <FadeUp>
            <p>
              <img src={star} alt="" />
              Expert in Bridal & Party Makeup in New Delhi
            </p>
          </FadeUp>
          <FadeUp>
            <p>
              <img src={star} alt="" />
              Personalized Looks for Every Skin Tone & Style
            </p>
          </FadeUp>
          <FadeUp>
            <p>
              <img src={star} alt="" />
              Makeup Studio in Dwarka Sector 8
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default About;
