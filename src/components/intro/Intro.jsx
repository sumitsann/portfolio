import React from "react";

import "./intro.css";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is: </h2>
          <h2 classname="i-name">Sumit Ojha </h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Web Page Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Web Content Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>

          <div className="i-description">
            I am a Software Developer with knowledge on production of web and
            mobile applications. I have good understanding and technical
            expertise in Computer Science fundamentals, Javascript, ReactJS,
            Redux, NodeJS, MongoDB, CSS, HTML and other technologies. I
            graduated from Tarleton State University in Bachelor in Computer
            Information Systems in May 2021.
          </div>
        </div>
      </div>
      <div className="i-right">Right</div>
    </div>
  );
}

export default Intro;
