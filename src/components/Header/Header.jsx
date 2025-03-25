import React from "react";
import "./header.scss";

import websiteLogo from "../../assets/images/header/websiteLogo.svg";
import humburgerIcon from "../../assets/images/header/humburger.svg";
// import downArrow from "../../assets/images/header/downArrow.svg";
import Button from "../Button/Button";
import FadeUp from "../../utils/FadeUp";

const Header = () => {
  const scrollToAbout = () => {
    const formSection = document.getElementById("about-us");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToService = () => {
    const formSection = document.getElementById("service");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortFolio = () => {
    const formSection = document.getElementById("portfolio");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="container headerContainer">
      <img src={websiteLogo} alt="" />

      <img className="humburger" src={humburgerIcon} alt="" />

      <>
        <div className="navlinkContainer">
          <FadeUp>
            <p className="navLink" onClick={scrollToAbout}>
              About Us
            </p>
          </FadeUp>
          <FadeUp>
            <p className="navLink service" onClick={scrollToService}>
              {/* Services <img src={downArrow} alt="" /> */}
              Services
            </p>
          </FadeUp>
          <FadeUp>
            <p className="navLink" onClick={scrollToPortFolio}>
              Portfolio
            </p>
          </FadeUp>
        </div>
        <Button />
      </>
    </header>
  );
};

export default Header;
