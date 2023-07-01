import React from "react";
import ProjectImg_1 from "../assets/Project_1.png";

import "../projects/projects.scss";

export default class Project_1 extends React.Component {
  render() {
    return (
      <>
        <section className="projectsPage">
          <div>
            <img src={ProjectImg_1} alt="" />
          </div>
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
        </section>
      </>
    );
  }
}
