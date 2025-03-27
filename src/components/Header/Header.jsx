// import React from "react";
// import "./header.scss";

// import websiteLogo from "../../assets/images/header/websiteLogo.svg";
// import humburgerIcon from "../../assets/images/header/humburger.svg";
// // import downArrow from "../../assets/images/header/downArrow.svg";
// import Button from "../Button/Button";
// import FadeUp from "../../utils/FadeUp";
// import { useMediaQuery } from "react-responsive";

// const Header = () => {
//   const isMobile = useMediaQuery({ maxWidth: 992 });

//   const scrollToAbout = () => {
//     const formSection = document.getElementById("about-us");
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   const scrollToService = () => {
//     const formSection = document.getElementById("service");
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToPortFolio = () => {
//     const formSection = document.getElementById("portfolio");
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <header className="container headerContainer">
//       <img src={websiteLogo} alt="" />

//       <img className="humburger" src={humburgerIcon} alt="" />

//       <>
//         <div className="navlinkContainer">
//           <FadeUp>
//             <p className="navLink" onClick={scrollToAbout}>
//               About Us
//             </p>
//           </FadeUp>
//           <FadeUp>
//             <p className="navLink service" onClick={scrollToService}>
//               Services
//             </p>
//           </FadeUp>
//           <FadeUp>
//             <p className="navLink" onClick={scrollToPortFolio}>
//               Portfolio
//             </p>
//           </FadeUp>
//         </div>
//         <Button />
//       </>

//       {isMobile  &&

// }
//     </header>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from "react";
import "./header.scss";

import websiteLogo from "../../assets/images/header/websiteLogo.svg";
import humburgerIcon from "../../assets/images/header/humburger.svg";
import closeIcon from "../../assets/images/about/circle.svg";
import Button from "../Button/Button";
import FadeUp from "../../utils/FadeUp";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 992 });

  // Ref for mobile navbar
  const menuRef = useRef(null);

  console.log(isMenuOpen, "isMenuOpen");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after selecting
    }
  };

  return (
    <header className="container headerContainer">
      <img src={websiteLogo} alt="Website Logo" />

      {/* Toggle between humburger and close icon */}
      <img
        className="humburger"
        src={isMenuOpen ? closeIcon : humburgerIcon}
        alt="Menu"
        onClick={toggleMenu}
      />

      <div className="navlinkContainer">
        <FadeUp>
          <p className="navLink" onClick={() => scrollToSection("about-us")}>
            About Us
          </p>
        </FadeUp>
        <FadeUp>
          <p
            className="navLink service"
            onClick={() => scrollToSection("service")}
          >
            Services
          </p>
        </FadeUp>
        <FadeUp>
          <p className="navLink" onClick={() => scrollToSection("portfolio")}>
            Portfolio
          </p>
        </FadeUp>
      </div>
      <Button />

      {isMobile && (
        <div
          ref={menuRef}
          className={`mobileNav ${isMenuOpen ? "open" : "closed"}`}
        >
          <p className="navLink" onClick={() => scrollToSection("about-us")}>
            About Us
          </p>
          <p className="navLink" onClick={() => scrollToSection("service")}>
            Services
          </p>
          <p className="navLink" onClick={() => scrollToSection("portfolio")}>
            Portfolio
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
