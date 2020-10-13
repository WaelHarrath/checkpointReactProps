import React from "react";
import contact from "./images/contactlogo.png";
import mailme from "./images/mailme.png";
import PropTypes from "prop-types";
function Contact(props) {
  return (
    <section className="container-1">
      <img
        id="contactimg"
        src={contact}
        width="180"
        height="180"
        alt="contactlogo"
      />
      <h3>
        {" "}
        <strong>{props.name}</strong>
      </h3>
      <h4>Email Id: {props.email}</h4>
      <a
        id="mail"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=waelharrath@gmail.com"
      >
        <img id="mailmelogo" src={mailme} alt="mail me" />
        Click Here To Send Mail
      </a>
      <h4>My Phone: {props.phone}</h4>

      <a href="https://www.facebook.com/tghostprod/">
        <span
          className="icon fa fa-facebook"
          style={{ color: "antiquewhite" }}
        ></span>
      </a>
      <a href="https://twitter.com/waelharrath">
        <span
          className="icon fa fa-twitter"
          style={{ color: "antiquewhite" }}
        ></span>
      </a>
      <a href="https://github.com/WaelHarrath">
        <span
          className="icon fa fa-github"
          style={{ color: "antiquewhite" }}
        ></span>
      </a>
    </section>
  );
}
Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
};
Contact.defaultProps = {
  name: "Harrath Wael",
  phone: 25691732,
  email: "waelharrath@gmail.com",
};

export default Contact;
