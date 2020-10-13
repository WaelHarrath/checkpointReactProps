import React from "react";
import Navbar from "./profile/Navbar";
import "./App.css";
import "./profile/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./profile/Banner";
import About from "./profile/About";
import Skills from "./profile/Skills";
import Contact from "./profile/Contact";
import PropTypes from "prop-types";
import logo from "./profile/images/waelharrath.jpg";
function App() {
  return (
    <div className="App">
      <div id="home">
        <h1 className="header-h1">My Profile Page</h1>
      </div>
      <hr />
      <Navbar />
      <hr />
      <Banner
        name="Wael Harrath"
        desc="Beginner FullStack Js Developer"
        myimg={logo}
      />
      <hr />
      <About
        bio="My name is Wael Harrath , i'm a beginner FullStack js developper . I'm trying my best to get good at React Js so i can get a job as a developper. I like development , it allows you to create some unique web apps and show your imagination and skills to the world . 
      "
      />
      <hr />
      <h1 className="skillheader">My SKills</h1>
      <hr />
      <Skills />
      <hr />
      <h1 id="contactnav" className="contact">
        Contact Information
      </h1>
      <hr />
      <Contact
        name="Wael Harrath"
        email="waelharrath@gmail.com"
        phone={25691732}
      />
    </div>
  );
}
App.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
  desc: PropTypes.string,
};
App.defaultProps = {
  name: "Harrath Wael",
  phone: 25691732,
  email: "waelharrath@gmail.com",
  desc:
    "My name is Wael Harrath , i'm a beginner FullStack js developper . I'm trying my best to get good at React Js so i can get a job as a developper. I like development , it allows you to create some unique web apps and show your imagination and skills to the world . ",
};
export default App;
