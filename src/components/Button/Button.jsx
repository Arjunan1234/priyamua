import React from "react";
import "./button.scss";
import FadeUp from "../../utils/FadeUp";

const Button = ({ title = "Contact Us" }) => {
  return (
    <div className="buttonContainer">
      <FadeUp>{title}</FadeUp>
    </div>
  );
};

export default Button;
