import React from "react";
import "./header.scss";

import websiteLogo from "../../assets/images/header/websiteLogo.svg";
import humburgerIcon from "../../assets/images/header/humburger.svg";
// import downArrow from "../../assets/images/header/downArrow.svg";
import Button from "../Button/Button";
import FadeUp from "../../utils/FadeUp";

const Header = () => {


  return (
    <header className="container headerContainer">
      <img src={websiteLogo} alt="" />

      <img className="humburger" src={humburgerIcon} alt="" />

      <>
        <div className="navlinkContainer">
          <FadeUp>
            <p className="navLink">About Us</p>
          </FadeUp>
          <FadeUp>
            <p className="navLink service">
              {/* Services <img src={downArrow} alt="" /> */}
              Services
            </p>
          </FadeUp>
          <FadeUp>
            <p className="navLink">Portfolio</p>
          </FadeUp>
        </div>
        <Button />
      </>
    </header>
  );
};

export default Header;
