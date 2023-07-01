import React from "react";
import ProjectImg_2 from "../assets/Project_2.png";

import "../projects/projects.scss";

export default class Project_2 extends React.Component {
  render() {
    return (
      <>
        <section className="projectsPage">
          <div>
            <h4>
              We complete every projects <br /> extra care as customer need
            </h4>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, <br /> non suscipit arcu. Quisque aliquam posuere
              tortor, sit amet convallis nuncoe <br /> scelerisque in. orem
              ipsum dolor sit amet, consectetur adipisicing elit. Labore <br />{" "}
              eius molestiae facere, natus reprehenderit eaque eum, autem ipsam.
              Magfini, <br /> error. Tempora odit laborum iure inventore
              possimus laboriosam qui nam. <br />
            </span>
            <button>Read more</button>
          </div>
          <div>
            <img src={ProjectImg_2} alt="" />
          </div>
        </section>
      </>
    );
  }
}
