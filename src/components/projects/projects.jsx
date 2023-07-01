import React from "react";

import "../projects/projects.scss";
import Project_1 from "./project_1";
import Project_2 from "./project_2";

export default class Projects extends React.Component {
  render() {
    return (
      <>
        <Project_1 />
        <Project_2 />
      </>
    );
  }
}
