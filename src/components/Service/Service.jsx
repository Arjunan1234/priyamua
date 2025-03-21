import React from "react";
import "./service.scss";
import FadeUp from "../../utils/FadeUp";

const serviceData = [
  {
    heading: "Self-Grooming Makeup Classes",
    description: "Learn professional techniques for your daily makeup routine.",
  },
  {
    heading: "Makeup for Pre-Wedding Shoots ",
    description: "Get a flawless look for your special photos.",
  },
  {
    heading: "Celebrity & Red Carpet Makeup",
    description: "Luxe makeup for high-profile events.",
  },
  {
    heading: "Eye Makeup Only (Smokey, Glitter, Cut Crease, etc.)",
    description: "Perfect for when you want the focus on your eyes.",
  },
  {
    heading: "Bridal Party Makeup (For Bridesmaids & Family) ",
    description: "Ensure your entire bridal squad looks stunning.",
  },
  {
    heading: "Tattoo Coverage & Skin Camouflag",
    description:
      "Expert techniques to conceal tattoos, scars, or pigmentation.",
  },
  {
    heading: "Theatrical & Costume Makeup",
    description: "Get a flawless look for your special photos.",
  },
  {
    heading: "Drag & Transformational Makeup",
    description: "Bold and creative looks for artistic transformations.",
  },
  {
    heading: "Face painting and face glitter / body glitter.",
    description: "Get a flawless look for your special photos.",
  },
];

const Service = () => {
  return (
    <section className="container serviceContainer">
      <div className="serviceContent">
        <div className="serviceHeading">
          <FadeUp>
            <p>Services</p>
          </FadeUp>
          <FadeUp>
            <span>Additional Services</span>
          </FadeUp>
        </div>
        <div className="serviceCardContainer">
          {serviceData?.map((item, index) => (
            <div key={index} className="card">
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

export default Service;
