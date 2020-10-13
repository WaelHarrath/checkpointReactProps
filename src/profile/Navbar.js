import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home">
        <i className="fa fa-fw fa-home"></i>Home
      </a>
      <a href="#container-about">
        <i className="fa fa-fw fa-user"></i>About
      </a>
      <a href="#skillheader">
        <i className="fa fa-fw fa-xing"></i>Skills
      </a>
      <a href="#contactnav">
        <i className="fa fa-fw fa-envelope"></i>Contact
      </a>
    </nav>
  );
}

export default Navbar;
