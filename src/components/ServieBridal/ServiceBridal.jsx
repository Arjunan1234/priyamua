import React from "react";
import "./serviceBridal.scss";

import image1 from "../../assets/images/serviceBridal/image1.png";
import image2 from "../../assets/images/serviceBridal/image2.png";
import image3 from "../../assets/images/serviceBridal/image3.png";
import FadeUp from "../../utils/FadeUp";

const BridalCard = [
  {
    id: 1,
    image: image1,
    heading: "Bridal Makeup, packages starting from INR 15,000/-",
    description:
      "Your big day deserves perfection. I create timeless, picture-perfect bridal looks that radiate elegance and confidence.",
  },
  {
    id: 2,
    image: image2,
    heading: "Bridal Makeup, packages starting from INR 15,000/-",
    description:
      "Your big day deserves perfection. I create timeless, picture-perfect bridal looks that radiate elegance and confidence.",
  },
  {
    id: 3,
    image: image3,
    heading: "Bridal Makeup, packages starting from INR 15,000/-",
    description:
      "Your big day deserves perfection. I create timeless, picture-perfect bridal looks that radiate elegance and confidence.",
  },
];

const BridalRadial = [
  {
    id: 1,
    heading: "Editorial & Fashion Makeup ",
    description:
      "Unleash the power of imagination with avant-garde, trendsetting looks for photoshoots and creative project",
  },
  {
    id: 2,
    heading: "Makeup for Maternity Shoots",
    description: "Soft, glowing looks to celebrate motherhood with elegance.",
  },
];

const BridalRadial2 = [
  {
    id: 3,
    heading: "Sangeet & Mehendi Makeup",
    description:
      "Vibrant and fresh looks for your fun-filled pre-wedding festivities",
  },
  {
    id: 4,
    heading: "Personal Makeup Classes:",
    description:
      "Master the art of self-glam with customized one-on-one makeup tutorials designed just for you.",
  },
];

const ServiceBridal = () => {
  return (
    <section className="container serviceBridalContainer" id="service">
      <div className="serivceBridalHeading">
        <FadeUp>
          <p>SERVICES</p>
        </FadeUp>
        <FadeUp>
          <span>Flawless Looks for Every Occasion</span>
        </FadeUp>
      </div>
      <div className="cardContainer">
        {BridalCard?.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{
              backgroundImage: `url(${item?.image})`,
            }}
          >
            <FadeUp>
              <p>{item?.heading}</p>
            </FadeUp>
            <FadeUp>
              <h5>{item?.description}</h5>
            </FadeUp>
          </div>
        ))}
      </div>
      <div className="bridalContentContainer">
        <div className="bridalContentContainer1">
          {BridalRadial?.map((item, index) => (
            <div key={index} className="bridalContent">
              <FadeUp>
                <h5>{item?.heading}</h5>
              </FadeUp>
              <FadeUp>
                <p>{item?.description}</p>
              </FadeUp>
            </div>
          ))}
        </div>
        <div className="bridalContentContainer2">
          {BridalRadial2?.map((item, index) => (
            <div key={index} className="bridalContent">
              <FadeUp>
                <h5>{item?.heading}</h5>
              </FadeUp>
              <FadeUp>
                <p>{item?.description}</p>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBridal;
