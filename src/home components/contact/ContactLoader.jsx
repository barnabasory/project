import React from "react";
import "./Contact.scss";
import { placeholder } from "../../PAGES";

const Contact = () => {
  return (
    <div className="fw email-contact">
      <img
        src={placeholder}
        alt=""
        className="email-contact-image "
        style={{ objectFit: "cover", width: "60%" }}
      />

      <div className="sw email-contact-text">
        <h5>Power As A Service</h5>
        <p className="root-text">
          At Imperium, we take care of all your power and energy concerns by
          empowering your homes, stores and businesses with our clean energy
          solutions. By selecting our “Power as a Service” option, you are
          guaranteed clean and reliable power without the burden and hassle of
          installing, maintaining or even owning a solar/power solution. Begin
          to enjoy power today at zero upfront cost. You only pay an agreed
          tariff based on the solution deployed.
        </p>
        <button className="email-contact-button">Send us an Email</button>
      </div>
    </div>
  );
};

export default Contact;
