import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img " />
        <img src={play_icon} alt="" className="play_icon " onClick={()=>
          {setPlayState (true)}} />
      </div>
      <div className="about-right">
      <h3>About Us</h3>
      <h2>Engineering Excellence Rooted in Experience and Innovation</h2>
      <p>
        SUN ENGINEERING is a multi-disciplinary engineering company established
        in 2005, headquartered in Trichy, India. The company is backed by a team
        of highly qualified engineers with extensive experience in analysis,
        design, and application engineering.
      </p>
      <p>
        We pride ourselves on delivering economical and high-quality engineering
        services while strictly adhering to delivery schedules. Our core
        philosophy is to provide technically sound solutions that meet client
        needs with precision and reliability.
      </p>
      <p>
        With a commitment to continuous improvement, SUN ENGINEERING has built a
        strong reputation for trust, performance, and engineering excellence in
        both domestic and international markets.
      </p>
      </div>
    </div>
  );
};

export default About;
