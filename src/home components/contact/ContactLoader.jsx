import React from "react";
import "./Contact.scss";
import { emailContact } from "../../PAGES";

const Contact = () => {
  return (
    <div className="fw email-contact">
      <div>
        <img alt="" className="email-contact-image skeleton-loading" />
      </div>
      <div
        className="sw email-contact-text"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        <h5 className="skeleton-loading" style={{ color: "transparent" }}>
          Power As A Service
        </h5>
        <p
          className="root-text skeleton-loading"
          style={{ color: "transparent" }}
        >
          At Imperium, we take care of all your power and energy concerns by
          empowering your homes, stores and businesses with our clean energy
          solutions. By selecting our “Power as a Service” option, you are
          guaranteed clean and reliable power without the burden and hassle of
          installing, maintaining or even owning a solar/power solution. Begin
          to enjoy power today at zero upfront cost. You only pay an agreed
          tariff based on the solution deployed.
        </p>
        <button
          className="email-contact-button skeleton-loading"
          style={{ color: "transparent" }}
        >
          Send us an Email
        </button>
      </div>
    </div>
  );
};

export default Contact;
