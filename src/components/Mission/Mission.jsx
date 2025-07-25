import React from "react";
import "./Mission.css";
import mission1 from "../../assets/program-1.png";
import mission2 from "../../assets/program-2.png";
import mission3 from "../../assets/program-3.png";
import mission_icon1 from "../../assets/program-icon-1.png";
import mission_icon2 from "../../assets/program-icon-2.png";
import mission_icon3 from "../../assets/program-icon-3.png";

const Mission = () => {
  return (
    <div className="missions">
      <div className="mission">
        <img src={mission1} alt="Mission 1" />
        <div className="caption">
          <img src={mission_icon1} alt="" />
          <h1>MISSION</h1>
          <p>
            At SUN ENGINEERING, our mission is to deliver high-quality, reliable
            products and services, backed by 25 years of continuous investment
            in technology and talent.
          </p>
        </div>
      </div>
      <div className="mission">
        <img src={mission2} alt="Mission 2" />
        <div className="caption">
          <img src={mission_icon2} alt="" />
          <h1>PHILOSOPHY </h1>
          <p>
            SUN ENGINEERING is dedicated to providing high-quality, cost-effective
            services on time, building long-term client partnerships with
            solutions that meet global standards. We maintain strict
            confidentiality, respecting the sensitive nature of every project."
          </p>
        </div>
      </div>
      <div className="mission">
        <img src={mission3} alt="Mission 3" />
        <div className="caption">
          <img src={mission_icon3} alt="" />
          <h1>QUALITY</h1>
          <p>
            Our Quality policy is “To serve the engineering industry with timely
            quality services competitively, meeting desired and expressed client
            requirements”. We have a proven method, systems and procedure to
            ensure qualityengineering services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
