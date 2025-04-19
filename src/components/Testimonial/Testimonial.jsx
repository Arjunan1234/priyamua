import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.scss";

import star from "../../assets/images/choose/Star.svg";
import image1 from "../../assets/images/choose/image1.svg";
import image2 from "../../assets/images/choose/image2.svg";
import image3 from "../../assets/images/choose/image3.svg";
import image4 from "../../assets/images/choose/image4.svg";
import image5 from "../../assets/images/choose/image5.svg";

// import maleAvatar from "../../assets/images/choose/maleAvatar.png";
import FadeUp from "../../utils/FadeUp";

const testimonials = [
  {
    id: 1,
    review:
      "Great work .... Always on time and puts clients need first.... She knows the base and the style both .... She understands the occasion and the trend.. no over do just as u want ... Lots of 💕 love ...",
    name: "Jaya singh",
    image: image1,
  },
  {
    id: 2,
    review:
      "The bestest service I have ever experienced. Priya is one of the renowned makeup artist and holds an expertise in this domain. She did my makeup flawlessly and made many heads turned around as I walked through. Thank you so much Priya for this amazing service at the most reasonable price. I would 100% recommend it to everyone.",
    name: "Megha Gupta",
    image: image2,
  },
  {
    id: 3,
    review:
      "She is an awesome makeup artist. She takes in full consideration of the needs of the bride and gave me the perfect look for my d day. You should definitely book her for your special day",
    name: "Kanak Papney",
    image: image3,
  },
  {
    id: 4,
    review:
      "She is a very talented makeup artist. I couldn't believe my transformation for my sister's wedding. She made me look and feel so beautiful. Much recommended",
    name: "Ritika Vidyarthi",
    image: image4,
  },
  {
    id: 5,
    review:
      "I have got makeup done earlier from Priya too, she knows what she is doing, knows her brushes and products well uses just the right amount of it. I love how she did a no makeup look for me on my brother in laws wedding. Thank you Priya",
    name: "Yashika Bisht",
    image: image5,
  },
  {
    id: 6,
    review:
      "She is an amazing makeup artist. Very sweet and patient. She gave me the perfect look for my engagement. Loved her work. Excellen",
    name: "Kiran Morya",
    image: image3,
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
                <p>Google Review</p>
                <span>
                  5{" "}
                  {[...Array(5)].map((_, index) => (
                    <img key={index} src={star} alt="star" />
                  ))}
                </span>
              </div>
              <p className="testimonialReview">{testimonial.review}</p>
              <img
                className="imageAvatar"
                src={testimonial?.image ? testimonial?.image : femaleAvatar}
                alt="profile"
              />
              <span className="name">{testimonial.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
