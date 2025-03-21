import React from "react";
import "./connect.scss";
import Button from "../Button/Button";
import FadeUp from "../../utils/FadeUp";

const Connect = () => {
  return (
    <section className="container connectContainer ">
      <div className="connectContent">
        <div className="connectData">
          <FadeUp>
            <p>Connect</p>
          </FadeUp>
          <FadeUp>
            <h2>Let's Create Magic Together!</h2>
          </FadeUp>

          <FadeUp>
            <span>
              Ready to bring your dream look to life? Reach out to book an
              appointment or inquire about my services. I can't wait to make you
              look and feel amazing!
            </span>
          </FadeUp>
        </div>
        <div className="buttonContainer2">
          <Button title="Book Your Appointment" />

          <button className="consulation">Get a Free Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default Connect;
