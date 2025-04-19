import React from "react";

import upArrow from "../../assets/images/footer/upArrow.svg";

import "./footer.scss";
import FadeUp from "../../utils/FadeUp";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                <a className="footerSubTitle" href="tel:+918287623582">
                  +91 8287623582
                </a>
              </FadeUp>
            </div>
            <div className="footerData">
              <FadeUp>
                <p className="footerSubTitle">Instragram</p>
              </FadeUp>
              <FadeUp>
                <a
                  className="footerSubTitle"
                  href="https://www.instagram.com/priyachandra_mua"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @priyachandra_mua
                </a>
              </FadeUp>
            </div>
          </div>
          <div className="backtotop" onClick={scrollToTop}>
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
