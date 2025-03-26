import React, { useState } from "react";
import "./form.scss";
import Input from "../Input/Input";
import emailjs from "@emailjs/browser";
import formImage from "../../assets/images/form/formImage.png";
import rightArrow from "../../assets/images/form/rightArrow.svg";
import calender from "../../assets/images/form/calender.svg";
import FadeUp from "../../utils/FadeUp";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventLocation: "",
  });
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.eventDate.trim())
      newErrors.eventDate = "Event date is required";
    if (!formData.eventLocation.trim())
      newErrors.eventLocation = "Event location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);
    }
    setLoading(true);
    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      eventDate: formData.eventDate,
      eventLocation: formData.eventLocation,
    };

    emailjs
      .send(
        "service_iag0eml", // ----> service id
        "template_snby4za",  // -----> template id
        templateParams, 
        "GZniZ-p0MyFYgoTmG"  // ------> public id
      )
      .then(
        () => {
          //   setIsSubmit(!isSubmit);
          setFormData({
            name: "",
            email: "",
            phone: "",
            eventDate: "",
            eventLocation: "",
          });
          setErrors({});
          alert("Form Submited Successfully");
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          // setIsSubmit(!isSubmit);
          // setEmailError("Email Not Sent. Try Again");
          console.log("email error", error);
          alert("Form not Submitted");
        }
      );
  };

  return (
    <div className="container formContainer" id="contact-form">
      <img src={formImage} alt="" />

      <div className="formData">
        <div className="formHeading">
          <FadeUp>
            <p className="formName">Form</p>
          </FadeUp>
          <FadeUp>
            <p className="contact">Contact Us</p>
          </FadeUp>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <Input
            placeholder="eg. sample name"
            label="Full Name "
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <Input
            placeholder="eg. sample@mail.com"
            label="Email "
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            placeholder="eg. 99XXXXXXXX"
            label="Phone no. "
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <Input
            placeholder="Select the date"
            label="Event date "
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            error={errors.eventDate}
            image={calender}
          />
          <Input
            placeholder="Enter the location"
            label="Event Location "
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            error={errors.eventLocation}
          />
          <button type="submit" className="submitbutton">
            {loading ? "Loading..." : "Submit Form"}
            <img src={rightArrow} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
