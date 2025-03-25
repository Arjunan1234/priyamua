import React, { useState } from "react";
import Slider from "react-slick";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Service from "../components/Service/Service";
import Connect from "../components/Connect/Connect";
import Form from "../components/Form/Form";

import backgroundImage1 from "../assets/images/banner/banner1.png";
import backgroundImage2 from "../assets/images/banner/banner2.png";
import backgroundImage3 from "../assets/images/banner/banner3.png";

import backgroundImageMobile1 from "../assets/images/banner/banner1Mobile.png";
import backgroundImageMobile2 from "../assets/images/banner/banner2Mobile.png";
import backgroundImageMobile3 from "../assets/images/banner/banner3Mobile.png";

import "./homePage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "../components/About/About";
import ChooseMe from "../components/ChooseMe/ChooseMe";
import Testimonial from "../components/Testimonial/Testimonial";
import ServiceBridal from "../components/ServieBridal/ServiceBridal";
import Portfolio from "../components/Portfolio/Portfolio";
import { useMediaQuery } from "react-responsive";

const banners = [
  {
    image: backgroundImage1,
    mobileImage: backgroundImageMobile1,
    heading: "Unleashing Your Inner Glamour, One Brushstroke at a Time",
    content:
      "Welcome to Priya's Makeup Studio, your go-to destination for professional makeup services in Dwarka, New Delhi. Whether you need a bridal makeover, party glam, or high-fashion editorial makeup, I bring creativity and expertise to enhance your natural beauty.",
  },
  {
    image: backgroundImage2,
    mobileImage: backgroundImageMobile2,
    heading: "Unleashing Your Inner Glamour, One Brushstroke at a Time",
    content:
      "Welcome to Priya's Makeup Studio, your go-to destination for professional makeup services in Dwarka, New Delhi. Whether you need a bridal makeover, party glam, or high-fashion editorial makeup, I bring creativity and expertise to enhance your natural beauty.",
  },
  {
    image: backgroundImage3,
    mobileImage: backgroundImageMobile3,
    heading: "Unleashing Your Inner Glamour, One Brushstroke at a Time",
    content:
      "Welcome to Priya's Makeup Studio, your go-to destination for professional makeup services in Dwarka, New Delhi. Whether you need a bridal makeover, party glam, or high-fashion editorial makeup, I bring creativity and expertise to enhance your natural beauty.",
  },
];

const Mobile = [
  {
    heading: "Best Bridal Makeup Artist in Dwarka",
  },
  {
    heading: "Unleashing Your Inner Glamour, One Brushstroke at a Time",
  },
  {
    heading: "Unleashing Your Inner Glamour, One Brushstroke at a Time",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLargeScreen = useMediaQuery({ maxWidth: 992 });

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const progressValue = 100 - ((currentIndex + 1) / Mobile.length) * 100;

  return (
    <>
      <div className="bannerComponent">
        <Slider {...settings} className="bannerSlider">
          {banners.map((banner, index) => (
            <div key={index} className="bannerItem">
              <Banner
                image={isLargeScreen ? banner.mobileImage : banner.image}
                heading={banner.heading}
                content={banner.content}
              />
            </div>
          ))}
        </Slider>

        {/* Dynamic Border Transition */}
        <div className="bannerLine">
          <p className={currentIndex === 0 ? "active" : ""}>
            Best Bridal Makeup Artist in Dwarka
          </p>
          <p className={currentIndex === 1 ? "active" : ""}>
            Top Party Makeup Services in New Delhi
          </p>
          <p className={currentIndex === 2 ? "active" : ""}>
            Luxury Makeup Studio for All Occasions
          </p>
        </div>

        {isLargeScreen && (
          <div className="mobileSlide">
            {/* Circular Progress */}
            <div className="progress-circle">
              <svg viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" className="background" />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  className="progress"
                  style={{ strokeDashoffset: progressValue }}
                />
              </svg>
              <span>
                {currentIndex + 1}/{Mobile.length}
              </span>
            </div>

            {/* Show only one text based on index */}
            <p className="active">{Mobile[currentIndex].heading}</p>
          </div>
        )}
      </div>
      <About />
      <ChooseMe />
      <ServiceBridal />

      <Service />
      <Portfolio />

      <Testimonial />

      <Connect />

      <Form />
      <Footer />
    </>
  );
};

export default HomePage;
