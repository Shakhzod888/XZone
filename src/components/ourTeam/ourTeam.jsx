import React from "react";

import Worker_1 from "../assets/worker_1.png";
import Worker_2 from "../assets/worker_2.png";
import Worker_3 from "../assets/worker_3.png";
import Worker_4 from "../assets/worker_4.png";

import Skype from "../assets/skype.png";
import Linkedin from "../assets/Linkedin.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/twitter.png";

import "../ourTeam/ourTeam.scss";

const Worker = (props) => {
  return (
    <div className="aboutUsers">
      <img className="photoOfWorker" src={props.img} alt="" />
      <span className="nameOfWorker">{props.name}</span>
      <span className="jobOfWorker">{props.job}</span>
      <div className="contactLinks">
        <img src={Skype} alt="" />
        <img src={Linkedin} alt="" />
        <img src={Twitter} alt="" />
        <img src={Facebook} alt="" />
      </div>
    </div>
  );
};

export default class OurTeam extends React.Component {
  render() {
    return (
      <>
        <section className="teamPage">
          <h5>Meet Our Team</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis{" "}
            <br />
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
          <div className="listOfWorkes">
            <Worker img={Worker_1} name="Sunny Khan" job="Executive Officer" />
            <Worker img={Worker_2} name="Alina Jesia" job="UX/UI DESIGNER" />
            <Worker
              img={Worker_3}
              name="Alex Sohag"
              job="BUSINESS DEVELOPMENT"
            />
            <Worker img={Worker_4} name="Afroza Mou" job="Head of marketing" />
          </div>
        </section>
      </>
    );
  }
}
