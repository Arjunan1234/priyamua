import React from "react";

import upArrow from "../../assets/images/footer/upArrow.svg";

import "./footer.scss";
import FadeUp from "../../utils/FadeUp";

const Footer = () => {
  return (
    <footer className="container footerContainer">
      <div className="footerDetails">
        <div className="footerRelate">
          <div className="footerContent">
            <div className="footerData">
              <FadeUp>
                <p className="footerSubTitle">Phone</p>
              </FadeUp>
              <FadeUp>
                <p className="footerSubTitle">+91 8287623582</p>
              </FadeUp>
            </div>
            <div className="footerData">
              <FadeUp>
                <p className="footerSubTitle">Instragram</p>
              </FadeUp>
              <FadeUp>
                <p className="footerSubTitle">@priyachandra_mua</p>
              </FadeUp>
            </div>
          </div>
          <div className="backtotop">
            <img src={upArrow} alt="upArrow" />
            Back to Top
          </div>
        </div>
        <FadeUp>
          <p className="copyRight">Copyright ©️ 2025 PriyaMUA</p>
        </FadeUp>
      </div>
    </footer>
  );
};

export default Footer;
