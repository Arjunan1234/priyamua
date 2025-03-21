import React from "react";
import "./input.scss";
import FadeUp from "../../utils/FadeUp";

const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange = () => {},
  error,
  image,
}) => {
  return (
    <div className="container inputContainer">
      <label htmlFor="">
        <FadeUp>
          {label} <span>*</span>
        </FadeUp>
      </label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <img className="calenderIcon" src={image} alt="" />

      <p className="error"> {error}</p>
    </div>
  );
};

export default Input;
