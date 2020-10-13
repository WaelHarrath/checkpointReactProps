import React from "react";
import PropTypes from "prop-types";
function Banner(props) {
  function HandleName() {
    alert(props.name);
  }
  return (
    <section className="container-banner">
      <a href="#home">
        <img
          id="profilepic"
          src={props.myimg}
          width="170"
          height="170"
          alt="profilepic"
          onClick={HandleName}
        />
      </a>
      <h1> Hi! I'm {props.name} </h1>
      <p id="paragarph1">{props.desc}</p>
    </section>
  );
}
Banner.defaultProps = {
  name: "Harrath Wael",
  desc:
    "My name is Wael Harrath , i'm a beginner FullStack js developper . I'm trying my best to get good at React Js so i can get a job as a developper. I like development , it allows you to create some unique web apps and show your imagination and skills to the world .",
};
Banner.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
};
export default Banner;
