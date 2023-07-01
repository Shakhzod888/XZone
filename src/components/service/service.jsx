import React from "react";
import service_1 from "../assets/servicePhoto_1.png";
import service_2 from "../assets/servicePhoto_2.png";
import service_3 from "../assets/servicePhoto_3.png";
import service_4 from "../assets/servicePhoto_4.png";
import service_5 from "../assets/servicePhoto_5.png";
import service_6 from "../assets/servicePhoto_6.png";

import "../service/service.scss";

function ServiceBox(props) {
  return (
    <div className="aboutServices">
      <div className={`${props.clases}`}>
        <img src={props.img} alt="" />
      </div>
      <h4>{props.text}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </p>
      <span>Lear more --</span>
    </div>
  );
}

export default class Service extends React.Component {
  render() {
    return (
      <>
        <section className="servicesPage">
          <h2>Our Service </h2>
          <p className="about">
            We turn information into actionable insights We work to understand
            your issues <br /> and are driven to ask better questions in the
            pursuit of making work.
          </p>

          <div className="services">
            <div className="serviceBox">
              <ServiceBox
                img={service_1}
                text={"Order Management"}
                clases={"imges_1"}
              />
              <ServiceBox
                img={service_2}
                text={"Social Assistant"}
                clases={"imges_2"}
              />
              <ServiceBox
                img={service_3}
                text={"Crypto Platform"}
                clases={"imges_3"}
              />
            </div>
            <div className="serviceBox">
              <ServiceBox
                img={service_4}
                text={"Crypto Platform"}
                clases={"imges_4"}
              />
              <ServiceBox
                img={service_5}
                text={"Crypto Platform"}
                clases={"imges_5"}
              />
              <ServiceBox
                img={service_6}
                text={"Crypto Platform"}
                clases={"imges_6"}
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}
