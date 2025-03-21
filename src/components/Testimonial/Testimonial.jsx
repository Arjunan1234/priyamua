import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.scss";

import star from "../../assets/images/choose/Star.svg";
import profile from "../../assets/images/choose/profile.svg";
import profile2 from "../../assets/images/choose/profile2.svg";
import FadeUp from "../../utils/FadeUp";

const testimonials = [
  {
    id: 1,
    review:
      "Priya did an incredible job on my bridal makeup! She understood exactly what I wanted and made me feel like a queen. Highly recommended",
    name: "Riya Mathew",
    image: profile,
  },
  {
    id: 2,
    review:
      "Priya did an incredible job on my bridal makeup! She understood exactly what I wanted and made me feel like a queen. Highly recommended",
    name: "Ananya K",
    image: profile2,
  },
  {
    id: 3,
    review:
      "Priya did an incredible job on my bridal makeup! She understood exactly what I wanted and made me feel like a queen. Highly recommended",
    name: "Riya Mathew",
    image: profile,
  },
  {
    id: 4,
    review:
      "Priya did an incredible job on my bridal makeup! She understood exactly what I wanted and made me feel like a queen. Highly recommended",
    name: "Ananya K",
    image: profile2,
  },
  {
    id: 3,
    review:
      "Priya did an incredible job on my bridal makeup! She understood exactly what I wanted and made me feel like a queen. Highly recommended",
    name: "Riya Mathew",
    image: profile,
  },
  {
    id: 4,
    review:
      "Priya did an incredible job on my bridal makeup! She understood exactly what I wanted and made me feel like a queen. Highly recommended",
    name: "Ananya K",
    image: profile2,
  },
];

const Testimonial = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (!isReady) return null;

  return (
    <section className=" container testimonialContainer">
      <div className="testimonialHeading">
        <FadeUp>
          <p>TESTIMONIAL</p>
        </FadeUp>
        <FadeUp>
          <span>Real Stories, Real Glamour</span>
        </FadeUp>
        <FadeUp>
          <h6>
            Don't just take my word for it - hear from my clients who walked in
            with a vision and walked out feeling their absolute best.
          </h6>
        </FadeUp>
      </div>
      <div style={{ width: "100%", position: "relative" }}>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div className="card" key={testimonial.id}>
              <div className="cardHeading">
                <FadeUp>
                  <p>Google Review</p>
                </FadeUp>
                <span>
                  4.8 <img src={star} alt="star" />
                </span>
              </div>
              <FadeUp>
                <p className="testimonialReview">{testimonial.review}</p>
              </FadeUp>
              <img src={profile} alt="profile" />
              <FadeUp>
                <span className="name">{testimonial.name}</span>
              </FadeUp>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
