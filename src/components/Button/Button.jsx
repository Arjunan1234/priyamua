import React from "react";
import "./button.scss";
import FadeUp from "../../utils/FadeUp";

const Button = ({ title = "Contact Us" }) => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="buttonContainer" onClick={scrollToForm}>
      <FadeUp>{title}</FadeUp>
    </div>
  );
};

export default Button;
