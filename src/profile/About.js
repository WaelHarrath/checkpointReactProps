import React from "react";
import biologo from "./images/biopicimg.jpg";
function About(props) {
  return (
    <section id="container-about" className="container-about">
      <h1>About Me</h1>

      <img src={biologo} width="180" height="180" alt="abtimg" />
      <p>{props.bio}</p>
    </section>
  );
}

export default About;
