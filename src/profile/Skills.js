import React from "react";
import jsimg from "./images/javascriptimg.png";
import htmlimg from "./images/html5logo.jpg";
import cssimg from "./images/csslogo.png";
import dbimg from "./images/database.jpg";
function Skills() {
  return (
    <section id="skillheader" className="flex-project-container">
      <div>
        <img src={jsimg} width="100" height="100" alt="js" />
      </div>
      <div>
        <img src={htmlimg} width="100" height="100" alt="html" />
      </div>
      <div>
        <img src={cssimg} width="100" height="100" alt="css" />
      </div>
      <div>
        <img src={dbimg} width="100" height="100" alt="db" />
      </div>
    </section>
  );
}

export default Skills;
